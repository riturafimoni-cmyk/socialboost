// ১. সার্ভিস ডেটাবেজ
const servicesData = [
    {
        id: 1,
        title: "Instagram Followers",
        subtitle: "(Real & Active)",
        platform: "instagram",
        badge: "Best Seller",
        rating: "4.9 (2.1K)",
        basePrice: 150,
        oldPrice: 300,
        gradient: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
        icon: "fa-brands fa-instagram",
        isPopular: true,
        packages: [
            { label: "৫০০ ফলোয়ার", price: 150 },
            { label: "১,০০০ ফলোয়ার", price: 290 },
            { label: "২,০০০ ফলোয়ার", price: 560 },
            { label: "৫,০০০ ফলোয়ার", price: 1350 }
        ]
    },
    {
        id: 2,
        title: "Facebook Page Likes",
        subtitle: "(Real & Active)",
        platform: "facebook",
        badge: "Hot Deal",
        rating: "4.8 (1.6K)",
        basePrice: 120,
        oldPrice: 250,
        gradient: "linear-gradient(135deg, #1877f2, #0052cc)",
        icon: "fa-brands fa-facebook-f",
        isPopular: true,
        packages: [
            { label: "৫০০ লাইক", price: 120 },
            { label: "১,০০০ লাইক", price: 220 },
            { label: "৩,০০০ লাইক", price: 620 }
        ]
    },
    {
        id: 3,
        title: "YouTube Subscribers",
        subtitle: "(Non-Drop)",
        platform: "youtube",
        badge: "",
        rating: "4.8 (980)",
        basePrice: 250,
        oldPrice: 450,
        gradient: "linear-gradient(135deg, #ff0000, #cc0000)",
        icon: "fa-brands fa-youtube",
        isPopular: true,
        packages: [
            { label: "১০০ সাবস্ক্রাইবার", price: 250 },
            { label: "৫০০ সাবস্ক্রাইবার", price: 1100 },
            { label: "১,০০০ সাবস্ক্রাইবার (Monetization)", price: 2100 }
        ]
    },
    {
        id: 4,
        title: "TikTok Followers",
        subtitle: "(Real & Active)",
        platform: "tiktok",
        badge: "",
        rating: "4.8 (1.3K)",
        basePrice: 180,
        oldPrice: 350,
        gradient: "linear-gradient(135deg, #010101, #25f4ee)",
        icon: "fa-brands fa-tiktok",
        isPopular: true,
        packages: [
            { label: "৫০০ ফলোয়ার", price: 180 },
            { label: "১,০০০ ফলোয়ার", price: 340 },
            { label: "২,০০০ ফলোয়ার", price: 650 }
        ]
    },
    {
        id: 5,
        title: "Telegram Members",
        subtitle: "(Channel / Group)",
        platform: "telegram",
        badge: "New",
        rating: "4.7 (520)",
        basePrice: 140,
        oldPrice: 280,
        gradient: "linear-gradient(135deg, #229ed9, #0088cc)",
        icon: "fa-brands fa-telegram",
        isPopular: false,
        packages: [
            { label: "৫০০ মেম্বার", price: 140 },
            { label: "১,০০০ মেম্বার", price: 260 }
        ]
    }
];

// বান্ডেল প্যাকের ডেটা
const bundlesData = [
    {
        title: "🚀 অল-ইন-ওয়ান স্টার্টার বুস্ট",
        desc: "১০০০ ইনস্টাগ্রাম ফলোয়ার + ১০০০ ফেসবুক লাইক + ৫০০ পোস্ট রিঅ্যাক্ট",
        price: "৳৪৯৯",
        oldPrice: "৳৯০০"
    },
    {
        title: "👑 ভাইরাল ক্রিয়েটর বান্ডেল",
        desc: "৫০০০ টিকটক ফলোয়ার + ১০,০০০ ভিডিও ভিউ + ১০০০ ইনস্টাগ্রাম লাইক",
        price: "৳৯৫০",
        oldPrice: "৳১৮০০"
    }
];

// ২. অটো স্লাইডার
const sliderWrapper = document.getElementById('sliderWrapper');
const dots = document.querySelectorAll('.slider-dots .dot');
let currentSlide = 0;
if (sliderWrapper) {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % 3;
        sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, idx) => dot.classList.toggle('active', idx === currentSlide));
    }, 3000);
}

// ৩. সার্ভিস কার্ড তৈরির ফাংশন
function createCard(item) {
    const badgeHTML = item.badge ? `<span class="badge-pill ${item.badge.includes('Best') ? 'b-bestseller' : 'b-hotdeal'}">${item.badge}</span>` : '';
    return `
        <div class="service-card">
            ${badgeHTML}
            <div class="service-thumb" style="background: ${item.gradient}">
                <i class="${item.icon} thumb-icon"></i>
            </div>
            <div class="card-body">
                <div class="card-title">${item.title}</div>
                <div class="card-subtitle">${item.subtitle}</div>
                <div class="card-rating">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    <span>${item.rating}</span>
                </div>
                <div class="price-row">
                    <span class="curr-price">৳${item.basePrice}</span>
                    <span class="del-price">৳${item.oldPrice}</span>
                </div>
                <button class="btn-order" onclick="openOrderModal(${item.id})">
                    <i class="fa-solid fa-cart-plus"></i> অর্ডার করুন
                </button>
            </div>
        </div>
    `;
}

// কার্ড রেন্ডার করা
function renderServices() {
    const homeGrid = document.getElementById('homeServicesGrid');
    const allGrid = document.getElementById('allServicesGrid');
    const offersGrid = document.getElementById('offersGrid');
    const bundlesGrid = document.getElementById('bundlesGrid');

    if (homeGrid) {
        homeGrid.innerHTML = servicesData.filter(s => s.isPopular).map(createCard).join('');
    }
    if (allGrid) {
        allGrid.innerHTML = servicesData.map(createCard).join('');
    }
    if (offersGrid) {
        offersGrid.innerHTML = servicesData.filter(s => s.oldPrice > 0).map(createCard).join('');
    }
    if (bundlesGrid) {
        bundlesGrid.innerHTML = bundlesData.map(b => `
            <div class="bundle-card">
                <h4>${b.title}</h4>
                <p class="bundle-features">${b.desc}</p>
                <div class="price-row">
                    <span class="curr-price">${b.price}</span>
                    <span class="del-price">${b.oldPrice}</span>
                </div>
                <button class="submit-order-btn" style="margin-top: 6px;" onclick="openBundleOrder('${b.title}', '${b.price}')">বান্ডেল অর্ডার করুন</button>
            </div>
        `).join('');
    }
}
renderServices();

// ৪. ট্যাব সুইচিং (SPA)
function switchTab(tabId, el) {
    document.querySelectorAll('.tab-view').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${tabId}`).classList.add('active');

    if (el) {
        document.querySelectorAll('.bottom-nav .nav-item').forEach(item => item.classList.remove('active'));
        el.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// প্ল্যাটফর্ম দিয়ে ফিল্টার
function filterByPlatform(platform) {
    switchTab('products');
    filterProductView(platform);
}

function filterProductView(platform) {
    document.querySelectorAll('.filter-pills .pill').forEach(p => {
        p.classList.toggle('active', p.innerText.toLowerCase() === platform);
    });
    const allGrid = document.getElementById('allServicesGrid');
    if (platform === 'all') {
        allGrid.innerHTML = servicesData.map(createCard).join('');
    } else {
        allGrid.innerHTML = servicesData.filter(s => s.platform === platform).map(createCard).join('');
    }
}

// সার্চ
function searchServices() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    switchTab('products');
    const filtered = servicesData.filter(s => s.title.toLowerCase().includes(q));
    document.getElementById('allServicesGrid').innerHTML = filtered.map(createCard).join('');
}

// ৫. অর্ডার ও পেমেন্ট মডাল হ্যান্ডলিং
let activeService = null;

function openOrderModal(serviceId) {
    activeService = servicesData.find(s => s.id === serviceId);
    document.getElementById('modalTitle').innerText = activeService.title;

    const select = document.getElementById('packageSelect');
    select.innerHTML = activeService.packages.map((pkg, i) => `<option value="${pkg.price}">${pkg.label} - ৳${pkg.price}</option>`).join('');

    updateModalPrice();
    document.getElementById('orderModal').classList.add('active');
}

function openBundleOrder(title, price) {
    activeService = { title: title };
    document.getElementById('modalTitle').innerText = title;
    const select = document.getElementById('packageSelect');
    select.innerHTML = `<option value="${price.replace('৳','')}">${title} - ${price}</option>`;
    updateModalPrice();
    document.getElementById('orderModal').classList.add('active');
}

function updateModalPrice() {
    const select = document.getElementById('packageSelect');
    document.getElementById('calculatedPrice').innerText = '৳' + select.value;
}

function closeOrderModal() {
    document.getElementById('orderModal').classList.remove('active');
}

// অর্ডার সাবমিট করা
function processOrder() {
    const link = document.getElementById('targetLink').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    const trx = document.getElementById('trxId').value.trim();
    const pkgSelect = document.getElementById('packageSelect');
    const packageText = pkgSelect.options[pkgSelect.selectedIndex].text;

    if (!link || !phone || !trx) {
        alert("দয়া করে লিংক, মোবাইল নম্বর এবং TrxID সঠিকভাবে দিন!");
        return;
    }

    const orderId = 'SB-' + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
        id: orderId,
        service: activeService.title,
        package: packageText,
        link: link,
        phone: phone,
        trx: trx,
        status: "Processing (যাচাই চলছে)",
        date: new Date().toLocaleDateString('bn-BD')
    };

    let orders = JSON.parse(localStorage.getItem('sb_orders') || '[]');
    orders.unshift(newOrder);
    localStorage.setItem('sb_orders', JSON.stringify(orders));

    updateBadge();
    closeOrderModal();
    alert(`অর্ডার সফল হয়েছে!\nআপনার Order ID: ${orderId}\nআমরা দ্রুত কাজ শুরু করছি।`);
}

// ৬. My Orders তালিকা ও ট্র্যাকিং
function openMyOrders() {
    const orders = JSON.parse(localStorage.getItem('sb_orders') || '[]');
    const container = document.getElementById('ordersListContainer');

    if (orders.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding: 20px; font-size:12px; color:#64748b;">এখনও কোনো অর্ডার করেননি।</p>';
    } else {
        container.innerHTML = orders.map(o => `
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:10px; margin-bottom:10px; font-size:11.5px;">
                <div style="display:flex; justify-content:space-between; font-weight:700; margin-bottom:4px;">
                    <span>Order: ${o.id}</span>
                    <span style="color:#2563eb;">${o.status}</span>
                </div>
                <div><strong>সার্ভিস:</strong> ${o.service}</div>
                <div><strong>প্যাকেজ:</strong> ${o.package}</div>
                <div style="color:#64748b; margin-top:4px;">তারিখ: ${o.date}</div>
            </div>
        `).join('');
    }

    document.getElementById('myOrdersModal').classList.add('active');
}

function closeMyOrders() {
    document.getElementById('myOrdersModal').classList.remove('active');
}

function updateBadge() {
    const orders = JSON.parse(localStorage.getItem('sb_orders') || '[]');
    const badge = document.getElementById('orderCountBadge');
    if (badge) badge.innerText = orders.length;
}
updateBadge();
