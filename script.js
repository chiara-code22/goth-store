// ============================================================
// NOCTIS DARK FASHION — script.js
// Gothic E-Commerce | Full JS Logic
// ============================================================

'use strict';

// ============================================================
// 1. GOTHIC PRODUCT DATA
// ============================================================
const PRODUCTS = {
  women: [
    {
      id: 'w001', name: 'Velvet Vampire Corset Dress', category: 'women',
      price: 89.99, oldPrice: null, badge: 'New',
      size: ['XS','S','M','L','XL'],
      img: 'https://i.pinimg.com/736x/4e/3d/85/4e3d85a8d6d4bcfed8d36a6e39ae8f2a.jpg',
      desc: 'Abito corsetto in velluto nero con dettagli rosso sangue. Perfetto per le notti oscure.'
    },
    {
      id: 'w002', name: 'Victorian Mourning Gown', category: 'women',
      price: 129.99, oldPrice: 159.99, badge: 'Sale',
      size: ['XS','S','M','L'],
      img: 'https://i.pinimg.com/736x/7a/2f/b3/7a2fb3c4d5e6f7a8b9c0d1e2f3a4b5c6.jpg',
      desc: 'Abito vittoriano da lutto in organza nera con pizzo antico e manica lunga.'
    },
    {
      id: 'w003', name: 'Blood Lace Corset Top', category: 'women',
      price: 64.99, oldPrice: null, badge: null,
      size: ['XS','S','M','L','XL'],
      img: 'https://i.pinimg.com/736x/1b/4c/7d/1b4c7d8e9f0a1b2c3d4e5f6a7b8c9d0e.jpg',
      desc: 'Top corsetto in pizzo rosso sangue con lacci sul retro. Stile gothic boudoir.'
    },
    {
      id: 'w004', name: 'Dark Academia Midi Dress', category: 'women',
      price: 99.99, oldPrice: null, badge: 'New',
      size: ['S','M','L','XL'],
      img: 'https://i.pinimg.com/736x/5c/8d/0e/5c8d0e1f2a3b4c5d6e7f8a9b0c1d2e3f.jpg',
      desc: 'Abito midi stile Dark Academia con dettagli vittoriani e tessuto in broccato.'
    },
    {
      id: 'w005', name: 'Witch Velvet Maxi Skirt', category: 'women',
      price: 74.99, oldPrice: null, badge: null,
      size: ['XS','S','M','L','XL','XXL'],
      img: 'https://i.pinimg.com/736x/9d/2e/4f/9d2e4f5a6b7c8d9e0f1a2b3c4d5e6f7a.jpg',
      desc: 'Gonna maxi in velluto nero con taglio svasato e cintura in pelle con borchie.'
    },
    {
      id: 'w006', name: 'Raven Queen Ballgown', category: 'women',
      price: 199.99, oldPrice: 249.99, badge: 'Sale',
      size: ['XS','S','M','L'],
      img: 'https://i.pinimg.com/736x/3f/6a/9c/3f6a9cbd5e2a1b8d7c4f0e3a6b9d2f5c.jpg',
      desc: 'Abito da ballo della Regina dei Corvi. Tulle nero multistrato con corsetto.'
    },
    {
      id: 'w007', name: 'Gothic Lolita Mini Dress', category: 'women',
      price: 79.99, oldPrice: null, badge: 'New',
      size: ['XS','S','M'],
      img: 'https://i.pinimg.com/736x/a1/c3/e5/a1c3e5b7d9f1a3c5e7b9d1f3a5c7e9b1.jpg',
      desc: 'Mini dress Gothic Lolita in cotone nero con volant bianchi e fiocchi rossi.'
    },
    {
      id: 'w008', name: 'Vampire Duchess Blouse', category: 'women',
      price: 54.99, oldPrice: null, badge: null,
      size: ['XS','S','M','L','XL'],
      img: 'https://i.pinimg.com/736x/b2/d4/f6/b2d4f6a8c0e2b4d6f8a0c2e4b6d8f0a2.jpg',
      desc: 'Camicia duchessa vampiresca in seta nera con colletto vittoriano e bottoni dorati.'
    }
  ],
  men: [
    {
      id: 'm001', name: 'Count Dracula Frock Coat', category: 'men',
      price: 159.99, oldPrice: null, badge: 'New',
      size: ['S','M','L','XL','XXL'],
      img: 'https://i.pinimg.com/736x/c3/e5/g7/c3e5a7b9d1f3a5c7e9b1d3f5a7c9e1b3.jpg',
      desc: 'Cappotto vittoriano stile Dracula in lana nera con collo alto e falde lunghe.'
    },
    {
      id: 'm002', name: 'Dark Prince Ruffled Shirt', category: 'men',
      price: 69.99, oldPrice: 89.99, badge: 'Sale',
      size: ['S','M','L','XL'],
      img: 'https://i.pinimg.com/736x/d4/f6/a8/d4f6a8c0e2b4d6f8a0c2e4b6d8f0a2b4.jpg',
      desc: 'Camicia con jabot in pizzo bianco, stile principe oscuro del XVIII secolo.'
    },
    {
      id: 'm003', name: 'Goth Velvet Blazer', category: 'men',
      price: 124.99, oldPrice: null, badge: null,
      size: ['S','M','L','XL','XXL'],
      img: 'https://i.pinimg.com/736x/e5/a7/c9/e5a7c9b1d3f5a7c9e1b3d5f7a9c1e3b5.jpg',
      desc: 'Blazer in velluto bordeaux con bavero in raso nero. Eleganza oscura assoluta.'
    },
    {
      id: 'm004', name: 'Victorian Undertaker Vest', category: 'men',
      price: 84.99, oldPrice: null, badge: 'New',
      size: ['S','M','L','XL'],
      img: 'https://i.pinimg.com/736x/f6/b8/d0/f6b8d0e2c4a6b8d0f2a4c6e8b0d2f4a6.jpg',
      desc: 'Gilet da becchino vittoriano in broccato nero con bottoni argentati a teschio.'
    },
    {
      id: 'm005', name: 'Dark Academia Trench Coat', category: 'men',
      price: 189.99, oldPrice: 229.99, badge: 'Sale',
      size: ['S','M','L','XL','XXL'],
      img: 'https://i.pinimg.com/736x/a7/c9/e1/a7c9e1b3d5f7a9c1e3b5d7f9a1c3e5b7.jpg',
      desc: 'Trench coat dark academia in lana nera con cintura e doppio petto.'
    },
    {
      id: 'm006', name: 'Gothic Poet Shirt', category: 'men',
      price: 59.99, oldPrice: null, badge: null,
      size: ['S','M','L','XL'],
      img: 'https://i.pinimg.com/736x/b8/d0/f2/b8d0f2a4c6e8b0d2f4a6c8e0b2d4f6a8.jpg',
      desc: 'Camicia da poeta gotico in cotone bianco vintage con maniche ampie e colletto romantico.'
    }
  ],
  accessories: [
    {
      id: 'a001', name: 'Obsidian Cross Choker', category: 'accessories',
      price: 34.99, oldPrice: null, badge: 'New',
      size: ['One Size'],
      img: 'https://i.pinimg.com/736x/c9/e1/b3/c9e1b3d5f7a9c1e3b5d7f9a1c3e5b7d9.jpg',
      desc: 'Choker con croce in ossidiana nera e catena in acciaio inox anticato.'
    },
    {
      id: 'a002', name: 'Vampire Bat Earrings', category: 'accessories',
      price: 24.99, oldPrice: null, badge: null,
      size: ['One Size'],
      img: 'https://i.pinimg.com/736x/d0/f2/a4/d0f2a4c6e8b0d2f4a6c8e0b2d4f6a8c0.jpg',
      desc: 'Orecchini con pipistrello in argento 925 ossidato e cristalli neri.'
    },
    {
      id: 'a003', name: 'Dark Moon Handbag', category: 'accessories',
      price: 79.99, oldPrice: 99.99, badge: 'Sale',
      size: ['One Size'],
      img: 'https://i.pinimg.com/736x/e1/b3/d5/e1b3d5f7a9c1e3b5d7f9a1c3e5b7d9f1.jpg',
      desc: 'Borsa a mano in pelle vegana nera con chiusura a luna e catena argentata.'
    },
    {
      id: 'a004', name: 'Witchcraft Ring Set', category: 'accessories',
      price: 44.99, oldPrice: null, badge: 'New',
      size: ['S','M','L'],
      img: 'https://i.pinimg.com/736x/f2/a4/c6/f2a4c6e8b0d2f4a6c8e0b2d4f6a8c0e2.jpg',
      desc: 'Set di 5 anelli stregoneria in argento con simboli occulti e pietre nere.'
    }
  ]
};

// ============================================================
// 2. LOCAL STORAGE CART & WISHLIST
// ============================================================
function getCart() {
  try { return JSON.parse(localStorage.getItem('noctis_cart')) || []; }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('noctis_cart', JSON.stringify(cart));
}
function getWishlist() {
  try { return JSON.parse(localStorage.getItem('noctis_wishlist')) || []; }
  catch { return []; }
}
function saveWishlist(wl) {
  localStorage.setItem('noctis_wishlist', JSON.stringify(wl));
}

// ============================================================
// 3. RENDER PRODUCTS
// ============================================================
function renderProducts(products, containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = '';
  const wishlist = getWishlist();

  products.forEach((p, i) => {
    const isWishlisted = wishlist.some(w => w.id === p.id);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="product-img-wrap" onclick="openProductModal('${p.id}')">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x530/0a0a0a/8b0000?text=NOCTIS'"/>
        <div class="product-badges">
          ${p.badge ? `<span class="badge-tag badge-${p.badge.toLowerCase()}">${p.badge}</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="action-btn wishlist-btn ${isWishlisted ? 'wishlisted' : ''}"
            onclick="event.stopPropagation(); toggleWishlist('${p.id}')"
            title="Aggiungi alla Wishlist">
            <i class="fas fa-heart"></i>
          </button>
          <button class="action-btn" onclick="event.stopPropagation(); openProductModal('${p.id}')" title="Vedi dettagli">
            <i class="fas fa-eye"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <p class="product-category">${p.category}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-price">
          ${p.oldPrice ? `<span class="old-price">€${p.oldPrice.toFixed(2)}</span>` : ''}
          €${p.price.toFixed(2)}
        </p>
        <select class="product-size-select" id="size-${p.id}">
          ${p.size.map(s => `<option>${s}</option>`).join('')}
        </select>
        <button class="add-to-cart-btn" onclick="addToCart('${p.id}')">
          Aggiungi al Carrello ⸸
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderAllProducts() {
  renderProducts(PRODUCTS.women, 'womenGrid');
  renderProducts(PRODUCTS.men, 'menGrid');
  renderProducts(PRODUCTS.accessories, 'accessoriesGrid');
}

function getProductById(id) {
  return [...PRODUCTS.women, ...PRODUCTS.men, ...PRODUCTS.accessories].find(p => p.id === id);
}

// ============================================================
// 4. CART LOGIC
// ============================================================
function addToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;
  const sizeEl = document.getElementById(`size-${productId}`);
  const size = sizeEl ? sizeEl.value : 'One Size';
  const cart = getCart();
  const existing = cart.find(i => i.id === productId && i.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, size, qty: 1 });
  }
  saveCart(cart);
  updateCartUI();
  showAddedFeedback(productId);
  openCart();
}

function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter(i => !(i.id === productId && i.size === size));
  saveCart(cart);
  updateCartUI();
  renderCartItems();
}

function changeQty(productId, size, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId && i.size === size);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(cart);
  updateCartUI();
  renderCartItems();
}

function clearCart() {
  saveCart([]);
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) badge.textContent = totalItems;
  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = `€${totalPrice.toFixed(2)}`;
  const footer = document.getElementById('cartFooter');
  const empty = document.getElementById('cartEmpty');
  if (footer) footer.style.display = cart.length > 0 ? 'block' : 'none';
  if (empty) empty.style.display = cart.length === 0 ? 'flex' : 'none';
}

function renderCartItems() {
  const cart = getCart();
  const container = document.getElementById('cartItems');
  if (!container) return;
  const empty = document.getElementById('cartEmpty');
  if (cart.length === 0) {
    if (empty) empty.style.display = 'flex';
    const items = container.querySelectorAll('.cart-item');
    items.forEach(i => i.remove());
    return;
  }
  if (empty) empty.style.display = 'none';
  const existingItems = container.querySelectorAll('.cart-item');
  existingItems.forEach(i => i.remove());
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${item.name}"
           onerror="this.src='https://via.placeholder.com/80x100/0a0a0a/8b0000?text=N'"/>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-size">Taglia: ${item.size}</div>
        <div class="cart-item-price">€${item.price.toFixed(2)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty('${item.id}','${item.size}',-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${item.id}','${item.size}',1)">+</button>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}','${item.size}')">
          <i class="fas fa-trash"></i> Rimuovi
        </button>
      </div>
    `;
    container.appendChild(div);
  });
}

function openCart() {
  renderCartItems();
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

function showAddedFeedback(productId) {
  const btn = document.querySelector(`[onclick="addToCart('${productId}')"]`);
  if (!btn) return;
  btn.textContent = '✓ Aggiunto!';
  btn.classList.add('added');
  setTimeout(() => {
    btn.textContent = 'Aggiungi al Carrello ⸸';
    btn.classList.remove('added');
  }, 2000);
}

// ============================================================
// 5. CHECKOUT / ORDER
// ============================================================
function checkout() {
  const cart = getCart();
  if (cart.length === 0) return;
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const orderDate = new Date();
  const deliveryDate = new Date(orderDate.getTime() + 4 * 24 * 60 * 60 * 1000);
  const options = { weekday:'long', year:'numeric', month:'long', day:'numeric' };
  const deliveryStr = deliveryDate.toLocaleDateString('it-IT', options);
  const trackingCode = 'NCT' + Math.random().toString(36).substr(2,8).toUpperCase();

  const details = document.getElementById('orderDetails');
  if (details) {
    details.innerHTML = `
      <div class="order-tracking">
        <div class="tracking-item">
          <span class="tracking-icon">🛍️</span>
          <div class="tracking-info">
            <div class="tracking-label">Articoli ordinati</div>
            <div class="tracking-value">${cart.reduce((s,i)=>s+i.qty,0)} articoli — Totale: €${total.toFixed(2)}</div>
          </div>
        </div>
        <div class="tracking-item">
          <span class="tracking-icon">📦</span>
          <div class="tracking-info">
            <div class="tracking-label">Numero Tracking</div>
            <div class="tracking-value">${trackingCode}</div>
          </div>
        </div>
        <div class="tracking-item">
          <span class="tracking-icon">🚚</span>
          <div class="tracking-info">
            <div class="tracking-label">Stato spedizione</div>
            <div class="tracking-value">In preparazione nelle tenebre...</div>
          </div>
        </div>
        <div class="tracking-item">
          <span class="tracking-icon">📅</span>
          <div class="tracking-info">
            <div class="tracking-label">Consegna prevista</div>
            <div class="tracking-value">${deliveryStr}</div>
          </div>
        </div>
        <div class="tracking-item">
          <span class="tracking-icon">📍</span>
          <div class="tracking-info">
            <div class="tracking-label">Posizione attuale</div>
            <div class="tracking-value">Magazzino NOCTIS — Milano, IT</div>
          </div>
        </div>
      </div>
      <p style="color:var(--text-secondary);font-style:italic;font-size:0.85rem;">
        Riceverai una email oscura con tutti i dettagli del tuo ordine.
      </p>
    `;
  }

  closeCart();
  clearCart();
  document.getElementById('orderSuccessOverlay').classList.add('show');
}

function closeOrderModal() {
  document.getElementById('orderSuccessOverlay').classList.remove('show');
}

// ============================================================
// 6. WISHLIST
// ============================================================
function toggleWishlist(productId) {
  const product = getProductById(productId);
  if (!product) return;
  let wl = getWishlist();
  const existing = wl.findIndex(i => i.id === productId);
  if (existing >= 0) {
    wl.splice(existing, 1);
  } else {
    wl.push(product);
  }
  saveWishlist(wl);
  updateWishlistUI();
  renderWishlistItems();
  // aggiorna icone
  document.querySelectorAll(`.wishlist-btn`).forEach(btn => {
    const card = btn.closest('.product-card');
    if (!card) return;
    const addBtn = card.querySelector('.add-to-cart-btn');
    if (!addBtn) return;
    const id = addBtn.getAttribute('onclick').match(/'([^']+)'/)?.[1];
    if (id === productId) {
      btn.classList.toggle('wishlisted', existing < 0);
    }
  });
}

function updateWishlistUI() {
  const wl = getWishlist();
  const badge = document.getElementById('wishBadge');
  if (badge) badge.textContent = wl.length;
}

function renderWishlistItems() {
  const wl = getWishlist();
  const container = document.getElementById('wishlistItems');
  if (!container) return;
  container.innerHTML = '';
  if (wl.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-heart"></i>
        <p>La tua wishlist è vuota</p>
        <span>Salva i tuoi articoli preferiti</span>
      </div>`;
    return;
  }
  wl.forEach(item => {
    const div = document.createElement('div');
    div.className = 'wishlist-item';
    div.innerHTML = `
      <img class="wishlist-item-img" src="${item.img}" alt="${item.name}"
           onerror="this.src='https://via.placeholder.com/70x90/0a0a0a/8b0000?text=N'"/>
      <div class="wishlist-item-info">
        <div class="wishlist-item-name">${item.name}</div>
        <div class="wishlist-item-price">€${item.price.toFixed(2)}</div>
        <button class="wishlist-add-btn" onclick="addToCartFromWishlist('${item.id}')">
          + Aggiungi al Carrello
        </button>
        <button class="cart-item-remove" style="margin-top:0.3rem"
          onclick="toggleWishlist('${item.id}')">
          <i class="fas fa-trash"></i> Rimuovi
        </button>
      </div>
    `;
    container.appendChild(div);
  });
}

function addToCartFromWishlist(productId) {
  addToCart(productId);
  closeWishlist();
}

function openWishlist() {
  renderWishlistItems();
  document.getElementById('wishlistSidebar').classList.add('open');
  document.getElementById('wishlistOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeWishlist() {
  document.getElementById('wishlistSidebar').classList.remove('open');
  document.getElementById('wishlistOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

// ============================================================
// 7. PRODUCT MODAL
// ============================================================
function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;
  const content = document.getElementById('productModalContent');
  if (!content) return;
  content.innerHTML = `
    <img class="product-modal-img" src="${product.img}" alt="${product.name}"
         onerror="this.src='https://via.placeholder.com/400x530/0a0a0a/8b0000?text=NOCTIS'"/>
    <div class="product-modal-details">
      <p class="product-category">${product.category}</p>
      <h2>${product.name}</h2>
      <div class="product-modal-price">
        ${product.oldPrice ? `<span class="old-price" style="font-size:0.85rem;color:var(--text-muted);text-decoration:line-through;margin-right:0.5rem">€${product.oldPrice.toFixed(2)}</span>` : ''}
        €${product.price.toFixed(2)}
      </div>
      <p class="product-modal-desc">${product.desc}</p>
      <select class="product-size-select" id="modal-size-${product.id}" style="width:100%;margin-bottom:1rem;padding:0.7rem">
        ${product.size.map(s => `<option>${s}</option>`).join('')}
      </select>
      <button class="btn-primary full-width" onclick="addToCartFromModal('${product.id}')">
        Aggiungi al Carrello ⸸
      </button>
      <button class="btn-outline full-width" style="margin-top:0.5rem" onclick="toggleWishlist('${product.id}')">
        ♥ Aggiungi alla Wishlist
      </button>
    </div>
  `;
  document.getElementById('productOverlay').classList.add('show');
}

function addToCartFromModal(productId) {
  const sizeEl = document.getElementById(`modal-size-${productId}`);
  if (sizeEl) {
    const realSizeEl = document.getElementById(`size-${productId}`);
    if (realSizeEl) realSizeEl.value = sizeEl.value;
  }
  addToCart(productId);
  document.getElementById('productOverlay').classList.remove('show');
}

// ============================================================
// 8. REGISTRATION MODAL
// ============================================================
function openRegisterModal() {
  document.getElementById('registerOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeSuccessModal() {
  document.getElementById('registerSuccessOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

// ============================================================
// 9. FAQ ACCORDION
// ============================================================
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = answer.classList.contains('open');
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
      document.querySelectorAll('.faq-question').forEach(b => b.classList.remove('active'));
      if (!isOpen) {
        answer.classList.add('open');
        btn.classList.add('active');
      }
    });
  });
}

// ============================================================
// 10. NAVBAR
// ============================================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
}

// ============================================================
// 11. CHATBOT
// ============================================================
const CHATBOT_RESPONSES = {
  'novità': '🦇 Le nostre ultime collezioni includono il Raven Queen Ballgown e il Count Dracula Frock Coat. Esplora la sezione Women e Men per scoprire tutte le ultime oscure creazioni!',
  'traccia': '📦 Per tracciare il tuo ordine, accedi alla sezione "I miei ordini" nel tuo profilo. Riceverai anche una email con il tracking non appena il tuo pacco oscuro parte dal nostro magazzino!',
  'reso': '🕸️ Sì! I resi sono completamente gratuiti entro 30 giorni dall\'acquisto. Il capo deve essere in condizioni originali con tutti i tag. Contattaci a support@noctis-darkfashion.com.',
  'spedizione': '🚚 Spedizione gratuita per ordini sopra €80! Per ordini inferiori, €5.99 in Italia e da €9.99 per l\'estero. I tempi medi sono 3-5 giorni lavorativi.',
  'taglia': '📏 Ogni prodotto ha una guida taglie dedicata. In generale, i nostri capi gotici hanno una vestibilità regolare. Ti consiglio di misurarti e consultare la tabella taglie sulla pagina del prodotto.',
  'pagamento': '💳 Accettiamo carte di credito/debito (Visa, Mastercard, Amex), PayPal, Apple Pay e bonifico bancario. Tutti i pagamenti sono sicuri e crittografati.',
  'contatti': '📧 Puoi contattarci via email a info@noctis-darkfashion.com o al numero +39 02 1234 5678 (Lun-Ven 10-19). Oppure visita la nostra pagina Contatti!',
  'default': '🦇 Sono Lilith, la tua assistente oscura di NOCTIS. Posso aiutarti con: spedizioni, resi, taglie, pagamenti, tracciamento ordini e altro ancora. Cosa desideri sapere, anima notturna?'
};

function getBotResponse(msg) {
  const lower = msg.toLowerCase();
  if (lower.includes('novit') || lower.includes('nuov') || lower.includes('collezione')) return CHATBOT_RESPONSES.novità;
  if (lower.includes('traccia') || lower.includes('ordine') || lower.includes('dove')) return CHATBOT_RESPONSES.traccia;
  if (lower.includes('reso') || lower.includes('rimborso') || lower.includes('restitu')) return CHATBOT_RESPONSES.reso;
  if (lower.includes('spediz') || lower.includes('consegna') || lower.includes('arriv')) return CHATBOT_RESPONSES.spedizione;
  if (lower.includes('taglia') || lower.includes('misura') || lower.includes('size')) return CHATBOT_RESPONSES.taglia;
  if (lower.includes('pagament') || lower.includes('carta') || lower.includes('paypal')) return CHATBOT_RESPONSES.pagamento;
  if (lower.includes('contatt') || lower.includes('email') || lower.includes('telefon')) return CHATBOT_RESPONSES.contatti;
  return CHATBOT_RESPONSES.default;
}

function addChatMessage(text, sender) {
  const messages = document.getElementById('chatbotMessages');
  if (!messages) return;
  const div = document.createElement('div');
  div.className = `chat-msg ${sender}`;
  div.innerHTML = `<span>${text}</span>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function sendQuickMsg(text) {
  addChatMessage(text, 'user');
  setTimeout(() => addChatMessage(getBotResponse(text), 'bot'), 700);
}

function initChatbot() {
  const toggle = document.getElementById('chatbotToggle');
  const container = document.getElementById('chatbotContainer');
  const closeBtn = document.getElementById('closeChatbot');
  const sendBtn = document.getElementById('sendChatBtn');
  const input = document.getElementById('chatInput');

  if (toggle && container) {
    toggle.addEventListener('click', () => container.classList.toggle('open'));
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', () => container.classList.remove('open'));
  }
  if (sendBtn && input) {
    sendBtn.addEventListener('click', () => {
      const msg = input.value.trim();
      if (!msg) return;
      addChatMessage(msg, 'user');
      input.value = '';
      setTimeout(() => addChatMessage(getBotResponse(msg), 'bot'), 700);
    });
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') sendBtn.click();
    });
  }
}

// ============================================================
// 12. BAT ANIMATION
// ============================================================
function initBats() {
  const canvas = document.getElementById('batCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const bats = Array.from({ length: 12 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 18 + 8,
    speedX: (Math.random() - 0.5) * 1.5,
    speedY: (Math.random() - 0.5) * 1.2,
    wingAngle: Math.random() * Math.PI,
    wingSpeed: Math.random() * 0.08 + 0.04,
    opacity: Math.random() * 0.5 + 0.2
  }));

  function drawBat(bat) {
    ctx.save();
    ctx.globalAlpha = bat.opacity;
    ctx.translate(bat.x, bat.y);
    ctx.fillStyle = '#8b0000';
    const w = bat.wingAngle;
    // Body
    ctx.beginPath();
    ctx.ellipse(0, 0, bat.size * 0.25, bat.size * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();
    // Left wing
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-bat.size * Math.cos(w), -bat.size * 0.4 * Math.sin(w), -bat.size * 1.2, bat.size * 0.1);
    ctx.quadraticCurveTo(-bat.size * 0.8, bat.size * 0.3, 0, 0);
    ctx.fill();
    // Right wing
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(bat.size * Math.cos(w), -bat.size * 0.4 * Math.sin(w), bat.size * 1.2, bat.size * 0.1);
    ctx.quadraticCurveTo(bat.size * 0.8, bat.size * 0.3, 0, 0);
    ctx.fill();
    // Ears
    ctx.beginPath();
    ctx.moveTo(-bat.size * 0.1, -bat.size * 0.12);
    ctx.lineTo(-bat.size * 0.2, -bat.size * 0.35);
    ctx.lineTo(0, -bat.size * 0.1);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(bat.size * 0.1, -bat.size * 0.12);
    ctx.lineTo(bat.size * 0.2, -bat.size * 0.35);
    ctx.lineTo(0, -bat.size * 0.1);
    ctx.fill();
    ctx.restore();
  }

  function animateBats() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bats.forEach(bat => {
      bat.wingAngle += bat.wingSpeed;
      bat.x += bat.speedX;
      bat.y += bat.speedY + Math.sin(bat.wingAngle) * 0.4;
      if (bat.x < -50) bat.x = canvas.width + 50;
      if (bat.x > canvas.width + 50) bat.x = -50;
      if (bat.y < -50) bat.y = canvas.height + 50;
      if (bat.y > canvas.height + 50) bat.y = -50;
      drawBat(bat);
    });
    requestAnimationFrame(animateBats);
  }
  animateBats();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ============================================================
// 13. SPIDER & WEB ANIMATION
// ============================================================
function initSpiders() {
  const canvas = document.getElementById('spiderCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const spiders = Array.from({ length: 6 }, () => ({
    x: Math.random() * canvas.width,
    y: -30,
    size: Math.random() * 10 + 6,
    speed: Math.random() * 0.5 + 0.2,
    legAngle: 0,
    threadLength: 0,
    maxThread: Math.random() * canvas.height * 0.6 + 100,
    descending: true,
    opacity: Math.random() * 0.5 + 0.3
  }));

  function drawSpider(s) {
    ctx.save();
    ctx.globalAlpha = s.opacity;
    ctx.translate(s.x, s.y);
    // Thread
    ctx.strokeStyle = 'rgba(200,180,150,0.3)';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(0, -s.threadLength);
    ctx.lineTo(0, 0);
    ctx.stroke();
    // Web
    if (s.threadLength > 40) {
      ctx.strokeStyle = 'rgba(200,180,150,0.12)';
      ctx.lineWidth = 0.5;
      for (let r = 10; r < 30; r += 10) {
        ctx.beginPath();
        ctx.arc(-s.x, -s.threadLength + 20, r, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    // Body
    ctx.fillStyle = '#1a0a0a';
    ctx.strokeStyle = '#8b0000';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.ellipse(0, 0, s.size * 0.6, s.size * 0.8, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    // Head
    ctx.beginPath();
    ctx.arc(0, -s.size * 0.9, s.size * 0.45, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    // Eyes
    ctx.fillStyle = '#ff0000';
    ctx.beginPath(); ctx.arc(-s.size * 0.15, -s.size * 0.95, s.size * 0.12, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(s.size * 0.15, -s.size * 0.95, s.size * 0.12, 0, Math.PI * 2); ctx.fill();
    // Legs
    ctx.strokeStyle = '#2a0a0a';
    ctx.lineWidth = 0.8;
    const la = s.legAngle;
    [-1, 1].forEach(side => {
      [0, 1, 2, 3].forEach((_, i) => {
        const angle = (i * 0.35 - 0.5) * side + (side === -1 ? Math.PI : 0);
        const wiggle = Math.sin(la + i) * 0.2;
        ctx.beginPath();
        ctx.moveTo(side * s.size * 0.5, i * s.size * 0.3 - s.size * 0.3);
        ctx.quadraticCurveTo(
          side * s.size * 1.5 * Math.cos(angle + wiggle),
          i * s.size * 0.4 - s.size * 0.3 + Math.sin(angle) * s.size,
          side * s.size * 2 * Math.cos(angle + wiggle * 0.5),
          i * s.size * 0.4 - s.size * 0.3 + Math.sin(angle + 0.5) * s.size * 1.5
        );
        ctx.stroke();
      });
    });
    ctx.restore();
  }

  function animateSpiders() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    spiders.forEach(s => {
      s.legAngle += 0.1;
      if (s.descending) {
        s.y += s.speed;
        s.threadLength += s.speed;
        if (s.threadLength >= s.maxThread) s.descending = false;
      } else {
        s.y -= s.speed * 0.8;
        s.threadLength -= s.speed * 0.8;
        if (s.threadLength <= 0) {
          s.y = -30;
          s.threadLength = 0;
          s.x = Math.random() * canvas.width;
          s.maxThread = Math.random() * canvas.height * 0.6 + 100;
          s.descending = true;
        }
      }
      drawSpider(s);
    });
    requestAnimationFrame(animateSpiders);
  }
  animateSpiders();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ============================================================
// 14. UTILS
// ============================================================
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ============================================================
// 15. EVENT LISTENERS & INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Render products
  renderAllProducts();
  updateCartUI();
  updateWishlistUI();

  // Cart
  const cartBtn = document.getElementById('cartBtn');
  if (cartBtn) cartBtn.addEventListener('click', openCart);
  const closeCart_ = document.getElementById('closeCart');
  if (closeCart_) closeCart_.addEventListener('click', closeCart);
  const cartOverlay = document.getElementById('cartOverlay');
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);

  // Wishlist
  const wishBtn = document.getElementById('wishlistBtn');
  if (wishBtn) wishBtn.addEventListener('click', openWishlist);
  const closeWishBtn = document.getElementById('closeWishlist');
  if (closeWishBtn) closeWishBtn.addEventListener('click', closeWishlist);
  const wishOverlay = document.getElementById('wishlistOverlay');
  if (wishOverlay) wishOverlay.addEventListener('click', closeWishlist);

  // Register
  const registerBtn = document.getElementById('registerBtn');
  if (registerBtn) registerBtn.addEventListener('click', openRegisterModal);
  const closeRegisterBtn = document.getElementById('closeRegister');
  if (closeRegisterBtn) closeRegisterBtn.addEventListener('click', () => {
    document.getElementById('registerOverlay').classList.remove('show');
    document.body.style.overflow = '';
  });
  const registerOverlay = document.getElementById('registerOverlay');
  if (registerOverlay) registerOverlay.addEventListener('click', e => {
    if (e.target === registerOverlay) {
      registerOverlay.classList.remove('show');
      document.body.style.overflow = '';
    }
  });
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', e => {
      e.preventDefault();
      document.getElementById('registerOverlay').classList.remove('show');
      document.getElementById('registerSuccessOverlay').classList.add('show');
    });
  }

  // Product modal close
  const closeProduct = document.getElementById('closeProduct');
  if (closeProduct) closeProduct.addEventListener('click', () => {
    document.getElementById('productOverlay').classList.remove('show');
  });
  const productOverlay = document.getElementById('productOverlay');
  if (productOverlay) productOverlay.addEventListener('click', e => {
    if (e.target === productOverlay) productOverlay.classList.remove('show');
  });

  // Order modal backdrop
  const orderOverlay = document.getElementById('orderSuccessOverlay');
  if (orderOverlay) orderOverlay.addEventListener('click', e => {
    if (e.target === orderOverlay) closeOrderModal();
  });

  // FAQ
  initFAQ();

  // Navbar
  initNavbar();

  // Chatbot
  initChatbot();

  // Animations
  initBats();
  initSpiders();

  // IMPORTANT: Reset cart prices on page load (as requested)
  // The cart persists items but total is recalculated fresh
  updateCartUI();
});
