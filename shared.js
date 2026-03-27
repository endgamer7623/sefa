const LOGO_SRC = "data:image/jpeg;base64,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";

// ── PRODUCT STORE ──────────────────────────────────────────────────────────────
function initProducts() {
  // Product images loaded from images.js (IMG_CREAM_SINGLE, IMG_SOAP_SINGLE, IMG_BUFFALO_SINGLE, etc.)
  const creamImgs = typeof IMG_CREAM_SINGLE !== 'undefined' ? [IMG_CREAM_SINGLE, IMG_CREAM_MULTI, IMG_CREAM_SINGLE, IMG_CREAM_MULTI] : [];
  const soapImgs  = typeof IMG_SOAP_SINGLE  !== 'undefined' ? [IMG_SOAP_SINGLE,  IMG_SOAP_MULTI,  IMG_SOAP_SINGLE,  IMG_SOAP_MULTI]  : [];
  const buffImgs  = typeof IMG_BUFFALO_SINGLE !== 'undefined' ? [IMG_BUFFALO_SINGLE, IMG_BUFFALO_MULTI, IMG_BUFFALO_SINGLE, IMG_BUFFALO_MULTI] : [];

  const d=[
    {id:1,name:"Sefa Organic Cream",herb:"Shea Butter & Herbal Extracts",price:35000,unit:"250ml jar",category:"Skin Care",inStock:true,stockQty:150,
     description:"A rich, nourishing organic cream made with premium shea butter and natural herbal extracts. Moisturises, repairs and protects skin. Suitable for face and body.",
     benefits:["Deep moisturisation","Repairs dry skin","Natural ingredients only","Suitable for all skin types"],
     color:"#8b4a6b",images:creamImgs,
     reviews:[{name:"Aisha K.",rating:5,text:"My skin has never felt this soft and smooth!",date:"Dec 2024"},{name:"James O.",rating:5,text:"Best organic cream I have ever used.",date:"Jan 2025"}]},
    {id:2,name:"Sefa Organic Soap",herb:"Neem & Shea Butter — 160g",price:15000,unit:"160g bar",category:"Skin Care",inStock:true,stockQty:200,
     description:"100% natural herbal soap made with neem leaf extract and shea butter. Cleanses deeply, fights bacteria and leaves skin fresh. Be natural, use natural products.",
     benefits:["Antibacterial & antifungal","Deep cleansing","Shea butter moisturising","No harsh chemicals"],
     color:"#c8820a",images:soapImgs,
     reviews:[{name:"Sarah M.",rating:5,text:"My skin cleared up within 2 weeks of using this soap!",date:"Feb 2025"},{name:"Grace A.",rating:4,text:"Great natural soap, smells wonderful.",date:"Mar 2025"}]},
    {id:3,name:"Buffalo Gourd (Ziizi) Tincture",herb:"Lippia dulcis & Eclipta prostrata",price:45000,unit:"100ml bottle",category:"Herbal Tincture",inStock:true,stockQty:80,
     description:"A powerful herbal tincture made from Buffalo Gourd (Ziizi) in tincture form. Contains Lippia dulcis, Eclipta prostrata foetidissima and ethanol. Alcoholic content 45%. Traditional remedy for respiratory and digestive health.",
     benefits:["Respiratory support","Digestive health","Traditional herbal formula","45% alcoholic tincture"],
     color:"#3a5c20",images:buffImgs,
     reviews:[{name:"Robert W.",rating:5,text:"Very effective traditional remedy. Fast results.",date:"Jan 2025"},{name:"Patricia N.",rating:5,text:"Authentic Ugandan herbal medicine. Highly recommend.",date:"Nov 2024"}]},
  ];
  saveProducts(d);
  return d;
}
function getProducts() { const s=localStorage.getItem("sefa_products"); return s ? JSON.parse(s) : initProducts(); }
function saveProducts(products) { localStorage.setItem("sefa_products", JSON.stringify(products)); }

// ── CART ──────────────────────────────────────────────────────────────────────
function getCart() { return JSON.parse(localStorage.getItem("sefa_cart")||"[]"); }
function saveCart(cart) { localStorage.setItem("sefa_cart", JSON.stringify(cart)); updateCartBadge(); }
function addToCart(productId, qty) {
  qty = qty||1;
  const cart = getCart();
  const existing = cart.find(i=>i.id===productId);
  if(existing) { existing.qty += qty; }
  else {
    const p = getProducts().find(p=>p.id===productId);
    if(p) cart.push({id:p.id, name:p.name, price:p.price, unit:p.unit, qty:qty});
  }
  saveCart(cart);
}
function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((s,i)=>s+i.qty, 0);
  document.querySelectorAll(".cart-badge").forEach(el=>{
    el.textContent = total;
    el.style.display = total>0?"flex":"none";
  });
}

// ── NAV ──────────────────────────────────────────────────────────────────────
function renderHeader(activePage) {
  const cart = getCart();
  const cartCount = cart.reduce((s,i)=>s+i.qty,0);
  const pages=[{href:"index.html",label:"Home"},{href:"about.html",label:"About"},{href:"products.html",label:"Products"},{href:"contact.html",label:"Contact"}];
  const links = pages.map(p=>`<li><a href="${p.href}" class="${activePage===p.label?'active':''}">${p.label}</a></li>`).join("");
  return `<nav id="main-nav">
    <div class="nav-inner">
      <a href="index.html" class="nav-brand">
        <img src="${LOGO_SRC}" alt="Sefa Organic" class="nav-logo-img">
        <span class="nav-brand-text">Sefa <em>Organic</em></span>
      </a>
      <ul class="nav-links">${links}</ul>
      <div class="nav-actions">
        <a href="cart.html" class="cart-btn" title="Cart">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          <span class="cart-badge" style="display:${cartCount>0?'flex':'none'}">${cartCount}</span>
        </a>
        <button class="nav-toggle" onclick="toggleMobileNav()">&#9776;</button>
      </div>
    </div>
    <ul class="nav-mobile" id="nav-mobile">${links}<li><a href="cart.html">🛒 Cart (${cartCount})</a></li></ul>
  </nav>`;
}

// ── FOOTER ──────────────────────────────────────────────────────────────────
function renderFooter() {
  return `<footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="${LOGO_SRC}" alt="Logo" style="width:70px;height:70px;object-fit:contain;border-radius:50%;margin-bottom:1rem;border:2px solid rgba(154,184,122,0.3)">
        <div class="footer-logo-text">Sefa <em>Organic</em></div>
        <p>Uganda's trusted herbal pharmaceutical company. Est. 2014. Bringing natural healing closer to the people.</p>
        <div class="footer-social">
          <a href="https://www.facebook.com/share/17jpZeN6Ud/?mibextid=wwXlfr" target="_blank" title="Facebook"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
          <a href="https://www.instagram.com/sefaorganic?igsh=dWibjoYW5zMTk3" target="_blank" title="Instagram"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          <a href="https://www.youtube.com/@sefaorganic?si=MD7xuaDHsOKrhCeY" target="_blank" title="YouTube"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon fill="#0d1a0d" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg></a>
          <a href="https://www.tiktok.com/@sefaorganic?_r=&_t=ZS-94ynlHLJQii" target="_blank" title="TikTok"><svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.84 1.56V6.83a4.85 4.85 0 01-1.07-.14z"/></svg></a>
        </div>
      </div>
      <div class="footer-col"><h4>Navigation</h4><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About Us</a></li><li><a href="products.html">Products</a></li><li><a href="contact.html">Contact</a></li><li><a href="cart.html">My Cart</a></li></ul></div>
      <div class="footer-col"><h4>Contact</h4><ul><li><a href="mailto:sefaorganic@gmail.com">sefaorganic@gmail.com</a></li><li><a href="https://wa.me/256772443187" target="_blank">+256 772 443 187</a></li><li><a href="https://wa.me/256702443187" target="_blank">+256 702 443 187</a></li><li>Kampala, Uganda</li></ul></div>
      <div class="footer-col"><h4>Certifications</h4><div class="cert-grid"><span class="cert">NDA Certified</span><span class="cert">ISO 9001</span><span class="cert">UNBS Approved</span><span class="cert">100% Organic</span></div></div>
    </div>
    <div class="footer-bottom"><span>© 2025 Sefa Organic Uganda. All rights reserved.</span><a href="admin.html" style="color:rgba(200,216,176,0.25);font-size:0.7rem;text-decoration:none;">Admin</a></div>
  </footer>`;
}

// ── MOBILE NAV ────────────────────────────────────────────────────────────────
function toggleMobileNav() {
  document.getElementById("nav-mobile").classList.toggle("open");
}

// ── SCROLL REVEAL ─────────────────────────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");}});
  },{threshold:0.08});
  document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el=>obs.observe(el));
}

// ── CHATBOT ───────────────────────────────────────────────────────────────────
function chatGetResponse(msg) {
  const m = msg.toLowerCase();
  if(/hello|hi|hey|good morning|good evening/.test(m)) return "Hello! Welcome to Sefa Organic 🌿 How can I help you today? Ask about products, prices, delivery or how to order!";
  if(/about|company|founded|2014|who are you/.test(m)) return "Sefa Organic was established in 2014 in Uganda. We specialize in natural herbal medicines made from carefully selected medicinal plants. Our mission is affordable, high-quality organic health products.";
  if(/moringa/.test(m)) return "Moringa Vitality Capsules (60 caps) — UGX 35,000. Boosts energy, immunity and nutrition from pure Ugandan Moringa. Currently in stock! <a href='product.html?id=1'>View product →</a>";
  if(/turmeric|joint/.test(m)) return "Turmeric Joint Relief (90 caps) — UGX 42,000. Anti-inflammatory formula for joint pain and arthritis. In stock! <a href='product.html?id=2'>View product →</a>";
  if(/neem|skin|acne/.test(m)) return "Neem Skin Purifier (120ml) — UGX 28,000. Treats acne, eczema and skin infections. In stock! <a href='product.html?id=3'>View product →</a>";
  if(/bitter leaf|diabetes|blood sugar/.test(m)) return "Bitter Leaf Diabetes Support (60 caps) — UGX 45,000. Supports healthy blood sugar levels. In stock! <a href='product.html?id=4'>View product →</a>";
  if(/ginger|flu|cold|syrup/.test(m)) return "Ginger-Lemon Flu Defense syrup (200ml) — UGX 22,000. Fights colds and flu. Family favorite! <a href='product.html?id=5'>View product →</a>";
  if(/aloe|digest|reflux|ulcer/.test(m)) return "Aloe Vera Digestive Tonic (500ml) — UGX 30,000. Soothes ulcers, reflux and bloating. Pure cold-pressed aloe! <a href='product.html?id=6'>View product →</a>";
  if(/price|cost|how much|ugx/.test(m)) return "Our products range from UGX 22,000 to UGX 45,000. Visit our <a href='products.html'>Products page</a> for all prices. Wholesale discounts available!";
  if(/order|buy|purchase|cart|checkout/.test(m)) return "To order: 1) Browse <a href='products.html'>Products</a> 2) Add to cart 3) Checkout. Or WhatsApp us directly at <a href='https://wa.me/256772443187' target='_blank'>+256 772 443 187</a>!";
  if(/deliver|shipping|location/.test(m)) return "We deliver across Uganda! 🚚 Enter your exact location at checkout. You can also self pick-up from our Kampala store. Delivery fee calculated at checkout.";
  if(/contact|phone|email|whatsapp|call/.test(m)) return "📧 sefaorganic@gmail.com<br>📱 WhatsApp: <a href='https://wa.me/256772443187' target='_blank'>+256 772 443 187</a><br>📱 WhatsApp: <a href='https://wa.me/256702443187' target='_blank'>+256 702 443 187</a>";
  if(/payment|pay|cash|mtn|airtel|card/.test(m)) return "We accept: 💵 Cash (delivery/pickup), 📱 MTN Mobile Money, 📲 Airtel Money, 💳 Credit/Debit Card. Select your method at checkout!";
  if(/product|capsule|tonic|herbal|medicine/.test(m)) return "We have 6 herbal products: Moringa, Turmeric, Neem, Bitter Leaf, Ginger-Lemon, and Aloe Vera Tonic. <a href='products.html'>Browse all products →</a>";
  return "Thank you for your message! For specific enquiries, WhatsApp us at <a href='https://wa.me/256772443187' target='_blank'>+256 772 443 187</a> or email sefaorganic@gmail.com. 🌿";
}

function renderChatbot() {
  return `
  <div id="chatbot-fab" onclick="toggleChat()" title="Chat with us">
    <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
    <span class="chat-unread" id="chat-unread">1</span>
  </div>
  <div id="chatbot-window" style="display:none">
    <div class="chat-header">
      <img src="${LOGO_SRC}" alt="" style="width:36px;height:36px;border-radius:50%;object-fit:cover;">
      <div><div style="font-weight:600;font-size:0.9rem">Sefa Organic</div><div style="font-size:0.72rem;opacity:0.8">🟢 Online now</div></div>
      <button onclick="toggleChat()" style="margin-left:auto;background:none;border:none;color:white;font-size:1.5rem;cursor:pointer;line-height:1;padding:0">×</button>
    </div>
    <div class="chat-messages" id="chat-messages">
      <div class="chat-msg bot"><div class="chat-bubble">Hello! 👋 Welcome to <strong>Sefa Organic</strong>. I'm here to help with products, orders, and more. How can I assist you?</div></div>
    </div>
    <div class="chat-quick">
      <button onclick="sendQuick('What products do you have?')">Products</button>
      <button onclick="sendQuick('How do I order?')">How to Order</button>
      <button onclick="sendQuick('What are your prices?')">Prices</button>
      <button onclick="sendQuick('Do you deliver?')">Delivery</button>
    </div>
    <div class="chat-input-row">
      <input type="text" id="chat-input" placeholder="Type a message..." onkeydown="if(event.key==='Enter')sendChat()">
      <button onclick="sendChat()">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      </button>
    </div>
  </div>`;
}

function toggleChat() {
  const w = document.getElementById("chatbot-window");
  const badge = document.getElementById("chat-unread");
  if(w.style.display==="none"){w.style.display="flex";if(badge)badge.style.display="none";}
  else{w.style.display="none";}
}
function sendChat() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if(!msg) return;
  appendChatMsg(msg,"user");
  input.value="";
  setTimeout(()=>appendChatMsg(chatGetResponse(msg),"bot"),600);
}
function sendQuick(msg) {
  appendChatMsg(msg,"user");
  setTimeout(()=>appendChatMsg(chatGetResponse(msg),"bot"),500);
}
function appendChatMsg(text, role) {
  const container = document.getElementById("chat-messages");
  const div = document.createElement("div");
  div.className="chat-msg "+role;
  div.innerHTML=`<div class="chat-bubble">${text}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}
