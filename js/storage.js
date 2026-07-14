window.VNDS_STORAGE = (()=>{
  const KEYS={
    cookie:'demo_cookie_banner_config',
    rights:'demo_data_subject_rights_config',
    registrations:'demo_product_registrations',
    requests:'demo_data_subject_requests',
    consentApi:'demo_consent_api_config'
  };

  const INITIAL_PRODUCT_API_URLS={
    safetyshield:'https://irm-demo.datatrust.one/consent/947727/da74/1527e750-da74-4a07-b9b4-5c0d2e389980'
  };

  const defaultProductApiUrls=Object.fromEntries(
    window.VNDS_DATA.PRODUCTS.map(product=>[
      product.id,
      INITIAL_PRODUCT_API_URLS[product.id]||''
    ])
  );

  const defaults={
    cookie:{enabled:false,scriptCode:'',updatedAt:'',lastLoadedAt:''},
    rights:window.VNDS_DATA.RIGHTS.map(r=>({id:r.id,name:r.name,url:r.defaultUrl,updatedAt:''})),
    consentApi:{
      enabled:true,
      productApiUrls:defaultProductApiUrls,
      updatedAt:''
    }
  };

  function clone(value){
    try{return JSON.parse(JSON.stringify(value));}catch(error){return value;}
  }

  function getStorageItem(key,fallback){
    try{
      const raw=localStorage.getItem(key);
      return raw===null?clone(fallback):JSON.parse(raw);
    }catch(error){
      console.warn('Không thể đọc localStorage',error);
      return clone(fallback);
    }
  }

  function setStorageItem(key,value){
    try{
      localStorage.setItem(key,JSON.stringify(value));
      return true;
    }catch(error){
      console.warn('Không thể lưu localStorage',error);
      return false;
    }
  }

  function removeStorageItem(key){
    try{localStorage.removeItem(key);return true;}catch(error){return false;}
  }

  function clearDemoStorage(){Object.values(KEYS).forEach(removeStorageItem);}

  function restoreDefaultConfig(){
    setStorageItem(KEYS.cookie,defaults.cookie);
    setStorageItem(KEYS.rights,defaults.rights);
    setStorageItem(KEYS.consentApi,defaults.consentApi);
  }

  return {KEYS,defaults,getStorageItem,setStorageItem,removeStorageItem,clearDemoStorage,restoreDefaultConfig};
})();
