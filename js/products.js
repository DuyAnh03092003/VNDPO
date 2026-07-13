window.VNDS_PRODUCTS=(()=>{
  function renderHome(){const grid=document.getElementById('productGrid');if(!grid)return;VNDS_DATA.PRODUCTS.forEach(p=>{const card=document.createElement('article');card.className='card product-card';card.innerHTML=`<div class="card-icon">${p.icon}</div><span class="badge">Sản phẩm mô phỏng</span><h3>${p.name}</h3><p class="muted">${p.description}</p><div class="data-list">${p.collectedData.map(x=>`<span class="data-pill">${x}</span>`).join('')}</div><a class="btn btn-primary" href="product-register.html?product=${p.id}">Đăng ký sử dụng</a>`;grid.appendChild(card)})}
  return {renderHome};
})();
