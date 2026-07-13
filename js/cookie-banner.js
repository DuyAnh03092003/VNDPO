window.VNDS_COOKIE=(()=>{
  const loaded=new Set();
  function parseScripts(code){const doc=new DOMParser().parseFromString(`<body>${code}</body>`,'text/html');return [...doc.querySelectorAll('script')]}
  function signature(s){return s.src||s.textContent.trim()}
  function loadScriptCode(code){const scripts=parseScripts(code);if(!scripts.length)throw new Error('Không tìm thấy thẻ script hợp lệ.');let count=0;scripts.forEach(source=>{const sig=signature(source);if(!sig||loaded.has(sig)||document.querySelector(`[data-demo-cookie-script="${CSS.escape(sig.slice(0,80))}"]`))return;const s=document.createElement('script');['src','type','crossorigin','integrity','referrerpolicy'].forEach(a=>source.hasAttribute(a)&&s.setAttribute(a,source.getAttribute(a)));if(source.hasAttribute('async'))s.async=true;if(source.hasAttribute('defer'))s.defer=true;[...source.attributes].filter(a=>a.name.startsWith('data-')).forEach(a=>s.setAttribute(a.name,a.value));if(!source.src)s.textContent=source.textContent;s.dataset.demoCookieScript=sig.slice(0,80);document.head.appendChild(s);loaded.add(sig);count++});return count}
  function applySaved(){const cfg=VNDS_STORAGE.getStorageItem(VNDS_STORAGE.KEYS.cookie,VNDS_STORAGE.defaults.cookie);if(cfg.enabled&&cfg.scriptCode){try{const count=loadScriptCode(cfg.scriptCode);if(count)VNDS_STORAGE.setStorageItem(VNDS_STORAGE.KEYS.cookie,{...cfg,lastLoadedAt:new Date().toISOString()})}catch(e){console.warn(e)}}}
  return {parseScripts,loadScriptCode,applySaved};
})();
