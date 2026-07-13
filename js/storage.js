window.VNDS_STORAGE = (()=>{
  const KEYS={cookie:'demo_cookie_banner_config',rights:'demo_data_subject_rights_config',registrations:'demo_product_registrations',requests:'demo_data_subject_requests'};
  const defaults={cookie:{enabled:false,scriptCode:'',updatedAt:'',lastLoadedAt:''},rights:window.VNDS_DATA.RIGHTS.map(r=>({id:r.id,name:r.name,url:r.defaultUrl,updatedAt:''}))};
  function getStorageItem(key,fallback){try{const raw=localStorage.getItem(key);return raw===null?fallback:JSON.parse(raw)}catch(e){console.warn('Không thể đọc localStorage',e);return fallback}}
  function setStorageItem(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true}catch(e){console.warn('Không thể lưu localStorage',e);return false}}
  function removeStorageItem(key){try{localStorage.removeItem(key);return true}catch(e){return false}}
  function clearDemoStorage(){Object.values(KEYS).forEach(removeStorageItem)}
  function restoreDefaultConfig(){setStorageItem(KEYS.cookie,defaults.cookie);setStorageItem(KEYS.rights,defaults.rights)}
  return {KEYS,defaults,getStorageItem,setStorageItem,removeStorageItem,clearDemoStorage,restoreDefaultConfig};
})();
