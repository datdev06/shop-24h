/* ===== DỮ LIỆU CHUẨN CHO PIN & LINH KIỆN =====
category: 'powerbank' | 'cell' | 'aa' | 'dc-dc' | 'bms' | 'arduino' | 'esp32' | 'parts'
capacity: mAh (nếu là pin hoặc cell); sản phẩm khác để null
specs: mảng thông số ngắn (V, A, W, loại cell, buck/boost…)
tags: từ khóa tìm kiếm
*/
const PRODUCTS = [
  // --- Pin sạc dự phòng ---
  { id:'pb-10k-mini', category:'powerbank', name:'Pin sạc 10.000 mAh Mini PD20W', price:249000, compareAt:299000,
    capacity:10000, specs:['PD20W','QC3.0','USB-C/A'], img:'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=1200&auto=format&fit=crop',
    desc:'Nhỏ gọn, 2 cổng, phù hợp mang theo hằng ngày.', tags:['powerbank','10k','pd'] },
  { id:'pb-20k-pro', category:'powerbank', name:'Pin sạc 20.000 mAh Pro PD30W', price:389000, compareAt:459000,
    capacity:20000, specs:['PD30W','QC3.0','3 cổng'], img:'https://images.unsplash.com/photo-1609592425757-2f6c1f9e7b8f?q=80&w=1200&auto=format&fit=crop',
    desc:'Dung lượng lớn, sạc nhanh, ổn định.', tags:['powerbank','20k','pd'] },

  // --- Cell 18650 / 21700 ---
  { id:'cell-18650-2600', category:'cell', name:'Cell 18650 2600 mAh 3.7V', price:39000,
    capacity:2600, specs:['Li-ion','3.7V','18650'], img:'https://images.unsplash.com/photo-1509399038225-4e2a9d543b45?q=80&w=1200&auto=format&fit=crop',
    desc:'Phù hợp đèn pin, DIY dự án 1S.', tags:['18650','li-ion','cell'] },
  { id:'cell-21700-4800', category:'cell', name:'Cell 21700 4800 mAh 3.7V', price:69000,
    capacity:4800, specs:['Li-ion','3.7V','21700'], img:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    desc:'Dòng xả cao, thích hợp pack 2S/3S.', tags:['21700','li-ion'] },

  // --- Pin AA/AAA ---
  { id:'aa-alkaline', category:'aa', name:'Pin AA Alkaline (vỉ 4)', price:45000,
    capacity:null, specs:['1.5V','Alkaline','AA'], img:'https://images.unsplash.com/photo-1616789874117-58e1f11516f1?q=80&w=1200&auto=format&fit=crop',
    desc:'Hiệu năng ổn định, giá tốt.', tags:['aa','alkaline','1.5v'] },
  { id:'aaa-nimh', category:'aa', name:'Pin AAA Ni-MH sạc (2 viên)', price:65000,
    capacity:null, specs:['1.2V','Ni-MH','AAA'], img:'https://images.unsplash.com/photo-1616789874090-a63f0bbf2b74?q=80&w=1200&auto=format&fit=crop',
    desc:'Thân thiện, sạc lại nhiều lần.', tags:['aaa','nimh','rechargeable'] },

  // --- Module DC-DC ---
  { id:'buck-lm2596', category:'dc-dc', name:'Module Buck LM2596 (DC-DC hạ áp)', price:29000,
    capacity:null, specs:['Buck','4-40V in','1.5-35V out','2A'], img:'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop',
    desc:'Hạ áp ổn định cho dự án 12V→5V.', tags:['buck','lm2596','dc-dc','5v'] },
  { id:'boost-mt3608', category:'dc-dc', name:'Module Boost MT3608 (DC-DC tăng áp)', price:25000,
    capacity:null, specs:['Boost','2-24V in','5-28V out','1A'], img:'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    desc:'Tăng áp cho thiết bị 9V/12V.', tags:['boost','mt3608','dc-dc','9v','12v'] },

  // --- BMS & Sạc ---
  { id:'bms-1s-3a', category:'bms', name:'BMS 1S 3A (bảo vệ 1 cell)', price:19000,
    capacity:null, specs:['1S','3A','OVP/UVP'], img:'https://images.unsplash.com/photo-1555617117-08cd5f2b45f8?q=80&w=1200&auto=format&fit=crop',
    desc:'Bảo vệ sạc/xả cho gói 1S.', tags:['bms','1s','li-ion'] },
  { id:'bms-3s-20a', category:'bms', name:'BMS 3S 20A (bảo vệ 3 cell)', price:49000,
    capacity:null, specs:['3S','20A','Balancing'], img:'https://images.unsplash.com/photo-1605648916319-cf082f7526e8?q=80&w=1200&auto=format&fit=crop',
    desc:'Cho pack 11.1/12.6V, dòng cao.', tags:['bms','3s','20a'] },

  // --- Arduino / ESP32 ---
  { id:'arduino-nano', category:'arduino', name:'Arduino Nano (ATmega328P)', price:109000,
    capacity:null, specs:['5V','Mini-USB','GPIO'], img:'https://images.unsplash.com/photo-1594041680534-e8c8c9361a8a?q=80&w=1200&auto=format&fit=crop',
    desc:'Phù hợp học lập trình và DIY.', tags:['arduino','nano','atmega328'] },
  { id:'esp32-devkit', category:'esp32', name:'ESP32 DevKit Wi-Fi + BLE', price:129000,
    capacity:null, specs:['Wi-Fi','BLE','3.3V'], img:'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    desc:'IoT đa năng, nhiều GPIO.', tags:['esp32','wifi','bluetooth'] },

  // --- Linh kiện rời / parts ---
  { id:'res-kit-1-4w', category:'parts', name:'Kit điện trở 1/4W (600pcs)', price:79000,
    capacity:null, specs:['1%','E24','1/4W'], img:'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    desc:'Đủ giá trị phổ biến cho dự án.', tags:['resistor','kit'] },
  { id:'jack-dc-5521', category:'parts', name:'Jack nguồn DC 5.5×2.1mm (đực)', price:9000,
    capacity:null, specs:['5.5×2.1mm','DC male'], img:'https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?q=80&w=1200&auto=format&fit=crop',
    desc:'Phổ biến cho adapter 12V.', tags:['jack','dc','5521'] },
];

/* ===== Helpers ===== */
const fmtVND = n => n.toLocaleString('vi-VN') + '₫';
const $ = sel => document.querySelector(sel);

function getCart(){ try{ return JSON.parse(localStorage.getItem('cart')||'[]'); }catch{ return []; } }
function setCart(items){ localStorage.setItem('cart', JSON.stringify(items)); updateNavCartQty(); }
function updateNavCartQty(){ const qty = getCart().reduce((s,i)=>s+i.qty,0); const el = document.getElementById('navCartQty'); if(el) el.textContent = qty; }

/* ===== Nhãn danh mục ===== */
const CAT_LABELS = {
  'powerbank':'Pin sạc dự phòng',
  'cell':'Cell 18650/21700',
  'aa':'Pin AA/AAA',
  'dc-dc':'Module DC-DC',
  'bms':'BMS & Sạc',
  'arduino':'Arduino',
  'esp32':'ESP32',
  'parts':'Linh kiện rời'
};

/* ===== Render badges ===== */
function renderBadges(p){
  const cap = p.capacity ? `<span class="badge">${p.capacity.toLocaleString()} mAh</span>` : '';
  const spec = (p.specs||[]).map(s=>`<span class="badge">${s}</span>`).join('');
  const cat = `<span class="badge">${CAT_LABELS[p.category]||'Danh mục'}</span>`;
  return [cat, cap, spec].filter(Boolean).join('');
}

/* ===== Card sản phẩm ===== */
function renderProductCard(p){
  return `
  <div class="card prod">
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p class="muted">${p.desc}</p>
    <div class="badges">${renderBadges(p)}</div>
    <div class="price">
      <strong>${fmtVND(p.price)}</strong>
      ${p.compareAt ? `<del>${fmtVND(p.compareAt)}</del>`:''}
    </div>
    <button class="btn primary" onclick="addToCart('${p.id}')">Thêm vào giỏ</button>
  </div>`;
}

/* ===== Catalog page ===== */
function initCatalog(){
  updateNavCartQty();
  const grid = document.getElementById('grid');
  const search = document.getElementById('search');
  const sort = document.getElementById('sort');
  const catSel = document.getElementById('cat');

  // tạo danh mục từ dữ liệu
  const cats = [...new Set(PRODUCTS.map(p=>p.category))];
  catSel.innerHTML = `<option value="all">Tất cả danh mục</option>` + cats.map(c=>`<option value="${c}">${CAT_LABELS[c]||c}</option>`).join('');

  function apply(){
    const q = (search.value||'').toLowerCase().trim();
    const c = catSel.value;

    let list = PRODUCTS.filter(p =>
      (c==='all' || p.category===c) &&
      (
        p.name.toLowerCase().includes(q) ||
        (p.desc||'').toLowerCase().includes(q) ||
        (p.tags||[]).some(t=>t.toLowerCase().includes(q)) ||
        (p.capacity && String(p.capacity).includes(q)) ||
        (p.specs||[]).some(s=>s.toLowerCase().includes(q))
      )
    );

    switch(sort.value){
      case 'price-asc': list.sort((a,b)=>a.price-b.price); break;
      case 'price-desc': list.sort((a,b)=>b.price-a.price); break;
      case 'capacity-desc': list.sort((a,b)=>(b.capacity||0)-(a.capacity||0)); break;
      default: /* popular */ break;
    }

    grid.innerHTML = list.map(renderProductCard).join('') || `<p class="muted">Không tìm thấy sản phẩm phù hợp.</p>`;
  }

  search.addEventListener('input', apply);
  sort.addEventListener('change', apply);
  catSel.addEventListener('change', apply);
  apply();
}

/* ===== Cart ===== */
function addToCart(id){
  const cart = getCart();
  const idx = cart.findIndex(i=>i.id===id);
  if(idx>=0) cart[idx].qty += 1; else cart.push({id, qty:1});
  setCart(cart);
  alert('Đã thêm vào giỏ!');
}

function renderCart(){
  updateNavCartQty();
  const view = document.getElementById('cartView');
  if(!view) return;
  const cart = getCart().map(i=>({ ...i, ...PRODUCTS.find(p=>p.id===i.id) }));

  if(cart.length===0){
    view.innerHTML = `<p class="muted">Giỏ hàng trống. <a href="catalog.html">Tiếp tục mua sắm</a>.</p>`;
    const subEl=document.getElementById('subTotal'), grandEl=document.getElementById('grandTotal');
    if(subEl) subEl.textContent='0₫'; if(grandEl) grandEl.textContent='0₫';
    const btn=document.getElementById('btnCheckout'); if(btn) btn.onclick=()=>alert('Giỏ hàng trống.');
    return;
  }

  const rows = cart.map(item=>`
    <div class="row">
      <div style="display:flex;gap:10px;align-items:center;max-width:70%">
        <img src="${item.img}" alt="${item.name}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;border:1px solid var(--bd)">
        <div>
          <strong>${item.name}</strong>
          <div class="muted">${(CAT_LABELS[item.category]||'Danh mục')}${item.capacity?
