window.VNDS_CONSENT_API = (()=>{
  const FIXED_PAYLOAD_CONFIG=Object.freeze({
    keyValue:'text',
    language:'vi',
    purposeId:'1783944575208',
    timeoutMs:15000
  });

  function normalizeProductApiUrls(source){
    const values=source&&typeof source==='object'?source:{};
    const defaults=VNDS_STORAGE.defaults.consentApi.productApiUrls||{};
    return Object.fromEntries(
      VNDS_DATA.PRODUCTS.map(product=>[
        product.id,
        Object.prototype.hasOwnProperty.call(values,product.id)
          ? String(values[product.id]||'').trim()
          : String(defaults[product.id]||'').trim()
      ])
    );
  }

  function getConfig(){
    const defaults=VNDS_STORAGE.defaults.consentApi;
    const stored=VNDS_STORAGE.getStorageItem(VNDS_STORAGE.KEYS.consentApi,defaults)||{};
    return {
      enabled:typeof stored.enabled==='boolean'?stored.enabled:defaults.enabled,
      productApiUrls:normalizeProductApiUrls(stored.productApiUrls),
      updatedAt:stored.updatedAt||''
    };
  }

  function saveConfig(config){
    const current=getConfig();
    const productApiUrls=normalizeProductApiUrls(
      config.productApiUrls&&typeof config.productApiUrls==='object'
        ? config.productApiUrls
        : current.productApiUrls
    );
    return VNDS_STORAGE.setStorageItem(VNDS_STORAGE.KEYS.consentApi,{
      enabled:typeof config.enabled==='boolean'?config.enabled:current.enabled,
      productApiUrls,
      updatedAt:new Date().toISOString()
    });
  }

  function normalizeServiceFieldId(serviceId){
    const value=String(serviceId||'').trim();
    if(!value)return '';
    return value.startsWith('serviceId-')?value:`serviceId-${value}`;
  }

  function normalizePurposeFieldId(purposeId){
    const value=String(purposeId||'').trim();
    if(!value)return '';
    if(value.startsWith('purpose-')&&value.endsWith('-confirm'))return value;
    return `purpose-${value}-confirm`;
  }

  function getProductMapping(productId,config=getConfig()){
    const product=VNDS_DATA.PRODUCTS.find(item=>item.id===productId);
    return {
      productId:String(product?.id||'').trim(),
      productName:String(product?.name||'').trim(),
      serviceId:String(product?.serviceId||'').trim(),
      serviceAnswer:String(product?.name||'').trim(),
      apiUrl:String(config.productApiUrls?.[productId]||'').trim()
    };
  }

  function validateConfig(config,productId){
    const errors=[];
    if(!config.enabled)return errors;

    if(productId){
      const mapping=getProductMapping(productId,config);
      if(!mapping.productId)errors.push(`Không tìm thấy sản phẩm “${productId}” trong js/data.js.`);
      if(!mapping.serviceId)errors.push(`Sản phẩm “${productId}” chưa có serviceId trong js/data.js.`);
      if(!mapping.serviceAnswer)errors.push(`Sản phẩm “${productId}” chưa có tên sản phẩm.`);
      if(!mapping.apiUrl){
        errors.push(`Sản phẩm “${mapping.productName||productId}” chưa được nhập URL API trong Cài đặt Demo → API Consent.`);
      }else if(!/^https?:\/\//i.test(mapping.apiUrl)){
        errors.push(`URL API của sản phẩm “${mapping.productName||productId}” không hợp lệ.`);
      }
    }
    return errors;
  }

  function buildPayload(record){
    const mapping=getProductMapping(record.productId);
    return {
      lang:FIXED_PAYLOAD_CONFIG.language,
      content:[
        {id:'value-name',type:10,answer:record.customer.fullName},
        {id:'value-number-phone',type:11,answer:record.customer.phone},
        {id:'value-email',type:12,answer:record.customer.email},
        {id:'value-card',type:13,answer:record.customer.identityNumber},
        {
          id:normalizeServiceFieldId(mapping.serviceId),
          type:5,
          answer:mapping.serviceAnswer
        },
        {
          id:normalizePurposeFieldId(FIXED_PAYLOAD_CONFIG.purposeId),
          type:16,
          answer:record.consent===true?1:0
        }
      ]
    };
  }

  function buildFormData(record){
    const payload=buildPayload(record);
    const formData=new FormData();
    formData.append('key',FIXED_PAYLOAD_CONFIG.keyValue);
    formData.append('text',JSON.stringify(payload));
    return {formData,payload};
  }

  async function parseResponse(response){
    const text=await response.text();
    if(!text)return null;
    try{return JSON.parse(text);}catch(error){return {message:text};}
  }

  async function sendRegistrationConsent(record){
    const config=getConfig();
    if(!config.enabled)return {skipped:true,reason:'API Consent chưa được kích hoạt'};

    const errors=validateConfig(config,record.productId);
    if(errors.length)throw new Error(errors.join(' '));
    if(record.consent!==true)throw new Error('Người dùng chưa xác nhận đồng ý.');

    const mapping=getProductMapping(record.productId,config);
    const {formData,payload}=buildFormData(record);
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),FIXED_PAYLOAD_CONFIG.timeoutMs);

    try{
      const response=await fetch(mapping.apiUrl,{
        method:'POST',
        headers:{Accept:'*/*'},
        body:formData,
        signal:controller.signal,
        credentials:'omit',
        mode:'cors'
      });
      const data=await parseResponse(response);
      if(!response.ok){
        const detail=data?.message||data?.error||data?.reason||`HTTP ${response.status}`;
        throw new Error(`API trả về lỗi ${response.status}: ${detail}`);
      }
      return {ok:true,status:response.status,data,payload,endpointUrl:mapping.apiUrl};
    }catch(error){
      if(error.name==='AbortError')throw new Error(`API không phản hồi sau ${FIXED_PAYLOAD_CONFIG.timeoutMs/1000} giây.`);
      if(error instanceof TypeError){
        throw new Error('Không thể kết nối API của sản phẩm. Hãy kiểm tra URL trong Cài đặt Demo → API Consent, cấu hình CORS và môi trường chạy website.');
      }
      throw error;
    }finally{
      clearTimeout(timer);
    }
  }

  return {
    getConfig,
    saveConfig,
    validateConfig,
    getProductMapping,
    normalizeServiceFieldId,
    normalizePurposeFieldId,
    buildPayload,
    buildFormData,
    sendRegistrationConsent
  };
})();
