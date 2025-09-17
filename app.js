// ---- Data ----
// Có thể thay bằng dữ liệu thật hoặc JSON riêng
const PRODUCTS = [
  {id:'pb-10k', name:'Pin Dự Phòng 10.000mAh', price:200000, cat:'powerbank', img:'null'},
  {id:'pb-20k', name:'Pin Dự Phòng 20.000mAh', price:400000, cat:'powerbank', img:'null'},
  {id:'p-aa', name:'Pin AA', price:69000, cat:'powerbank', img:'null'},
  {id:'mach-dien', name:'Mạch điện', price:199000, cat:'module', img:'null'},
  {id:'mach-arduino', name:'Mạch Arduino', price:89000, cat:'module', img:'null'},
  {id:'mach-raspberry-pi', name:'Mạch Raspberry Pi', price:25000, cat:'module', img:'null'},
];

// ---- Helpers ----
const fmt = n => n.toLocaleString('vi-VN') + '₫';
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

function getCart(){
  try { return JSON.parse(localStorage.getItem('cart_v1')||'{}'); } catch { return {}; }
}
function setCart(cart){
  localStorage.setItem('cart_v1', JSON.stringify(cart));
  updateCartCount();
}
function updateCartCount(){
  const cart = getCart();
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  $$('#cart-count').forEach(el => el.textContent = count);
}

// ---- Render: featured ----
function mountFeatured(){
  const wrap = document.getElementById('featured-grid');
  if(!wrap) return;
  const featured = PRODUCTS.slice(0, 4);
  wrap.innerHTML = featured.map(Card).join('');
  bindCardButtons();
}

// ---- Render: catalog ----
function mountCatalog(){
  const wrap = document.getElementById('catalog-grid');
  if(!wrap) return;
  const q = $('#q'), cat = $('#cat');
  function render(){
    const term = (q.value||'').toLowerCase();
    const cate = cat.value;
    const items = PRODUCTS.filter(p => {
      const okCat = !cate || p.cat === cate;
      const okTerm = !term || p.name.toLowerCase().includes(term);
      return okCat && okTerm;
    });
    wrap.innerHTML = items.map(Card).join('');
    bindCardButtons();
  }
  q && q.addEventListener('input', render);
  cat && cat.addEventListener('change', render);
  render();
}

// ---- Card template ----
function Card(p){
  return `
  <article class="card">
    <div class="thumb"><img src="${p.img}" alt="${p.name}"/></div>
    <div class="body">
      <div class="title">${p.name}</div>
      <div class="row">
        <div class="muted">${p.cat}</div>
        <div class="price">${fmt(p.price)}</div>
      </div>
      <button class="btn add" data-id="${p.id}">Thêm vào giỏ</button>
    </div>
  </article>`;
}
function bindCardButtons(){
  $$('.add').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const cart = getCart();
      cart[id] = (cart[id]||0) + 1;
      setCart(cart);
      btn.textContent = 'Đã thêm';
      setTimeout(()=> btn.textContent='Thêm vào giỏ', 900);
    });
  });
}

// ---- Render: cart ----
function mountCart(){
  const tbody = document.getElementById('cart-rows');
  if(!tbody) return;
  const empty = document.getElementById('cart-empty');
  const table = document.getElementById('cart-table-wrap');
  const totalEl = document.getElementById('cart-total');
  const btnClear = document.getElementById('clear-cart');
  const btnCheckout = document.getElementById('checkout');

  function row(p, qty){
    const sub = p.price * qty;
    return `
    <div class="row" data-id="${p.id}">
      <div class="prod">
        <div class="title">${p.name}</div>
        <div class="muted">${fmt(p.price)}</div>
      </div>
      <div class="right">${fmt(p.price)}</div>
      <div class="center">
        <div class="qty">
          <button class="minus" aria-label="Giảm">−</button>
          <input class="q" type="number" min="1" value="${qty}"/>
          <button class="plus" aria-label="Tăng">+</button>
        </div>
      </div>
      <div class="right sub">${fmt(sub)}</div>
      <div class="right"><button class="btn-ghost remove">✕</button></div>
    </div>`;
  }

  function sync(){
    const cart = getCart();
    const ids = Object.keys(cart);
    if(ids.length === 0){
      empty.classList.remove('hidden');
      table.classList.add('hidden');
      totalEl.textContent = '0₫';
      return;
    }
    empty.classList.add('hidden');
    table.classList.remove('hidden');
    let total = 0;
    tbody.innerHTML = ids.map(id => {
      const p = PRODUCTS.find(x => x.id === id);
      const qty = cart[id];
      total += p.price * qty;
      return row(p, qty);
    }).join('');
    totalEl.textContent = fmt(total);
    bindRows();
  }

  function bindRows(){
    $$('#cart-rows .row').forEach(r => {
      const id = r.dataset.id;
      const q = r.querySelector('.q');
      r.querySelector('.minus').addEventListener('click', () => { q.stepDown(); q.dispatchEvent(new Event('change')); });
      r.querySelector('.plus').addEventListener('click', () => { q.stepUp(); q.dispatchEvent(new Event('change')); });
      r.querySelector('.remove').addEventListener('click', () => {
        const cart = getCart();
        delete cart[id];
        setCart(cart);
        sync();
      });
      q.addEventListener('change', () => {
        let v = Math.max(1, parseInt(q.value || '1', 10));
        const cart = getCart();
        cart[id] = v;
        setCart(cart);
        sync();
      });
    });
  }

  btnClear.addEventListener('click', () => { setCart({}); sync(); });
  btnCheckout.addEventListener('click', () => {
    alert('Đặt hàng tĩnh demo: Chụp ảnh giỏ hàng và liên hệ Zalo/DM để xác nhận.');
  });
  sync();
}

// ---- Boot ----
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  mountFeatured();
  mountCatalog();
  mountCart();
});
