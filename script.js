
// ---- PRODUCTS DATA (editable via admin) ----
let products = JSON.parse(localStorage.getItem('bs_products') || 'null') || [
  {id:1,name:'NewJeans-2nd EP Get Up Bunny Beach Bag ver',category:'albums',price:427,inStock:true,isNew:true,emoji:'💿',img:'https://shop.newjeans-official.us/cdn/shop/files/M02_BunnyBeachBagver._Thumbnail.jpg?v=1688058148&width=1920'},
  {id:2,name:'NewJeans - 2nd EP Album Get Up The POWERPUFF GIRLS X NJ Box ver.',category:'albums',price:420,inStock:true,isNew:true,emoji:'🖤',img:'https://www.kpopusaonline.com/wp-content/uploads/2023/06/newjeans-powerpuff-1.png'},
  {id:3,name:'SEVENTEEN -10th Mini Album FML CARAT Ver.',category:'albums',price:280,inStock:true,isNew:false,emoji:'💿',img:'https://kuroneko.lt/wp-content/uploads/2024/02/SEVENTEEN-10th-Mini-Album-FML-CARAT-Ver.-Random-Ver.-1.jpg'},
  {id:4,name:'Jin (BTS) Happy Random',category:'albums',price:360,inStock:true,isNew:false,emoji:'✨',img:'https://files.bts-official.jp/files/images/[Jin]Happy_all_5e0cbde32152e7120d527a73316d1454.jpg'},
  {id:5,name:'JHOPE Charm of HOPE (Sweet Dreams ver.)',category:'albums',price:480,inStock:true,isNew:true,emoji:'🃏',img:'https://image.msscdn.net/thumbnails/images/goods_img/20250619/5196806/5196806_17514208603166_big.jpg?w=1200'},
  {id:6,name:'JIN (BTS) – ECHO – 2nd Mini Album',category:'albums',price:360,inStock:true,isNew:false,emoji:'🃏',img:'https://media.ktown4u.com/products/resize/thumbnail/2025/04/24/vnrFrd.png'},
  {id:7,name:'RM (BTS) – Right Place, Wrong Person – 2nd Solo Album',category:'albums',price:360,inStock:true,isNew:false,emoji:'🌟',img:'https://hallyustore.ec/wp-content/uploads/2024/10/RM-RIGHT-PLACE-WRONG-PERSON.png'},
  {id:8,name:'V (BTS) – Special 8 Photo-Folio – Me, Myself, and V ‘Veautiful days’',category:'albums',price:550,inStock:true,isNew:false,emoji:'💜',img:'https://img.joomcdn.net/6a2f72620f7f9cde93c465f4fe122d009306ffde_original.jpeg'},
  {id:9,name:'RM (BTS) – Indigo – 1st Solo Album – Book Edition',category:'albums',price:360,inStock:true,isNew:false,emoji:'👜',img:'https://hallyusuperstore.com/cdn/shop/products/d9602da423b5ad276b3eb31569d748bd.png?v=1734469846&width=1080'},
  {id:10,name:'Jin (BTS) – The Astronaut – 1st Single Album – Version 02',category:'albums',price:360,inStock:true,isNew:false,emoji:'🐰',img:'https://store.udiscovermusic.com/cdn/shop/products/image_of_4187436.jpg?v=1695122342&width=3000'},
  {id:11,name:'J-Hope (BTS) – Jack In The Box – Weverse Album ',category:'albums',price:199,inStock:true,isNew:false,emoji:'🖼️',img:'https://kuroneko.lt/wp-content/uploads/2023/03/0055_j-hope-Jack-In-The-Box-Weverse-Albums.jpg'},
  {id:12,name:'Binder light blue',category:'other',price:199,inStock:true,isNew:true,emoji:'🎀',img:'https://copenhagenkpop.com/cdn/shop/files/soft_binder_blue_b3031fb3-09ea-4f32-a019-3e2f4cc5f012.jpg?crop=center&height=480&v=1771189271&width=480'},
  {id:13,name:'JUNGWOON ENHYPEN THE SIN : VANISH Studio Choom POB',category:'Photocard',price:60,inStock:true,isNew:true,emoji:'🎀',img:'https://www.kpopbazaar.com.au/cdn/shop/files/DSC_6857_1024x1024@2x.jpg?v=1773626930'},
  {id:14,name:'JAKE ENHYPEN THE SIN : VANISH Studio Choom POB',category:'Photocard',price:60,inStock:true,isNew:true,emoji:'🎀',img:'https://www.kpopbazaar.com.au/cdn/shop/files/DSC_6853_1024x1024@2x.jpg?v=1773626930'}
];

// ---- CART ----
let cart = JSON.parse(localStorage.getItem('bs_cart') || '[]');

function saveCart(){localStorage.setItem('bs_cart',JSON.stringify(cart))}
function saveProducts(){localStorage.setItem('bs_products',JSON.stringify(products))}

// ---- LANGUAGE ----
let lang = localStorage.getItem('bs_lang') || 'fr';
const t = {
  fr:{
    cartTitle:'🛒 Mon Panier',cartEmpty:'Votre panier est vide',
    cartHint:'Ajoutez des produits pour commencer !',total:'Total',
    checkout:'Commander maintenant →',add:'Ajouter au panier',added:'Ajouté ✓',
    oos:'Rupture de stock',new:'Nouveau',
    orderTitle:'Passer une commande',orderDesc:'Remplissez le formulaire et nous vous contacterons',
    orderEyebrow:'COMMANDE',labelName:'Prénom & Nom *',labelPhone:'Téléphone *',
    labelCity:'Ville *',labelAddress:'Adresse complète *',labelNotes:'Notes (optionnel)',
    submitBtn:'✨ Confirmer ma commande',successMsg:'🎉 Commande confirmée ! Nous vous contacterons sous 24h pour finaliser la livraison.',
    summaryTitle:'📦 Votre panier',summaryEmpty:'Votre panier est vide',totalLabel:'Total',
    heroBadge:'✨ K-POP STORE • MAROC',heroTitle:'Votre univers <span>K-Pop</span> préféré',
    heroDesc:'Albums, photocards, merch et plus encore — livraison partout au Maroc 🇲🇦',
    heroBtn1:'Voir les Albums',heroBtn2:'Commander maintenant',
    newLabel:'NOUVEAUTÉS',allProductsTitle:'Tous nos produits',allProductsDesc:'Découvrez notre collection K-Pop 🌸',
    catAll:'Tout voir',catAlbums:'Albums',catPhotocards:'Photocards',catMerch:'Merch',catOther:'Autre',
    faqTitle:'Questions fréquentes',faqDesc:'Tout ce que vous devez savoir',
    footerDesc:'Votre boutique K-Pop au Maroc. Albums, photocards, merch — livraison rapide partout au Maroc 🇲🇦',
    footerShop:'BOUTIQUE',footerInfo:'INFOS',footerOrder:'Commander',footerAdmin:'Administration',
    footerCopy:'© 2025 Bubble Shop — K-Pop Store Maroc 🐻 Made with 💕',
    toastAdded:'Ajouté au panier !',toastRemoved:'Retiré du panier',
    albumsPageTitle:'Albums K-Pop',albumsPageDesc:'Toutes les dernières sorties de vos groupes favoris',
    photocardsPageTitle:'Photocards',photocardsPageDesc:'Photocards officielles et inclusions spéciales',
    merchPageTitle:'Merchandise',merchPageDesc:'Vêtements, accessoires et objets de collection',
    otherPageTitle:'Autres produits',otherPageDesc:'Posters, lightsticks et plus encore',
    faqs:[
      {q:'Comment puis-je passer une commande ?',a:"Ajoutez les produits à votre panier, puis remplissez le formulaire de commande avec vos informations de livraison. Nous vous contacterons sous 24h pour confirmer."},
      {q:'Quels sont les délais de livraison ?',a:"Nous livrons partout au Maroc en 3 à 5 jours ouvrables après confirmation de votre commande."},
      {q:'Quels sont les modes de paiement ?',a:"Nous acceptons le paiement à la livraison (cash on delivery) dans toutes les villes du Maroc."},
      {q:'Les produits sont-ils authentiques ?',a:"Oui ! Tous nos produits sont 100% officiels et authentiques, importés directement de Corée."},
      {q:'Puis-je retourner un produit ?',a:"Oui, vous pouvez retourner un produit sous 7 jours si celui-ci est défectueux ou endommagé. Contactez-nous via WhatsApp."},
      {q:'Comment suivre ma commande ?',a:"Une fois votre commande expédiée, vous recevrez un numéro de suivi par WhatsApp ou SMS."},
    ]
  },
  en:{
    cartTitle:'🛒 My Cart',cartEmpty:'Your cart is empty',
    cartHint:'Add products to get started!',total:'Total',
    checkout:'Order now →',add:'Add to cart',added:'Added ✓',
    oos:'Out of stock',new:'New',
    orderTitle:'Place an order',orderDesc:'Fill out the form and we will contact you',
    orderEyebrow:'ORDER',labelName:'First & Last Name *',labelPhone:'Phone number *',
    labelCity:'City *',labelAddress:'Full address *',labelNotes:'Notes (optional)',
    submitBtn:'✨ Confirm my order',successMsg:'🎉 Order confirmed! We will contact you within 24h to finalize delivery.',
    summaryTitle:'📦 Your cart',summaryEmpty:'Your cart is empty',totalLabel:'Total',
    heroBadge:'✨ K-POP STORE • MOROCCO',heroTitle:'Your favorite <span>K-Pop</span> universe',
    heroDesc:'Albums, photocards, merch and more — delivery across Morocco 🇲🇦',
    heroBtn1:'Browse Albums',heroBtn2:'Order now',
    newLabel:'NEW ARRIVALS',allProductsTitle:'All products',allProductsDesc:'Discover our K-Pop collection 🌸',
    catAll:'All',catAlbums:'Albums',catPhotocards:'Photocards',catMerch:'Merch',catOther:'Other',
    faqTitle:'Frequently asked questions',faqDesc:'Everything you need to know',
    footerDesc:'Your K-Pop store in Morocco. Albums, photocards, merch — fast delivery across Morocco 🇲🇦',
    footerShop:'SHOP',footerInfo:'INFO',footerOrder:'Order',footerAdmin:'Admin panel',
    footerCopy:'© 2025 Bubble Shop — K-Pop Store Morocco 🐻 Made with 💕',
    toastAdded:'Added to cart!',toastRemoved:'Removed from cart',
    albumsPageTitle:'K-Pop Albums',albumsPageDesc:'All the latest releases from your favorite groups',
    photocardsPageTitle:'Photocards',photocardsPageDesc:'Official photocards and special inclusions',
    merchPageTitle:'Merchandise',merchPageDesc:'Clothing, accessories and collectibles',
    otherPageTitle:'Other products',otherPageDesc:'Posters, lightsticks and more',
    faqs:[
      {q:'How do I place an order?',a:"send us a dm on instagram with your delivery information. We'll contact you within 24h to confirm."},
      {q:'What are the delivery times?',a:"We deliver anywhere in Morocco within 3 to 5 business days after your order is confirmed."},
      {q:'What payment methods do you accept?',a:"We accept online payement or cash on delivery in all cities in Morocco."},
      {q:'Are the products authentic?',a:"Yes! All our products are 100% official and authentic, imported directly from Korea.if not it will be mentionned in the product description."},
      {q:'how much is the delivery',a:"the delivery fees is 35 MAD "},
      {q:'How do I track my order?',a:"Once your order is shipped, you will receive a tracking number via instagram dm ."},
    ]
  }
};

function tr(key){return t[lang][key]||key}

function toggleLang(){
  lang = lang==='fr'?'en':'fr';
  localStorage.setItem('bs_lang',lang);
  applyLang();
}

function applyLang(){
  const T=t[lang];
  const ids={
    cartTitle:'cartTitle',totalLabel:'totalLabel',totalLabelForm:'totalLabelForm',
    checkoutBtn:'checkoutBtn',orderTitle:'orderTitle',orderDesc:'orderDesc',
    orderEyebrow:'orderEyebrow',labelName:'labelName',labelPhone:'labelPhone',
    labelCity:'labelCity',labelAddress:'labelAddress',labelNotes:'labelNotes',
    submitBtn:'submitBtn',successMsg:'successMsg',summaryTitle:'summaryTitle',
    summaryEmpty:'summaryEmpty',heroBadge:'heroBadge',
    heroDesc:'heroDesc',heroBtn1:'heroBtn1',heroBtn2:'heroBtn2',
    newLabel:'newLabel',allProductsTitle:'allProductsTitle',allProductsDesc:'allProductsDesc',
    catAll:'catAll',catAlbums:'catAlbums',catPhotocards:'catPhotocards',
    catMerch:'catMerch',catOther:'catOther',faqTitle:'faqTitle',faqDesc:'faqDesc',
    footerDesc:'footerDesc',footerShop:'footerShop',footerInfo:'footerInfo',
    footerOrder:'footerOrder',footerAdmin:'footerAdmin',footerCopy:'footerCopy',
    albumsPageTitle:'albumsPageTitle',albumsPageDesc:'albumsPageDesc',
    photocardsPageTitle:'photocardsPageTitle',photocardsPageDesc:'photocardsPageDesc',
    merchPageTitle:'merchPageTitle',merchPageDesc:'merchPageDesc',
    otherPageTitle:'otherPageTitle',otherPageDesc:'otherPageDesc',
    cartEmptyMsg:'cartEmptyMsg',cartEmptyHint:'cartEmptyHint',
  };
  Object.entries(ids).forEach(([key,id])=>{
    const el=document.getElementById(id);
    if(el&&T[key]!==undefined) el.innerHTML=T[key];
  });
  // checkout btn text
  const cb=document.getElementById('checkoutBtn');
  if(cb) cb.textContent=T.checkout;
  // heroTitle (has span)
  const ht=document.getElementById('heroTitle');
  if(ht) ht.innerHTML=T.heroTitle;
  renderFAQ();
  renderCart();
  renderAllGrids();
}

// ---- RENDER PRODUCTS ----
function productCard(p){
  const T=t[lang];
  return `<div class="product-card">
    <div class="product-img">
      ${p.img?`<img src="${p.img}" alt="${p.name}">`:`<span class="placeholder">${p.emoji||'🎵'}</span>`}
      ${!p.inStock?`<span class="badge-oos">${T.oos}</span>`:''}
      ${p.isNew&&p.inStock?`<span class="badge-new">${T.new}</span>`:''}
    </div>
    <div class="product-info">
      <div class="product-category">${getCatLabel(p.category)}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-price"><span class="currency"></span>${p.price} MAD</div>
      <button class="add-to-cart" onclick="addToCart(${p.id},this)" ${!p.inStock?'disabled':''}>
        ${!p.inStock?T.oos:`🛒 ${T.add}`}
      </button>
    </div>
  </div>`;
}

function getCatLabel(cat){
  const map={albums:'💿 Album',photocards:'🃏 Photocard',merch:'👕 Merch',other:'🌸 Autre'};
  return map[cat]||cat;
}

function renderGrid(containerId,filter){
  const el=document.getElementById(containerId);
  if(!el) return;
  const filtered=filter==='all'?products:products.filter(p=>p.category===filter);
  el.innerHTML=filtered.length?filtered.map(productCard).join(''):`<p style="color:var(--text-muted);padding:2rem;grid-column:1/-1;text-align:center">Aucun produit dans cette catégorie</p>`;
}

function renderAllGrids(){
  renderGrid('mainProductGrid','all');
  renderGrid('albumsGrid','albums');
  renderGrid('photocardsGrid','photocards');
  renderGrid('merchGrid','merch');
  renderGrid('otherGrid','other');
  updateOrderSummary();
}

function filterProducts(cat,btn){
  document.querySelectorAll('#mainCatBar .cat-pill').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderGrid('mainProductGrid',cat);
}

// ---- CART ----
function addToCart(id,btn){
  const p=products.find(x=>x.id===id);
  if(!p||!p.inStock) return;
  const existing=cart.find(x=>x.id===id);
  if(existing) existing.qty++;
  else cart.push({...p,qty:1});
  saveCart();
  updateCartCount();
  renderCart();
  updateOrderSummary();
  // animate button
  if(btn){
    const orig=btn.innerHTML;
    btn.innerHTML='✓ '+tr('added');
    btn.classList.add('added');
    setTimeout(()=>{btn.innerHTML=orig;btn.classList.remove('added')},1500);
  }
  showToast(tr('toastAdded'));
  spawnHearts(btn);
}

function removeFromCart(id){
  cart=cart.filter(x=>x.id!==id);
  saveCart();
  updateCartCount();
  renderCart();
  updateOrderSummary();
  showToast(tr('toastRemoved'));
}

function changeQty(id,delta){
  const item=cart.find(x=>x.id===id);
  if(!item) return;
  item.qty+=delta;
  if(item.qty<=0){removeFromCart(id);return;}
  saveCart();
  renderCart();
  updateOrderSummary();
}

function updateCartCount(){
  const total=cart.reduce((a,b)=>a+b.qty,0);
  document.getElementById('cartCount').textContent=total;
}

function getCartTotal(){
  return cart.reduce((a,b)=>a+b.price*b.qty,0);
}

function renderCart(){
  const el=document.getElementById('cartItems');
  if(!cart.length){
    el.innerHTML=`<div class="cart-empty"><div class="empty-icon">🛒</div><p id="cartEmptyMsg">${tr('cartEmpty')}</p><p style="font-size:0.85rem;margin-top:8px;color:#bbb" id="cartEmptyHint">${tr('cartHint')}</p></div>`;
  } else {
    el.innerHTML=cart.map(item=>`
      <div class="cart-item">
        <div class="cart-item-img">${item.img?`<img src="${item.img}" alt="${item.name}">`:`<span>${item.emoji||'🎵'}</span>`}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${item.price*item.qty} MAD</div>
          <div class="cart-qty">
            <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
          </div>
        </div>
        <button class="remove-item" onclick="removeFromCart(${item.id})" aria-label="Supprimer">✕</button>
      </div>
    `).join('');
  }
  document.getElementById('cartTotal').textContent=getCartTotal()+' MAD';
}

function toggleCart(){
  const sidebar=document.getElementById('cartSidebar');
  const overlay=document.getElementById('cartOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

function updateOrderSummary(){
  const el=document.getElementById('summaryItems');
  const totalEl=document.getElementById('summaryTotal');
  const totalAmt=document.getElementById('summaryTotalAmount');
  if(!cart.length){
    el.innerHTML=`<p style="color:var(--text-muted);font-size:0.88rem">${tr('summaryEmpty')}</p>`;
    if(totalEl) totalEl.style.display='none';
  } else {
    el.innerHTML=cart.map(i=>`<div class="summary-item"><span>${i.name} x${i.qty}</span><span>${i.price*i.qty} MAD</span></div>`).join('');
    if(totalEl) totalEl.style.display='flex';
    if(totalAmt) totalAmt.textContent=getCartTotal()+' MAD';
  }
}
function goToCheckout(){

    if(cart.length === 0){
        alert("Votre panier est vide !");
        return;
    }

    let message = "Bonjour Moroccan Kpop Shop ! 🌸\n\n";
    message += "Je souhaite commander :\n\n";

    cart.forEach(item=>{
        message += "• " + item.name + " x" + item.qty + "\n";
    });

    message += "\nTotal : " + getCartTotal() + " MAD";

    navigator.clipboard.writeText(message);

    alert(
`✅ La liste de votre commande a été copiée !

1. Instagram va s'ouvrir.
2. Envoyez-nous un message.
3. Faites Coller (Ctrl + V).

@moroccan_kpop_shop`
    );

    window.open(
        "https://www.instagram.com/moroccan_kpop_shop",
        "_blank"
    );

}

// ---- ORDER FORM ----
function submitOrder(e){
  e.preventDefault();
  const name=document.getElementById('fname').value;
  const phone=document.getElementById('fphone').value;
  const city=document.getElementById('fcity').value;
  const address=document.getElementById('faddress').value;
  const notes=document.getElementById('fnotes').value;
  const items=cart.map(i=>`${i.name} x${i.qty} = ${i.price*i.qty} MAD`).join('\n');
  const total=getCartTotal();
  // In production: send to backend / WhatsApp / email
  console.log('Order:',{name,phone,city,address,notes,items,total});
  document.getElementById('orderForm').style.display='none';
  document.getElementById('successMsg').style.display='block';
  cart=[];saveCart();updateCartCount();renderCart();updateOrderSummary();
  setTimeout(()=>{
    document.getElementById('orderForm').style.display='block';
    document.getElementById('successMsg').style.display='none';
    document.getElementById('orderForm').reset();
  },6000);
}

// ---- FAQ ----
function renderFAQ(){
  const faqs=t[lang].faqs;
  const el=document.getElementById('faqList');
  if(!el) return;
  el.innerHTML=faqs.map((f,i)=>`
    <div class="faq-item" id="faq-${i}">
      <button class="faq-q" onclick="toggleFAQ(${i})">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-a">${f.a}</div>
    </div>
  `).join('');
}

function toggleFAQ(i){
  const item=document.getElementById('faq-'+i);
  const wasOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el=>el.classList.remove('open'));
  if(!wasOpen) item.classList.add('open');
}

// ---- PAGES ----
function showPage(page){
  document.querySelectorAll('.page-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  const navEl=document.getElementById('nav-'+page);
  if(navEl) navEl.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  document.getElementById('navLinks').classList.remove('open');
}

function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('open');
}

// ---- TOAST ----
function showToast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),2200);
}

// ---- FLOATING HEARTS ----
function spawnHearts(btn){
  const container=document.getElementById('floatingHearts');
  const emojis=['💕','🌸','✨','💖','🩷','⭐'];
  const rect=btn?btn.getBoundingClientRect():{top:window.innerHeight/2,left:window.innerWidth/2};
  for(let i=0;i<5;i++){
    setTimeout(()=>{
      const h=document.createElement('div');
      h.className='heart-particle';
      h.textContent=emojis[Math.floor(Math.random()*emojis.length)];
      h.style.left=(rect.left+rect.width/2+Math.random()*60-30)+'px';
      h.style.top=(rect.top+window.scrollY)+'px';
      container.appendChild(h);
      setTimeout(()=>h.remove(),2000);
    },i*100);
  }
}

// ---- CONFETTI ----
function initConfetti(){
  const canvas=document.getElementById('confettiCanvas');
  if(!canvas) return;
  const ctx=canvas.getContext('2d');
  canvas.width=canvas.offsetWidth;
  canvas.height=canvas.offsetHeight;
  const pieces=[];
  const emojis=['🌸','💕','⭐','🩷','✨','💗'];
  for(let i=0;i<22;i++){
    pieces.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height-canvas.height,
      speed:0.4+Math.random()*0.6,
      emoji:emojis[Math.floor(Math.random()*emojis.length)],
      size:14+Math.random()*10,
      drift:(Math.random()-0.5)*0.4,
      opacity:0.4+Math.random()*0.5
    });
  }
  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p=>{
      p.y+=p.speed;
      p.x+=p.drift;
      if(p.y>canvas.height+20){p.y=-20;p.x=Math.random()*canvas.width;}
      ctx.globalAlpha=p.opacity;
      ctx.font=p.size+'px serif';
      ctx.fillText(p.emoji,p.x,p.y);
    });
    ctx.globalAlpha=1;
    requestAnimationFrame(animate);
  }
  animate();
  window.addEventListener('resize',()=>{canvas.width=canvas.offsetWidth;canvas.height=canvas.offsetHeight;});
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded',()=>{
  applyLang();
  updateCartCount();
  initConfetti();
});
