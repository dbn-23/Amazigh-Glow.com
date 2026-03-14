// Product data for Amazigh Glow store

const products = [
    {
        id: 1,
        title: { en: "Huile de Noyau d'Abricot", fr: "Huile de Noyau d'Abricot",ar: "زيت نواة المشمش "},
        origin: { en: "Handcrafted at Home", fr: "Artisanat Maison", ar: "الصناعة المنزلية" },
        price: 50,
        discountPrice: null,
        inStock: true,
        image: "images/abricot.png", 
        description: {
            en: "Helps thicken eyebrows and lengthen eyelashes, hydrates the skin, and softens the hair for more shine and vitality.",
            fr: "Aide à densifier les sourcils et allonger les cils, hydrate la peau et adoucit les cheveux pour plus de brillance et de vitalité.",
            ar:"يساعد على تكثيف الحواجب وإطالة الرموش، يرطب البشرة ويمنح الشعر نعومة ولمعانًا وحيوية"
        },
        ritual: {
            en: "An excellent daily companion. Massage 3 drops onto clean skin before bed for a comforting, restorative night.",
            fr: "Un excellent compagnon quotidien. Massez 3 gouttes sur une peau propre avant de vous coucher pour une nuit réconfortante.",
            ar:"رفيق يومي ممتاز؛ دلّكي 3 قطرات على بشرة نظيفة قبل النوم لليلة مريحة ومجددة"
        }
    },
    {
        id: 2,
        title: { en: "Huile de Camomille", fr: "Huile de Camomille", ar: "زيت البابونج" },
        origin: { en: "Handcrafted at Home", fr: "Artisanat Maison", ar: "الصناعة المنزلية" },
        price: 100,
        discountPrice: null,
        inStock: true,
        image: "images/camomille.png",
        description: {
            en: "Soothes sensitive skin, brightens the complexion, and gently nourishes the hair.",
            fr: "Apaise les peaux sensibles, illumine le teint et nourrit doucement les cheveux.",
            ar: "يعالج البشرة الحساسة، ويضيء اللون، ويُغَذِّي الشعر برفق"
        },
        ritual: {
            en: "Whenever your skin feels overwhelmed, pat a few drops gently over the affected areas. Think of it as a calming cup of tea for your face.",
            fr: "Chaque fois que votre peau se sent dépassée, tapotez quelques gouttes doucement sur les zones. Considérez-le comme une infusion calmante pour votre visage.",
            ar:"عندما تشعر بشرتك بالإجهاد، ربّتي بضع قطرات بلطف على المناطق المتأثرة، كأنها كوب شاي مهدئ لوجهك"
        }
    },
    {
        id: 3,
        title: { en: "Huile d'Amande Douce", fr: "Huile d'Amande Douce",ar:" زيت اللوز الحلو" },
        origin: { en: "Handcrafted at Home", fr: "Artisanat Maison", ar: "الصناعة المنزلية" },
        price: 50,
        discountPrice: null,
        inStock: true,
        image: "images/amonde douce.png",
        description: {
            en: "An ideal moisturizer for sensitive skin, it brings shine and softness to the hair.",
            fr: "Hydratant idéal pour les peaux sensibles, il apporte brillance et douceur aux cheveux.",
            ar:"مرطب مثالي للبشرة الحساسة، يمنح الشعر لمعانًا ونعومة"
        },
        ritual: {
            en: "After your shower or bath, lavishly apply this over your body to trap the moisture. Perfect for softening dry patches.",
            fr: "Après la douche ou le bain, appliquez généreusement sur le corps pour retenir l’hydratation et adoucir les zones sèches.",
            ar:"بعد الاستحمام، ضعيه بسخاء على الجسم للحفاظ على الترطيب وتنعيم المناطق الجافة"
        }
    },
    {
        id: 4,
        title: { en: "Huile de Cloches", fr: "Huile de Cloches", ar:"زيت الجنجلان" },
        origin: { en: "Handcrafted at Home", fr: "Artisanat Maison", ar: "الصناعة المنزلية" },
        price: 50,
        discountPrice: null,
        inStock: true,
        image: "images/cloches.png",
        description: {
            en: "Protects the skin, strengthens the hair, and brings natural shine and softness.",
            fr: "Protège la peau, renforce les cheveux et apporte une brillance et une douceur naturelles.",
            ar: "يحمي البشرة، ويقوّي الشعر، ويجلب لمعاناً ونعومة طبيعية"

        },
        ritual: {
            en: "Reserve this for when you need a concentrated boost of life. Massage very gently on target areas.",
            fr: "Réservez-le lorsque vous avez besoin d’un soin concentré ; massez très délicatement sur les zones ciblées.",
            ar:"يُستخدم عند الحاجة إلى عناية مركزة؛ يُدلّك بلطف شديد على المناطق المستهدفة"
        }
    },
    {
        id: 5,
        title: { en: "Huile de Coco", fr: "Huile de Coco", ar:"زيت جوز الهند" },
        origin: { en: "Handcrafted at Home", fr: "Artisanat Maison", ar:"الصناعة المنزلية" },
        price: 50,
        discountPrice: null,
        inStock: true,
        image: "images/coco.png",
        description: {
            en: "Deeply nourishes, softens the skin, and strengthens the hair for natural beauty",
            fr: "Nourrit en profondeur, adoucit la peau et renforce les cheveux pour une beauté naturelle. ",
            ar:"يغذي بعمق، ينعّم البشرة ويقوّي الشعر لجمال طبيعي"
        },
        ritual: {
            en: "Melt it between your hands and smooth it through the ends of your hair as a pre-wash mask, or use it to generously hydrate thirsty skin.",
            fr: "Faites-le fondre entre vos mains et appliquez-le sur les pointes des cheveux comme masque avant le lavage, ou utilisez-le pour hydrater généreusement la peau sèche.",
            ar:"أذيبيه بين يديك ثم وزعيه على أطراف الشعر كقناع قبل الغسل، أو استخدميه لترطيب البشرة الجافة بسخاء"
        
        }
    },
    {
        id: 6,
        title: { en: "Pure Ghassoul Clay", fr: "Argile Ghassoul" ,ar:"غاسول طبيعي" },
        origin: { en: "Handcrafted at Home", fr: "Artisanat Maison",ar:"الصناعة المنزلية" },
        price: 50,
        discountPrice: null,
        inStock: true,
        image: "images/ghassoul.png",
        description: {
            en: "Natural ghassoul enriched with natural herbs, ideal for dry hair; it strengthens, protects against split ends, deeply cleanses, and eliminates dandruff and excess sebum for clean and healthy hair.",
            fr: "Ghassoul naturel enrichi aux herbes naturelles, idéal pour les cheveux secs ; il fortifie, protège contre les fourches, nettoie en profondeur et élimine les pellicules ainsi que l’excès de sébum pour des cheveux propres et sains.",
            ar:"غاسول طبيعي غني بالأعشاب الطبيعية، مثالي للشعر الجاف؛ يقوي الشعر، يحمي من التقصف، ينظف بعمق ويزيل القشرة والدهون الزائدة ليمنح شعراً نظيفاً وصحياً"
        },
        ritual: {
            en: "Blend with warm water until it forms a silky mud. Smear over your body or hair during your bath, let it sit for 5 minutes, and rinse thoroughly.",
            fr: "Mélanger avec de l’eau tiède jusqu’à obtenir une pâte soyeuse, appliquer sur le corps ou les cheveux pendant le bain, laisser poser 5 minutes puis rincer abondamment.",
            ar:"يُخلط مع ماء دافئ حتى يصبح معجونًا ناعمًا، يُوضع على الجسم أو الشعر أثناء الاستحمام، يُترك  لمدة 5 دقائق ثم يُشطف جيدًا "
        }
    },
    {
        id: 7,
        title: { en: "Traditional Henna", fr: "Henné Traditionnel",ar:"حناء طبيعية" },
        origin: { en: "Handcrafted at Home", fr: "Artisanat Maison",ar:"الصناعة المنزلية" },
        price: 50,
        discountPrice: null,
        inStock: true,
        image: "images/henna.jpeg",
        description: {
            en: "Natural henna beneficial for hair and skin; it nourishes, strengthens, and provides softness and a natural glow.",
            fr: "Henné naturel bénéfique pour les cheveux et la peau ; il nourrit, fortifie et apporte douceur et éclat naturel.",
            ar: "حناء طبيعية مفيدة للشعر والبشرة؛ تغذي وتقوي وتمنح نعومة وإشراقة طبيعية"
        },
        ritual: {
            en: "For a traditional body treatment, mix with warm water and a squeeze of lemon. Apply lightly over the body before rinsing for incredibly soft, slightly warmed skin tone.",
            fr: "Pour un soin corporel traditionnel, mélanger avec de l’eau tiède et un peu de citron, appliquer légèrement sur le corps puis rincer pour révéler une peau incroyablement douce et un teint légèrement réchauffé.",
            ar: "لعلاج تقليدي للجسم، يُمزج مع ماء دافئ وقليل من عصير الليمون، يُوضع بلطف على الجسم ثم يُشطف للحصول على بشرة ناعمة جداً ولون دافئ قليلاً"
        }
    },
    {
        id: 8,
        title: { en: "Tabrima Blend", fr: "Tabrima", ar: "تبريمة" },
        origin: { en: "Handcrafted at Home", fr: "Artisanat Maison", ar: "الصناعة المنزلية" },
        price: 20,
        discountPrice: null,
        inStock: true,
        image: "images/tabrima.png",
        description: {
            en: "An exceptional natural tabrima made from a carefully selected blend of herbs that gently exfoliates, purifies the skin, evens the complexion, and leaves it soft with a natural glow.",
            fr: "Une tabrima naturelle exceptionnelle, composée d’un mélange d’herbes soigneusement sélectionnées, qui exfolie en douceur, purifie la peau, unifie le teint et lui apporte douceur et éclat naturel.",
            ar:"تبريمة طبيعية مميزة مكوّنة من مزيج من الأعشاب المختارة بعناية، تقشّر البشرة بلطف، تنقّيها، توحّد لونها وتمنحها نعومة وإشراقة طبيعية"
        },
        ritual: {
            en: "Mix with Moroccan black soap, apply to damp skin in the steam, and scrub away dead skin gracefully.",
            fr: "Mélangez avec du savon noir, appliquez sur peau humide puis gommez les peaux mortes.",
            ar:"خلط مع صابون مغربي أسود، وطبق على البشرة الرطبة في البخار، وقم بمسح الجلد الميت برفق"
        }
    },
    {
        id: 9,
        title: { en: "Huile de Datte", fr: "Huile de Datte",ar:"زيت التمر" },
        origin: { en: "Handcrafted at Home", fr: "Artisanat Maison",ar:"الصناعة المنزلية" },
        price: 50,
        discountPrice: null,
        inStock: true,
        image: "images/datte.png",
        description: {
            en: "Ideal for eyebrows, eyelashes, and hair; it reduces hair loss and deeply nourishes the skin.",
            fr: "Idéal pour les sourcils, les cils et les cheveux ; il réduit la chute et nourrit la peau en profondeur",
            ar: "مثالي للحواجب والرموش والشعر؛ يقلل من التساقط ويغذي البشرة بعمق"

        },
        ritual: {
            en: "Apply a slightly more generous amount before sleep to allow the rich texture to repair the skin overnight.",
            fr: "Appliquer une quantité légèrement plus généreuse avant le coucher afin de permettre à sa texture riche de réparer la peau pendant la nuit.",
            ar:"تطبيق كمية قليلة أكثر قبل النوم لتمكين النسيج الغني من إصلاح البشرة خلال الليل"
        }
    },
    {
        id: 10,
        title: { en: "Huile Grains de Lin", fr: "Huile Grains de Lin", ar:"زيت بذور الكتان" },
        origin: { en: "Handcrafted at Home", fr: "Artisanat Maison", ar:"الصناعة المنزلية" },
        price: 50,
        discountPrice: null,
        inStock: true,
        image: "images/grains de lin.png",
        description: {
            en: "Hydrates and strengthens the hair while bringing softness and natural vitality to the skin.",
            fr: "Hydrate et renforce les cheveux tout en apportant douceur et vitalité naturelle à la peau.",
            ar:"يرطب ويقوي الشعر ويمنح البشرة نعومة وحيوية طبيعية"
        },
        ritual: {
            en: "Massage delicately onto sensitive or exposed areas. Excellent for protecting your hands.",
            fr: "Massez délicatement sur les zones sensibles. Excellent pour protéger vos mains.",
            ar:"يُدلّك بلطف على المناطق الحساسة أو المعرضة؛ مثالي لحماية اليدين"

        }
    },
    {
        id: 11,
        title: { en: "Huile Herbes Naturelles", fr: "Huile Herbes Naturelles" ,ar:"زيت الأعشاب الطبيعية"},
        origin: { en: "Handcrafted at Home", fr: "Artisanat Maison", ar:"الصناعة المنزلية"},
        price: 50,
        discountPrice: null,
        inStock: true,
        image: "images/herbres naturelles.png",
        description: {
            en: "Helps thicken hair, reduces hair loss, and adds natural shine and vitality.",
            fr: "Utiliser sur les zones ciblées comme les imperfections localisées ou les zones sèches pour restaurer l’harmonie naturelle de la peau.",
            ar: "يُستخدم على المناطق المستهدفة مثل العيوب الموضعية أو المناطق الجافة لاستعادة التوازن الطبيعي للبشرة"
        },
        ritual: {
            en: "Use on targeted areas like localized blemishes or dry regions to restore natural harmony.",
            fr: "Utilisez sur des zones ciblées pour restaurer l'harmonie naturelle.",
            ar:"يُستخدم على مناطق محددة لاستعادة التوازن الطبيعي"
        }
    },
    {
        id: 12,
        title: { en: "Huile de Soya", fr: "Huile de Soya" , ar:"زيت الصويا"},
        origin: { en: "Handcrafted at Home", fr: "Artisanat Maison", ar:"الصناعة المنزلية"},
        price: 50,
        discountPrice: null,
        inStock: true,
        image: "images/soya.png",
        description: {
            en: "Our simplest, most reliable everyday moisturizer. Packed with essential lipids for softening texture instantly.",
            fr: "Protège, hydrate et revitalise la peau tout en fortifiant les cheveux naturellement.",
            ar: "يحمي ويرطب ويجدد البشرة، مع تقوية الشعر بشكل طبيعي"

        },
        ritual: {
            en: "Apply a small amount to clean skin or hair. Massage gently in circular motions until fully absorbed. Use regularly for best results.",
            fr: "Appliquer une petite quantité sur la peau ou les cheveux propres. Masser délicatement en mouvements circulaires jusqu’à absorption complète. Utiliser régulièrement pour de meilleurs résultats.",
            ar:  "ضعي كمية صغيرة على البشرة أو الشعر النظيف، ودلّكي بلطف بحركات دائرية حتى يتم الامتصاص بالكامل. استخدميه بانتظام للحصول على أفضل النتائج"
        }
    },
    {
        id: 13,
        title: { en: "Nila Sahara Powder", fr: "Poudre de Nila",ar:"بودرة النيلة الصحراوية" },
        origin: { en: "Handcrafted at Home", fr: "Artisanat Maison", ar:"الصناعة المنزلية" },
        price: 20,
        discountPrice: null,
        inStock: true,
        image: "images/nila.png",
        description: {
            en: "The vivid blue beauty secret of Southern Moroccan brides. This completely natural mineral powder helps gently lift dark spots and brighten the complexion instantly.",
            fr: "Le secret de beauté bleu vif des mariées du sud marocain. Aide à atténuer les taches brunes et éclaircir le teint.",
            ar:"سر الجمال الأزرق المميز لعرائس الجنوب المغربي؛ يساعد على تفتيح البشرة وتقليل مظهر البقع الداكنة ويمنح إشراقة طبيعية"
        },
        ritual: {
            en: "Mix a small amount of Nila with rose water or yogurt, apply to clean skin for 10–15 minutes, then rinse with warm water.",
            fr: "Mélanger une petite quantité de Nila avec de l’eau de rose ou du yaourt, appliquer sur la peau propre pendant 10 à 15 minutes puis rincer à l’eau tiède.",
            ar: "اخلطي كمية صغيرة من النيلة مع ماء الورد أو الزبادي، ضعيها على بشرة نظيفة لمدة 10-15 دقيقة، ثم اغسلها بالماء الدافئ"
        }
    }
];

// App State
let cart = [];
let currentLang = 'en';
let langIndex = 0;
const langs = ['en', 'fr', 'ar'];

// DOM Elements
const productGrid = document.getElementById('product-grid');
const langToggle = document.getElementById('lang-toggle');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const cartOverlay = document.getElementById('cart-overlay');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total-price');
const cartCountEl = document.querySelector('.cart-count');
const modalOverlay = document.getElementById('product-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalBody = document.getElementById('modal-body');

// Initialize App
function init() {
    renderProducts();
    setupEventListeners();
}

// Render Products
function renderProducts() {
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const title = product.title[currentLang];
        const originLabel = product.origin[currentLang];
        
        let priceHtml = '';
        if (product.discountPrice) {
            priceHtml = `
                <span class="original-price">${product.price} MAD</span>
                <span class="current-price" style="color: var(--clr-terracotta);">${product.discountPrice} MAD</span>
            `;
        } else {
            priceHtml = `<span class="current-price">${product.price} MAD</span>`;
        }
        
        let badgeHtml = '';
        if (!product.inStock) {
            const outOfStockText = currentLang === 'en' ? 'Not in Stock' : 'Rupture de Stock';
            badgeHtml = `<div class="product-badge out-of-stock">${outOfStockText}</div>`;
        } else if (product.discountPrice) {
            badgeHtml = `<div class="product-badge" style="background-color: var(--clr-atlas-gold); color: black;">PROMO</div>`;
        }
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            ${badgeHtml}
            <div class="product-img-wrapper" onclick="openModal(${product.id})">
                <img src="${product.image}" alt="${title}" onerror="this.src='https://images.unsplash.com/photo-1615397323136-2244243b7e77?ixlib=rb-4.0.3&w=400&q=80'">
            </div>
            <div class="product-info">
                <div class="product-origin">${originLabel}</div>
                <h4 class="product-title" onclick="openModal(${product.id})">${title}</h4>
                <div class="product-price-wrapper">
                    ${priceHtml}
                </div>
                <div style="display: flex; flex-direction: column; gap: 0.5rem; width: 100%;">
                    <button class="add-to-cart-btn" style="width: 100%; border-radius: 4px;"
                        onclick="addToCart(${product.id})" 
                        ${!product.inStock ? 'disabled' : ''}>
                        ${!product.inStock ? (currentLang === 'en' ? 'Unavailable' : (currentLang === 'fr' ? 'Indisponible' : 'غير متوفر')) : (currentLang === 'en' ? 'Add to Cart' : (currentLang === 'fr' ? 'Ajouter au Panier' : 'أضف إلى السلة'))}
                    </button>
                    ${product.inStock ? `
                    <button class="primary-btn" style="width: 100%; padding: 0.8rem; border-radius: 4px; font-size: 0.9rem;"
                        onclick="buyNow(${product.id})">
                        ${currentLang === 'en' ? 'Buy Now' : (currentLang === 'fr' ? 'Acheter Maintenant' : 'اشترِ الآن')}
                    </button>
                    ` : ''}
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Language Toggle
function toggleLanguage() {
    langIndex = (langIndex + 1) % langs.length;
    currentLang = langs[langIndex];
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    // Update texts with data-lang
    document.querySelectorAll('[data-lang]').forEach(el => {
        if (el.getAttribute('data-lang') === currentLang) {
            el.style.display = el.tagName === 'SPAN' ? 'inline' : 'block';
        } else {
            el.style.display = 'none';
        }
    });

    document.querySelectorAll('a.nav-link').forEach(el => {
        if(el.getAttribute('data-lang') === currentLang) {
            el.style.display = 'inline';
        } else {
            el.style.display = 'none';
        }
    });

    renderProducts();
    updateCartUI();
}
// Duplicate code block removed.

// Modal Logic
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const title = product.title[currentLang];
    const originLabel = product.origin[currentLang];
    const desc = product.description[currentLang];
    const ritual = product.ritual[currentLang];
    const ritualTitle = currentLang === 'en' ? 'The Home Hammam Ritual' : (currentLang === 'fr' ? 'Le Rituel Hammam Maison' : 'طقوس الحمام المنزلي');
    const addToCartTxt = currentLang === 'en' ? 'Add to Cart' : (currentLang === 'fr' ? 'Ajouter au Panier' : 'أضف إلى السلة');
    const outOfStockTxt = currentLang === 'en' ? 'Not in Stock' : (currentLang === 'fr' ? 'Rupture de Stock' : 'نفد من المخزون');
    
    let priceHtml = '';
    if (product.discountPrice) {
        priceHtml = `
            <span class="original-price">${product.price} MAD</span>
            <span class="current-price" style="color: var(--clr-terracotta);">${product.discountPrice} MAD</span>
        `;
    } else {
        priceHtml = `<span class="current-price">${product.price} MAD</span>`;
    }

    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${product.image}" alt="${title}" onerror="this.src='https://images.unsplash.com/photo-1615397323136-2244243b7e77?ixlib=rb-4.0.3&w=800&q=80'">
        </div>
        <div class="modal-details">
            <div class="product-origin">${originLabel}</div>
            <h2 class="product-title">${title}</h2>
            <div class="product-price-wrapper" style="justify-content: flex-start; margin-top: 1rem;">
                ${priceHtml}
            </div>
            <p class="modal-desc">${desc}</p>
            
            <div class="ritual-box">
                <h5>${ritualTitle}</h5>
                <p>${ritual}</p>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 0.5rem; width: 100%;">
                <button class="primary-btn" style="width: 100%; text-align: center; background: transparent; color: var(--clr-charcoal); border: 1px solid var(--clr-charcoal);"
                    onclick="addToCart(${product.id}); closeModal();" 
                    ${!product.inStock ? 'disabled' : ''}>
                    ${!product.inStock ? outOfStockTxt : addToCartTxt}
                </button>
                ${product.inStock ? `
                <button class="primary-btn" style="width: 100%; text-align: center;"
                    onclick="buyNow(${product.id}); closeModal();">
                    ${currentLang === 'en' ? 'Buy Now' : (currentLang === 'fr' ? 'Acheter Maintenant' : 'اشترِ الآن')}
                </button>
                ` : ''}
            </div>
        </div>
    `;
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cart Logic
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            quantity: 1
        });
    }
    
    updateCartUI();
    toggleCart(true);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const emptyMsg = cartItemsContainer.querySelector('.empty-cart-msg');
    
    // Calculate total items and price
    let totalItems = 0;
    let totalPrice = 0;
    
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-cart-msg">${currentLang === 'en' ? 'Your cart is empty.' : (currentLang === 'fr' ? 'Votre panier est vide.' : 'سلة التسوق فارغة.')}</p>`;
    } else {
        cart.forEach(cartItem => {
            const product = products.find(p => p.id === cartItem.id);
            const price = product.discountPrice || product.price;
            const title = product.title[currentLang];
            
            totalItems += cartItem.quantity;
            totalPrice += price * cartItem.quantity;
            
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${product.image}" alt="${title}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1615397323136-2244243b7e77?ixlib=rb-4.0.3&w=150&q=80'">
                <div class="cart-item-info">
                    <h5 class="cart-item-title">${title}</h5>
                    <div class="cart-item-price">${price} MAD</div>
                    <div class="cart-item-actions">
                        <div class="qty-control">
                            <button class="qty-btn" onclick="updateQuantity(${product.id}, -1)">-</button>
                            <span class="qty-val">${cartItem.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${product.id}, 1)">+</button>
                        </div>
                            ${currentLang === 'en' ? 'Remove' : (currentLang === 'fr' ? 'Supprimer' : 'إزالة')}
                        </button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(itemEl);
        });
    }
    
    cartCountEl.textContent = totalItems;
    cartTotalEl.textContent = `${totalPrice.toFixed(2)} MAD`;
}

function toggleCart(show) {
    if (show === true) {
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else if (show === false) {
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    } else {
        cartDrawer.classList.toggle('active');
        cartOverlay.classList.toggle('active');
        document.body.style.overflow = cartDrawer.classList.contains('active') ? 'hidden' : 'auto';
    }
}

// Checkout Logic
function openCheckoutForm() {
    if (cart.length === 0) {
        alert(currentLang === 'en' ? 'Your cart is empty. Add products to checkout.' : (currentLang === 'fr' ? 'Votre panier est vide. Ajoutez des produits pour passer la commande.' : 'سلة التسوق فارغة. أضف منتجات لإتمام الطلب.'));
        return;
    }

    const checkoutModal = document.createElement('div');
    checkoutModal.className = 'modal-overlay active';
    checkoutModal.id = 'checkout-modal';
    checkoutModal.style.zIndex = '1001';

    const checkoutContent = document.createElement('div');
    checkoutContent.className = 'modal-content checkout-wrapper';
    checkoutContent.style.padding = '2rem';
    checkoutContent.style.maxWidth = '500px';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.onclick = () => document.body.removeChild(checkoutModal);

    const title = document.createElement('h3');
    title.textContent = currentLang === 'en' ? 'Choose Payment Method' : (currentLang === 'fr' ? 'Choisissez le mode de paiement' : 'اختر طريقة الدفع');
    title.style.marginBottom = '2rem';
    title.style.fontFamily = 'var(--font-heading)';

    const form = document.createElement('form');
    form.onsubmit = (e) => {
        e.preventDefault();
        
        const customerName = document.getElementById('checkout-name').value;
        const customerPhone = document.getElementById('checkout-phone').value;
        const deliveryAddress = document.getElementById('checkout-address').value;

        let cartList = "";
        let totalPrice = 0;
        
        cart.forEach(cartItem => {
            const product = products.find(p => p.id === cartItem.id);
            const price = product.discountPrice || product.price;
            totalPrice += price * cartItem.quantity;
            cartList += `${cartItem.quantity} x ${product.title['en']}\n`;
        });
        
        const whatsappMsg = `🛍️ Amazigh Glow Order\n\nName: ${customerName}\nPhone: ${customerPhone}\nAddress: ${deliveryAddress}\n\nProducts:\n${cartList}\nTotal: ${totalPrice.toFixed(2)} MAD`;
        
        const encodedMsg = encodeURIComponent(whatsappMsg);
        const whatsappUrl = `https://wa.me/212661611198?text=${encodedMsg}`;
        
        const msg = currentLang === 'en' 
            ? 'Your order has been received. You will now be redirected to WhatsApp to send us the details!'
            : (currentLang === 'fr' ? 'Votre commande a été reçue. Vous allez être redirigé vers WhatsApp pour nous envoyer les détails !'
            : 'تم استلام طلبك. سيتم توجيهك الآن إلى واتساب لإرسال التفاصيل لنا!');
        
        alert(msg);
        
        window.open(whatsappUrl, '_blank');
        
        // Clear cart
        cart = [];
        updateCartUI();
        toggleCart(false);
        document.body.removeChild(checkoutModal);
    };

    form.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <div style="display: flex; align-items: center; gap: 10px; padding: 1rem; border: 1px solid var(--clr-terracotta); border-radius: 4px; background: rgba(165, 68, 42, 0.05);">
                <span style="font-weight: 600; color: var(--clr-charcoal);">
                    <i class="fas fa-truck" style="margin-right: 10px; color: var(--clr-terracotta);"></i>
                    ${currentLang === 'en' ? 'Payment on Delivery (Livreur)' : (currentLang === 'fr' ? 'Paiement à la Livraison (Livreur)' : 'الدفع عند الاستلام')}
                </span>
            </div>
            <input type="hidden" name="payment_method" value="livreur">
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
            <input type="text" id="checkout-name" placeholder="${currentLang === 'en' ? 'Full Name' : (currentLang === 'fr' ? 'Nom Complet' : 'الاسم الكامل')}" required style="padding: 0.8rem; border: 1px solid #ddd; width: 100%; border-radius: 4px; font-family: inherit;">
            <input type="tel" id="checkout-phone" placeholder="${currentLang === 'en' ? 'Phone Number' : (currentLang === 'fr' ? 'Numéro de Téléphone' : 'رقم الهاتف')}" required style="padding: 0.8rem; border: 1px solid #ddd; width: 100%; border-radius: 4px; font-family: inherit;">
            <textarea id="checkout-address" placeholder="${currentLang === 'en' ? 'Delivery Address' : (currentLang === 'fr' ? 'Adresse de Livraison' : 'عنوان التوصيل')}" required style="padding: 0.8rem; border: 1px solid #ddd; width: 100%; border-radius: 4px; font-family: inherit; resize: vertical; min-height: 80px;"></textarea>
        </div>

        <button type="submit" class="primary-btn" style="width: 100%;">
            ${currentLang === 'en' ? 'Confirm Order' : (currentLang === 'fr' ? 'Confirmer la Commande' : 'تأكيد الطلب')}
        </button>
    `;

    checkoutContent.appendChild(closeBtn);
    checkoutContent.appendChild(title);
    checkoutContent.appendChild(form);
    checkoutModal.appendChild(checkoutContent);
    
    document.body.appendChild(checkoutModal);
}

// Event Listeners
function setupEventListeners() {
    langToggle.addEventListener('click', toggleLanguage);
    
    cartBtn.addEventListener('click', () => toggleCart(true));
    closeCartBtn.addEventListener('click', () => toggleCart(false));
    cartOverlay.addEventListener('click', () => toggleCart(false));

    // Listen for Checkout click
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', openCheckoutForm);
    }
    
    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(252, 248, 242, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(252, 248, 242, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Quick Buy Function
function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;
    
    // Clear cart or just add to it? We'll clear to make it a direct checkout of 1 item
    cart = [{ id: product.id, quantity: 1 }];
    updateCartUI();
    toggleCart(false); // Make sure cart isn't open
    openCheckoutForm();
}

// Start
document.addEventListener('DOMContentLoaded', init);
