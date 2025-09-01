 // Sample product data with real images
 const products = [
    {id: 1, name: "Elegant Silk Kaftan", price: 15999, category: "kaftans", image: "https://www.faridahasan.com/images/thumbs/0005081_rani-kaftan.jpeg", sizes: ["S", "M", "L", "XL"], colors: ["Navy Blue", "Emerald Green", "Burgundy"], description: "Luxurious silk kaftan perfect for special occasions"},
    {id: 2, name: "Traditional Black Abaya", price: 8999, category: "abayas", image: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/288198/1.jpg?8994", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Black", "Navy", "Charcoal"], description: "Classic modest wear with elegant embroidery"},
    {id: 3, name: "Wedding Lehnga", price: 89999, category: "wedding", image: "https://gulaal.pk/cdn/shop/products/B-5-1.jpg?v=1753861071&width=493", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Ivory", "White", "Champagne"], description: "Stunning ball gown with intricate beadwork"},
    {id: 18, name: "Wedding Lehnga", price: 79999, category: "wedding", image: "https://gulaal.pk/cdn/shop/products/WS-31_20_5_39987135-78cf-4f59-9af9-e68a338c5553.jpg?v=1753860837&width=1946", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Ivory", "White", "Champagne"], description: "Stunning ball gown with intricate beadwork"},
    {id: 19, name: "Wedding Lehnga", price: 99999, category: "wedding", image: "https://gulaal.pk/cdn/shop/products/WS-28_20_1.jpg?v=1753860844&width=493", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Ivory", "White", "Champagne"], description: "Stunning ball gown with intricate beadwork"},
    {id: 20, name: "Wedding Lehnga", price: 88999, category: "wedding", image: "https://gulaal.pk/cdn/shop/products/1Q0A2133.jpg?v=1753860981&width=1000", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Ivory", "White", "Champagne"], description: "Stunning ball gown with intricate beadwork"},
    {id: 21, name: "Wedding Lehnga", price: 83999, category: "wedding", image: "https://gulaal.pk/cdn/shop/files/1O9A0944.png?v=1753860588&width=1946", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Ivory", "White", "Champagne"], description: "Stunning ball gown with intricate beadwork"},
    
    {id: 4, name: "Sequin Party Dress", price: 19999, category: "party", image: "https://crayon.pk/wp-content/uploads/2017/10/Luxury-Party-Bridal-Wear-Collection-2017.jpg", sizes: ["XS", "S", "M", "L"], colors: ["Gold", "Silver", "Rose Gold"], description: "Glamorous sequined dress for special events"},
    {id: 5, name: "Floral Print Kaftan", price: 7499, category: "kaftans", image: "https://i.etsystatic.com/16039986/r/il/a1ae99/4643265566/il_fullxfull.4643265566_e1l2.jpg", sizes: ["S", "M", "L", "XL"], colors: ["Pink Floral", "Blue Floral", "Green Floral"], description: "Comfortable cotton kaftan with beautiful prints"},
    {id: 6, name: "Embroidered Abaya", price: 12999, category: "abayas", image: "https://i.pinimg.com/originals/40/7d/0a/407d0adf1f070234ca411e4285106e60.jpg", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Navy", "White"], description: "Elegant abaya with gold thread embroidery"},
    {id: 16, name: "Embroidered Abaya", price: 17999, category: "abayas", image: "https://i.pinimg.com/originals/0c/f1/43/0cf143b39de39a8cf801cff448f969ac.jpg", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Navy", "White"], description: "Elegant abaya with gold thread embroidery"},
    {id: 17, name: "Embroidered xremal Abaya", price: 10999, category: "abayas", image: "https://i.pinimg.com/736x/2c/12/7a/2c127af71613679826df391d49b30341.jpg", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Navy", "White"], description: "Elegant abaya with gold thread embroidery"},
    {id: 7, name: "Mermaid Wedding Dress", price: 129999, category: "wedding", image: "https://gulaal.pk/cdn/shop/products/WU-04-01.jpg?v=1753860947&width=1946", sizes: ["XS", "S", "M", "L"], colors: ["White", "Ivory"], description: "Fitted mermaid style with lace details"},
    {id: 8, name: "Cocktail Party Dress", price: 15999, category: "party", image: "https://i.pinimg.com/originals/16/6c/3b/166c3b1aa06236db322dd76e94ee2655.jpg", sizes: ["XS", "S", "M", "L", "XL"], colors: ["Red", "Black", "Royal Blue"], description: "Chic cocktail dress perfect for evening events"},
    {id: 9, name: "Bohemian Kaftan", price: 9999, category: "kaftans", image: "https://i.pinimg.com/originals/0a/23/4a/0a234a399584b926684e9d7ea892671d.png", sizes: ["S", "M", "L", "XL"], colors: ["Turquoise", "Coral", "Purple"], description: "Free-flowing bohemian style kaftan"},
    {id: 10, name: "Modern White Abaya", price: 10999, category: "abayas", image: "https://i.etsystatic.com/25695932/r/il/fbc75e/3304462015/il_794xN.3304462015_cc8x.jpg", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Grey", "Navy"], description: "Contemporary cut with modern styling"},
    {id: 11, name: "Vintage Wedding Dress", price: 74999, category: "wedding", image: "https://gulaal.pk/cdn/shop/products/1Q0A2019.jpg?v=1753860983&width=1946", sizes: ["XS", "S", "M", "L"], colors: ["Ivory", "Antique White"], description: "Vintage-inspired lace wedding gown"},
    {id: 12, name: "Glitter Party Dress", price: 17999, category: "party", image: "https://cdn.shopify.com/s/files/1/1732/6543/products/Pakistani_Black_Chiffon_Party_Dress_2_1800x1800.jpg?v=1574271066", sizes: ["XS", "S", "M", "L"], colors: ["Silver", "Gold", "Black"], description: "Sparkling dress that catches the light beautifully"},
    {id: 22, name: "Black Party Dress", price: 18999, category: "party", image: "https://i.pinimg.com/originals/63/04/29/630429abbe48a68c7a21afa3db8c819d.jpg", sizes: ["XS", "S", "M", "L"], colors: ["Silver", "Gold", "Black"], description: "Sparkling dress that catches the light beautifully"},
    {id: 23, name: "Blue Party Dress", price: 19999, category: "party", image: "https://i.pinimg.com/736x/40/89/33/408933460e0669e50863ece73b68b389.jpg", sizes: ["XS", "S", "M", "L"], colors: ["Silver", "Gold", "Black"], description: "Sparkling dress that catches the light beautifully"},
    {id: 24, name: "White Party Dress", price: 27999, category: "party", image: "https://i.pinimg.com/originals/63/04/29/630429abbe48a68c7a21afa3db8c819d.jpg", sizes: ["XS", "S", "M", "L"], colors: ["Silver", "Gold", "Black"], description: "Sparkling dress that catches the light beautifully"},
    {id: 25, name: "Purple Party Dress", price: 17999, category: "party", image: "https://i.pinimg.com/736x/c8/ba/b5/c8bab5a6f7ab721539a140f0f6f399fe.jpg", sizes: ["XS", "S", "M", "L"], colors: ["Silver", "Gold", "Black"], description: "Sparkling dress that catches the light beautifully"},
    
    {id: 13, name: "Floral light Yellow Kaftan", price: 7999, category: "kaftans", image: "https://images.boksha.com/uploads/products/55707/images/p5TwX7qskJ8WfmoqHsEkjMioFFy00XaE4i0UiLSA.jpg", sizes: ["S", "M", "L", "XL"], colors: ["Pink Floral", "Blue Floral", "Yellow Floral"], description: "Comfortable cotton kaftan with beautiful prints"},
    {id: 14, name: "Floral Gold Kaftan", price: 7299, category: "kaftans", image: "https://i.pinimg.com/originals/de/0a/18/de0a181b01062eee912ab3a22c843838.jpg", sizes: ["S", "M", "L", "XL"], colors: ["Pink Floral", "Blue Floral", "Green Floral"], description: "Comfortable cotton kaftan with beautiful prints"},
    {id: 15, name: "Floral Pink Kaftan", price: 9999, category: "kaftans", image: "https://cdn.onbuy.com/product/65b9a3fed98ac/500-500/muslim-hijab-dress-abaya-dubai-islam-arabic-kaftan-robe-djellaba-femme-african-dresses-for-women-caftan-marocain-266857802.jpg", sizes: ["S", "M", "L", "XL"], colors: ["Pink Floral", "Blue Floral", "Green Floral"], description: "Comfortable cotton kaftan with beautiful prints"}
];

let cart = [];
let currentPage = 'home';
let filteredProducts = [...products];
let selectedPaymentMethod = '';

// Carousel data
const carouselData = [
    {
        image: "https://www.faridahasan.com/images/thumbs/0005081_rani-kaftan.jpeg",
        title: "Elegant Silk Kaftan",
        subtitle: "Luxurious & Comfortable",
        description: "✨ Experience the ultimate in comfort and elegance with our premium silk kaftans. Perfect for any occasion, these flowing garments combine traditional Pakistani craftsmanship with modern style. Made with the finest fabrics for your special moments. ✨"
    },
    {
        image: "https://www.faridahasan.com/images/thumbs/0005081_rani-kaftan.jpeg",
        title: "Traditional Abaya",
        subtitle: "Modest & Elegant",
        description: "🌙 Discover our collection of traditional abayas that blend modesty with contemporary fashion. Each piece is carefully designed to provide comfort while maintaining cultural authenticity. Perfect for daily wear and special occasions. 🌙"
    },
    {
        image: "https://www.faridahasan.com/images/thumbs/0005081_rani-kaftan.jpeg",
        title: "Princess Wedding Gown",
        subtitle: "Your Dream Day",
        description: "👰 Make your special day unforgettable with our stunning wedding gowns. From classic elegance to modern glamour, find the perfect dress for your dream wedding. Each gown is crafted to make you feel like royalty. 👰"
    },
    {
        image: "https://www.faridahasan.com/images/thumbs/0005081_rani-kaftan.jpeg",
        title: "Glamorous Party Dress",
        subtitle: "Shine Bright",
        description: "💃 Turn heads at your next event with our glamorous party dresses. Featuring sequins, elegant cuts, and luxurious fabrics that make you the center of attention. Dance the night away in style! 💃"
    }
];

let currentSlide = 0;
let carouselInterval;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupScrollAnimations();
    setupEventListeners();
    setupCardFormatting();
    startCarousel();
});

// Page navigation
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(page + 'Page').classList.remove('hidden');
    currentPage = page;
    
    if (page === 'products') {
        setTimeout(() => {
            setupScrollAnimations();
        }, 100);
    }
}

// Setup scroll animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
        observer.observe(el);
    });
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', filterProducts);
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
    document.getElementById('sortFilter').addEventListener('change', filterProducts);
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-scroll');
        } else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('navbar-scroll');
        }
    });
}

// Carousel functions
function startCarousel() {
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function stopCarousel() {
    clearInterval(carouselInterval);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselData.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    stopCarousel();
    setTimeout(startCarousel, 8000); // Restart after 8 seconds
}

function updateCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const heroDescription = document.getElementById('heroDescription');

    // Update slides
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        if (index === currentSlide) {
            slide.classList.add('active');
        } else if (index === (currentSlide - 1 + carouselData.length) % carouselData.length) {
            slide.classList.add('prev');
        }
    });

    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });

    // Update description text
    if (heroDescription) {
        heroDescription.textContent = carouselData[currentSlide].description;
    }
}

// Setup card formatting
function setupCardFormatting() {
    const cardNumber = document.getElementById('cardNumber');
    const expiryDate = document.getElementById('expiryDate');
    const cvv = document.getElementById('cvv');

    if (cardNumber) {
        cardNumber.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }

    if (expiryDate) {
        expiryDate.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }

    if (cvv) {
        cvv.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/[^0-9]/gi, '');
        });
    }
}

// Payment method selection
function selectPaymentMethod(method, element) {
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
    selectedPaymentMethod = method;

    const cardDetails = document.getElementById('cardDetails');
    if (method === 'card') {
        cardDetails.classList.remove('hidden');
    } else {
        cardDetails.classList.add('hidden');
    }
}

// Render products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-white rounded-2xl shadow-lg overflow-hidden fade-in cursor-pointer';
        productCard.innerHTML = `
            <div class="image-container">
                <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDOTQuNDc3MiA3MCA5MCA3NC40NzcyIDkwIDgwVjEyMEM5MCA5NC40NzcyIDk0LjQ3NzIgOTAgMTAwIDkwSDEwMEMxMDUuNTIzIDkwIDExMCA5NC40NzcyIDExMCAxMDBWMTIwQzExMCAxMjUuNTIzIDEwNS5523IDEzMCAxMDAgMTMwSDEwMFoiIGZpbGw9IiM5Q0E0QUYiLz4KPC9zdmc+'; this.alt='Image not available';">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2 playfair">${product.name}</h3>
                <p class="text-sm text-gray-600 mb-3">${product.description}</p>
                <p class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">Rs ${product.price.toLocaleString()}</p>
                <div class="flex flex-col gap-2">
                    <button onclick="showProductDetails(${product.id})" class="flex-3 bg-gray-100 text-gray-800 py-3 px-4 rounded-xl hover:bg-gray-200 transition-all duration-300 font-medium ">
                        View Details
                    </button>
                    <button onclick="showProductDetails(${product.id})" class="flex-3 btn-primary text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(productCard);
    });

    setTimeout(setupScrollAnimations, 100);
}

// Filter products
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const sortBy = document.getElementById('sortFilter').value;

    filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = !category || product.category === category;
        return matchesSearch && matchesCategory;
    });

    // Sort products
    if (sortBy === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    renderProducts();
}

// Product modal functionality
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    const content = document.getElementById('productModalContent');

content.innerHTML = `
<div class="flex flex-col md:flex-row gap-6 w-full">

<!-- Left: Image -->
<div class="w-full md:w-1/2">
<img src="${product.image}" alt="${product.name}"
   class="w-full h-auto max-h-[400px] object-cover rounded-lg"
   onerror="this.src='data:image/svg+xml;base64,...'; this.alt='Image not available';">
</div>

<!-- Right: Content -->
<div class="w-full md:w-1/2 flex flex-col">

<!-- Title -->
<h2 class="text-lg md:text-xl font-bold text-gray-800 mb-2 playfair">${product.name}</h2>

<!-- Description -->
<p class="text-sm md:text-base text-gray-600 mb-3">${product.description}</p>

<!-- Price -->
<p class="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
Rs ${product.price.toLocaleString()}
</p>

<!-- Sizes and Colors -->
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
<!-- Sizes -->
<div>
  <h4 class="text-sm font-semibold mb-2">Sizes:</h4>
  <div class="flex flex-wrap gap-1">
    ${product.sizes.map(size => `
      <button class="size-btn px-2 py-1 border border-gray-200 rounded text-xs hover:border-purple-500 hover:text-purple-500 transition-all" onclick="selectSize('${size}', this)">
        ${size}
      </button>
    `).join('')}
  </div>
</div>

<!-- Colors -->
<div>
  <h4 class="text-sm font-semibold mb-2">Colors:</h4>
  <div class="flex flex-wrap gap-1">
    ${product.colors.map(color => `
      <button class="color-btn px-2 py-1 border border-gray-200 rounded text-xs hover:border-purple-500 hover:text-purple-500 transition-all" onclick="selectColor('${color}', this)">
        ${color}
      </button>
    `).join('')}
  </div>
</div>
</div>

<!-- Quantity -->
<div class="flex items-center space-x-2 mb-4">
<span class="text-sm font-semibold">Qty:</span>
<button onclick="updateModalQuantity(-1)" class="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 text-sm">-</button>
<span id="modalQuantity" class="text-sm font-semibold w-6 text-center">1</span>
<button onclick="updateModalQuantity(1)" class="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 text-sm">+</button>
</div>

<!-- Add to Cart -->
<button onclick="addToCartFromModal(${product.id})" class="w-full btn-primary text-white py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300">
Add to Cart
</button>
</div>
</div>
`;

modal.classList.remove('hidden');

}

function closeProductModal() {
    document.getElementById('productModal').classList.add('hidden');
    // Reset selections
    selectedSize = '';
    selectedColor = '';
    modalQuantity = 1;
}

let selectedSize = '';
let selectedColor = '';
let modalQuantity = 1;

function selectSize(size, button) {
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('border-purple-500', 'text-purple-500', 'bg-purple-50');
    });
    button.classList.add('border-purple-500', 'text-purple-500', 'bg-purple-50');
    selectedSize = size;
}

function selectColor(color, button) {
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.classList.remove('border-purple-500', 'text-purple-500', 'bg-purple-50');
    });
    button.classList.add('border-purple-500', 'text-purple-500', 'bg-purple-50');
    selectedColor = color;
}

function updateModalQuantity(change) {
    modalQuantity = Math.max(1, modalQuantity + change);
    document.getElementById('modalQuantity').textContent = modalQuantity;
}

function addToCartFromModal(productId) {
    if (!selectedSize || !selectedColor) {
        showNotification('Please select size and color', 'error');
        return;
    }
    
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => 
        item.id === productId && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
    );

    if (existingItem) {
        existingItem.quantity += modalQuantity;
    } else {
        cart.push({
            ...product, 
            quantity: modalQuantity,
            selectedSize: selectedSize,
            selectedColor: selectedColor
        });
    }

    updateCartUI();
    closeProductModal();
    showNotification(`${product.name} added to cart!`, 'success');
}

function filterByCategory(category) {
    document.getElementById('categoryFilter').value = category;
    showPage('products');
    setTimeout(() => {
        filterProducts();
    }, 100);
}

// Cart functionality
function removeFromCartByIndex(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateQuantityByIndex(index, change) {
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            removeFromCartByIndex(index);
        } else {
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = `Rs ${totalPrice.toLocaleString()}`;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center py-8">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div class="flex items-center">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg mr-4" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBDOTQuNDc3MiA3MCA5MCA3NC40NzcyIDkwIDgwVjEyMEM5MCA5NC40NzcyIDk0LjQ3NzIgOTAgMTAwIDkwSDEwMEMxMDUuNTIzIDkwIDExMCA5NC40NzcyIDExMCAxMDBWMTIwQzExMCAxMjUuNTIzIDEwNS41MjMgMTMwIDEwMCAxMzBIMTAwWiIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4='; this.alt='Image not available';">
                    <div>
                        <h4 class="font-semibold text-gray-800">${item.name}</h4>
                        <p class="text-purple-600 font-medium">Rs ${item.price.toLocaleString()}</p>
                        ${item.selectedSize ? `<p class="text-sm text-gray-500">Size: ${item.selectedSize}</p>` : ''}
                        ${item.selectedColor ? `<p class="text-sm text-gray-500">Color: ${item.selectedColor}</p>` : ''}
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <button onclick="updateQuantityByIndex(${index}, -1)" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">-</button>
                    <span class="w-8 text-center font-medium">${item.quantity}</span>
                    <button onclick="updateQuantityByIndex(${index}, 1)" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">+</button>
                    <button onclick="removeFromCartByIndex(${index})" class="ml-2 text-red-500 hover:text-red-700 transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        </svg>
                    </button>
                </div>
            </div>
        `).join('');
    }
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('open');
}

// Checkout functionality
function showCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('checkoutTotal').textContent = `Rs ${total.toLocaleString()}`;
    document.getElementById('checkoutModal').classList.remove('hidden');
    toggleCart();
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.add('hidden');
    selectedPaymentMethod = '';
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.getElementById('cardDetails').classList.add('hidden');
}

function processOrder(event) {
    event.preventDefault();
    
    if (!selectedPaymentMethod) {
        showNotification('Please select a payment method', 'error');
        return;
    }

    if (selectedPaymentMethod === 'card') {
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        if (!cardNumber || !expiryDate || !cvv) {
            showNotification('Please fill in all card details', 'error');
            return;
        }

        if (cardNumber.replace(/\s/g, '').length < 16) {
            showNotification('Please enter a valid card number', 'error');
            return;
        }

        if (expiryDate.length < 5) {
            showNotification('Please enter a valid expiry date', 'error');
            return;
        }

        if (cvv.length < 3) {
            showNotification('Please enter a valid CVV', 'error');
            return;
        }
    }
    
    // Generate order ID
    const orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Get form data
    const formData = new FormData(event.target);
    const customerData = {
        name: formData.get('name') || event.target.querySelector('input[placeholder="Full Name"]').value,
        email: formData.get('email') || event.target.querySelector('input[placeholder="Email Address"]').value,
        address: formData.get('address') || event.target.querySelector('input[placeholder="Address"]').value,
        city: formData.get('city') || event.target.querySelector('input[placeholder="City"]').value,
        zipCode: formData.get('zipCode') || event.target.querySelector('input[placeholder="ZIP Code"]').value,
        paymentMethod: selectedPaymentMethod
    };
    
    // Send order email
    sendOrderEmail(orderId, customerData, cart);
    
    // Clear cart
    cart = [];
    updateCartUI();
    
    // Show success modal
    document.getElementById('orderIdDisplay').textContent = orderId;
    closeCheckout();
    document.getElementById('successModal').classList.remove('hidden');
}

function sendOrderEmail(orderId, customerData, orderItems) {
    const total = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderDate = new Date().toLocaleDateString('en-PK');
    
    // Create order details HTML
    const orderItemsHtml = orderItems.map(item => `
        <tr style="border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; text-align: left;">${item.name}</td>
            <td style="padding: 12px; text-align: center;">${item.selectedSize || 'N/A'}</td>
            <td style="padding: 12px; text-align: center;">${item.selectedColor || 'N/A'}</td>
            <td style="padding: 12px; text-align: center;">${item.quantity}</td>
            <td style="padding: 12px; text-align: right;">Rs ${item.price.toLocaleString()}</td>
            <td style="padding: 12px; text-align: right;">Rs ${(item.price * item.quantity).toLocaleString()}</td>
        </tr>
    `).join('');

    const emailBody = `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; background: #f9fafb; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
                <h1 style="margin: 0; font-size: 28px;">🎉 New Order Received!</h1>
                <p style="margin: 10px 0 0 0; font-size: 18px;">Farhan's Store - Order Management</p>
            </div>
            
            <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
                <h2 style="color: #374151; margin-top: 0;">📋 Order Details</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <p><strong>Order ID:</strong> ${orderId}</p>
                        <p><strong>Date:</strong> ${orderDate}</p>
                        <p><strong>Payment Method:</strong> ${customerData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Credit/Debit Card'}</p>
                    </div>
                    <div>
                        <p><strong>Total Amount:</strong> Rs ${total.toLocaleString()}</p>
                        <p><strong>Status:</strong> <span style="color: #f59e0b; font-weight: bold;">Pending Confirmation</span></p>
                    </div>
                </div>
            </div>

            <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 20px;">
                <h2 style="color: #374151; margin-top: 0;">👤 Customer Information</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <p><strong>Name:</strong> ${customerData.name}</p>
                        <p><strong>Email:</strong> ${customerData.email}</p>
                        <p><strong>Phone:</strong> Available in form data</p>
                    </div>
                    <div>
                        <p><strong>Address:</strong> ${customerData.address}</p>
                        <p><strong>City:</strong> ${customerData.city}</p>
                        <p><strong>ZIP Code:</strong> ${customerData.zipCode}</p>
                    </div>
                </div>
            </div>

            <div style="background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 30px;">
                <h2 style="color: #374151; margin-top: 0;">🛍️ Ordered Items</h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                    <thead>
                        <tr style="background: #f3f4f6;">
                            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e5e7eb;">Product</th>
                            <th style="padding: 12px; text-align: center; border-bottom: 2px solid #e5e7eb;">Size</th>
                            <th style="padding: 12px; text-align: center; border-bottom: 2px solid #e5e7eb;">Color</th>
                            <th style="padding: 12px; text-align: center; border-bottom: 2px solid #e5e7eb;">Qty</th>
                            <th style="padding: 12px; text-align: right; border-bottom: 2px solid #e5e7eb;">Price</th>
                            <th style="padding: 12px; text-align: right; border-bottom: 2px solid #e5e7eb;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${orderItemsHtml}
                        <tr style="background: #f9fafb; font-weight: bold;">
                            <td colspan="5" style="padding: 15px; text-align: right; border-top: 2px solid #e5e7eb;">Grand Total:</td>
                            <td style="padding: 15px; text-align: right; border-top: 2px solid #e5e7eb; color: #7c3aed; font-size: 18px;">Rs ${total.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #374151; margin-bottom: 20px;">⚡ Quick Actions</h2>
                <div style="display: inline-block; margin: 0 10px;">
                    <a href="mailto:customer@example.com?subject=Order Confirmed - ${orderId}&body=Dear ${customerData.name},%0A%0AGreat news! Your order ${orderId} has been confirmed and is being prepared for shipment.%0A%0AOrder Details:%0A- Order ID: ${orderId}%0A- Total: Rs ${total.toLocaleString()}%0A- Estimated Delivery: 3-5 business days%0A%0AThank you for choosing Farhan's Store!%0A%0ABest regards,%0AFarhan's Store Team" 
                       style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; display: inline-block; margin: 5px;">
                        ✅ Confirm & Ship Order
                    </a>
                </div>
                <div style="display: inline-block; margin: 0 10px;">
                    <a href="mailto:customer@example.com?subject=Order Cancelled - ${orderId}&body=Dear ${customerData.name},%0A%0AWe regret to inform you that your order ${orderId} has been cancelled.%0A%0AReason: [Please specify reason]%0A%0AIf you have any questions, please contact us.%0A%0AApologies for any inconvenience.%0A%0ABest regards,%0AFarhan's Store Team" 
                       style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 10px; font-weight: bold; display: inline-block; margin: 5px;">
                        ❌ Cancel Order
                    </a>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); padding: 20px; border-radius: 10px; text-align: center; color: #6b7280;">
                <p style="margin: 0; font-size: 14px;">This is an automated notification from Farhan's Store Order Management System</p>
                <p style="margin: 5px 0 0 0; font-size: 12px;">Please respond to the customer within 24 hours</p>
            </div>
        </div>
    `;

    // Create mailto link
    const subject = encodeURIComponent(`🛍️ New Order Alert - ${orderId} - Rs ${total.toLocaleString()}`);
    const body = encodeURIComponent(emailBody.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim());
    
    // Open email client
    const mailtoLink = `mailto:farhanstore@gmail.com?subject=${subject}&body=${body}`;
    
    // Create a temporary link and click it
    const tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    
    showNotification('Order placed successfully! Email notification sent.', 'success');
}

function closeSuccess() {
    document.getElementById('successModal').classList.add('hidden');
    showPage('home');
}

// Order tracking
function trackOrder() {
    const trackingInput = document.getElementById('trackingInput');
    const trackingResult = document.getElementById('trackingResult');
    
    if (trackingInput.value.trim()) {
        trackingResult.classList.remove('hidden');
        showNotification('Order found! Tracking information displayed below.', 'success');
    } else {
        showNotification('Please enter a valid order ID', 'error');
    }
}

// Enhanced notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
    notification.className = `fixed top-20 right-4 ${bgColor} text-white px-6 py-4 rounded-2xl shadow-2xl z-50 transform translate-x-full transition-all duration-300 max-w-sm`;
    notification.innerHTML = `
        <div class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                ${type === 'success' ? 
                    '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>' :
                    '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>'
                }
            </svg>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);

    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Close cart when clicking outside
document.addEventListener('click', function(event) {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartButton = event.target.closest('[onclick="toggleCart()"]');
    
    if (!cartSidebar.contains(event.target) && !cartButton && cartSidebar.classList.contains('open')) {
        toggleCart();
    }
});
function toggleMobileMenu() {
const menu = document.getElementById("mobileMenu");
menu.classList.toggle("hidden");
}
