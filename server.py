import http.server
import socketserver
import json
import sqlite3
import urllib.parse
from datetime import datetime
import os
import sys

PORT = 8000
DATABASE = "orders.db"

def init_db():
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            customer_name TEXT,
            phone_number TEXT,
            delivery_address TEXT,
            products TEXT,
            total_price REAL,
            order_date TEXT
        )
    ''')
    conn.commit()
    conn.close()

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        if self.path == '/api/orders':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            try:
                order_data = json.loads(post_data.decode('utf-8'))
                
                customer_name = order_data.get('customerName')
                phone_number = order_data.get('phoneNumber')
                delivery_address = order_data.get('deliveryAddress')
                products_json = json.dumps(order_data.get('products', []))
                total_price = order_data.get('totalPrice')
                order_date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                
                conn = sqlite3.connect(DATABASE)
                cursor = conn.cursor()
                cursor.execute('''
                    INSERT INTO orders (customer_name, phone_number, delivery_address, products, total_price, order_date)
                    VALUES (?, ?, ?, ?, ?, ?)
                ''', (customer_name, phone_number, delivery_address, products_json, total_price, order_date))
                conn.commit()
                conn.close()
                
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'status': 'success'}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'status': 'error', 'message': str(e)}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

    def do_GET(self):
        if self.path == '/api/orders':
            try:
                conn = sqlite3.connect(DATABASE)
                conn.row_factory = sqlite3.Row
                cursor = conn.cursor()
                cursor.execute('SELECT * FROM orders ORDER BY id DESC')
                rows = cursor.fetchall()
                orders = [dict(row) for row in rows]
                conn.close()
                
                # Parse product JSON for response
                for order in orders:
                    order['products'] = json.loads(order['products'])
                
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps(orders).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': str(e)}).encode('utf-8'))
        else:
            super().do_GET()

if __name__ == '__main__':
    init_db()
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"Backend gracefully running. Open http://localhost:{PORT} for the website.")
        print(f"Open http://localhost:{PORT}/admin.html to view your orders.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\\nShutting down server.")
            sys.exit(0)
