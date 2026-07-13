window.VNDS_TOAST=(()=>{
  function ensure(){let c=document.querySelector('.toast-container');if(!c){c=document.createElement('div');c.className='toast-container';c.setAttribute('aria-live','polite');document.body.appendChild(c)}return c}
  function show(message,type='info',title='Thông báo'){const c=ensure();const el=document.createElement('div');el.className=`toast ${type}`;const icon=document.createElement('div');icon.textContent={success:'✓',error:'!',warning:'⚠',info:'ℹ'}[type]||'ℹ';const body=document.createElement('div');const t=document.createElement('div');t.className='toast-title';t.textContent=title;const m=document.createElement('div');m.textContent=message;body.append(t,m);const close=document.createElement('button');close.className='toast-close';close.setAttribute('aria-label','Đóng thông báo');close.textContent='✕';close.onclick=()=>el.remove();el.append(icon,body,close);c.appendChild(el);setTimeout(()=>el.remove(),4500)}
  return {show};
})();
