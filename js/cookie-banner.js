window.VNDS_COOKIE=(()=>{
  const loaded=new Set();
  const SCRIPT_SELECTOR='script[data-demo-cookie-script]';

  function parseScripts(code){
    const doc=new DOMParser().parseFromString(
      `<body>${code}</body>`,
      'text/html'
    );
    return [...doc.querySelectorAll('script')];
  }

  function signature(script){
    return script.src||script.textContent.trim();
  }

  function createMarker(value){
    let hash=2166136261;

    for(let index=0;index<value.length;index++){
      hash^=value.charCodeAt(index);
      hash=Math.imul(hash,16777619);
    }

    return `vnds-${(hash>>>0).toString(36)}`;
  }

  function removeLoadedScripts(){
    /*
     * Phát sự kiện trước khi xóa để Cookie Banner có thể tự dọn dẹp
     * listener, timer hoặc giao diện nếu thư viện có hỗ trợ.
     */
    window.dispatchEvent(new CustomEvent('vnds:before-cookie-script-remove'));

    document.querySelectorAll(SCRIPT_SELECTOR).forEach(script=>{
      script.remove();
    });

    loaded.clear();

    window.dispatchEvent(new CustomEvent('vnds:cookie-script-removed'));
  }

  function loadScriptCode(code,options={}){
    const {replaceExisting=false}=options;
    const scripts=parseScripts(code);

    if(!scripts.length){
      throw new Error('Không tìm thấy thẻ script hợp lệ.');
    }

    if(replaceExisting){
      removeLoadedScripts();
    }

    let count=0;

    scripts.forEach(source=>{
      const sig=signature(source);
      if(!sig)return;

      const marker=createMarker(sig);
      const existing=document.querySelector(
        `${SCRIPT_SELECTOR}[data-demo-cookie-script="${marker}"]`
      );

      if(loaded.has(sig)||existing)return;

      const script=document.createElement('script');

      [
        'src',
        'type',
        'crossorigin',
        'integrity',
        'referrerpolicy'
      ].forEach(attribute=>{
        if(source.hasAttribute(attribute)){
          script.setAttribute(attribute,source.getAttribute(attribute));
        }
      });

      if(source.hasAttribute('async'))script.async=true;
      if(source.hasAttribute('defer'))script.defer=true;

      [...source.attributes]
        .filter(attribute=>attribute.name.startsWith('data-'))
        .forEach(attribute=>{
          script.setAttribute(attribute.name,attribute.value);
        });

      if(!source.src){
        script.textContent=source.textContent;
      }

      script.dataset.demoCookieScript=marker;
      document.head.appendChild(script);

      loaded.add(sig);
      count++;
    });

    return count;
  }

  function replaceScriptCode(code){
    return loadScriptCode(code,{replaceExisting:true});
  }

  function applySaved(){
    const cfg=VNDS_STORAGE.getStorageItem(
      VNDS_STORAGE.KEYS.cookie,
      VNDS_STORAGE.defaults.cookie
    );

    if(!cfg.enabled||!cfg.scriptCode){
      removeLoadedScripts();
      return;
    }

    try{
      const count=replaceScriptCode(cfg.scriptCode);

      if(count){
        VNDS_STORAGE.setStorageItem(
          VNDS_STORAGE.KEYS.cookie,
          {
            ...cfg,
            lastLoadedAt:new Date().toISOString()
          }
        );
      }
    }catch(error){
      console.warn('Không thể tải Cookie Banner:',error);
    }
  }

  return {
    parseScripts,
    loadScriptCode,
    replaceScriptCode,
    removeLoadedScripts,
    applySaved
  };
})();
