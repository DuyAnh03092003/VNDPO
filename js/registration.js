window.VNDS_REGISTRATION=(()=>{
  let product;

  function setError(id,message){
    const field=document.getElementById(id);
    const error=document.querySelector(`[data-error-for="${id}"]`);
    if(field)field.classList.toggle('error',Boolean(message));
    if(error)error.textContent=message||'';
  }

  function getValue(form,name){
    return String(new FormData(form).get(name)||'').trim();
  }

  function validate(form){
    let firstInvalid=null;
    const requiredFields=[
      ['value-name','Vui lòng nhập họ và tên.'],
      ['value-number-phone','Vui lòng nhập số điện thoại.'],
      ['value-email','Vui lòng nhập email.'],
      ['value-card','Vui lòng nhập CCCD hoặc giấy tờ định danh.']
    ];

    requiredFields.forEach(([id,message])=>{
      const invalid=!getValue(form,id);
      setError(id,invalid?message:'');
      if(invalid&&!firstInvalid)firstInvalid=document.getElementById(id);
    });

    const phone=getValue(form,'value-number-phone');
    if(phone&&!VNDS_UTILS.isValidPhone(phone)){
      setError('value-number-phone','Số điện thoại không hợp lệ.');
      firstInvalid=firstInvalid||document.getElementById('value-number-phone');
    }

    const email=getValue(form,'value-email');
    if(email&&!VNDS_UTILS.isValidEmail(email)){
      setError('value-email','Email không đúng định dạng.');
      firstInvalid=firstInvalid||document.getElementById('value-email');
    }

    const card=getValue(form,'value-card');
    if(card&&!/^[0-9A-Za-z]{6,20}$/.test(card)){
      setError('value-card','Giấy tờ định danh chỉ gồm chữ hoặc số, độ dài từ 6 đến 20 ký tự.');
      firstInvalid=firstInvalid||document.getElementById('value-card');
    }

    const consent=form.querySelector('#consent-confirm');
    if(!consent.checked){
      setError('consent-confirm','Bạn cần chủ động chọn đồng ý trước khi đăng ký.');
      firstInvalid=firstInvalid||consent;
    }else{
      setError('consent-confirm','');
    }

    firstInvalid?.focus();
    return !firstInvalid;
  }

  function policyModal(){
    const wrap=document.createElement('div');
    const note=document.createElement('div');
    note.className='notice';
    note.textContent='Nội dung này phục vụ mô phỏng việc thông báo trước khi xin sự đồng ý.';
    wrap.append(note);

    VNDS_DATA.PRIVACY_SECTIONS.forEach(([heading,paragraph])=>{
      const article=document.createElement('article');
      article.style.marginTop='18px';
      const title=document.createElement('h3');
      title.textContent=heading;
      const content=document.createElement('p');
      content.textContent=paragraph;
      article.append(title,content);
      wrap.append(article);
    });

    const footer=document.createElement('button');
    footer.className='btn btn-primary';
    footer.textContent='Tôi đã đọc';
    const modal=VNDS_MODAL.open({title:'Thông báo xử lý dữ liệu cá nhân',content:wrap,footer});
    footer.onclick=modal.close;
  }

  function addResultItem(host,label,value){
    const item=document.createElement('div');
    item.className='result-item';
    const strong=document.createElement('strong');
    strong.textContent=label;
    item.append(strong,document.createTextNode(value||'—'));
    host.append(item);
  }

  function successModal(record){
    const wrap=document.createElement('div');
    const mark=document.createElement('div');
    mark.className='success-mark';
    mark.textContent='✓';
    const heading=document.createElement('h3');
    heading.style.cssText='text-align:center;margin-bottom:18px';
    heading.textContent='Đăng ký và đồng ý đã được ghi nhận';

    const grid=document.createElement('div');
    grid.className='result-grid';
    addResultItem(grid,'Mã đăng ký',record.id);
    addResultItem(grid,'Thời gian',VNDS_UTILS.formatDateTime(record.createdAt));
    addResultItem(grid,'Sản phẩm',record.productName);
    addResultItem(grid,'Khách hàng',record.customer.fullName);
    addResultItem(grid,'Số điện thoại',record.customer.phone);
    addResultItem(grid,'Email',record.customer.email);
    addResultItem(grid,'CCCD/Giấy tờ',VNDS_UTILS.maskIdentityNumber(record.customer.identityNumber));
    addResultItem(grid,'Trạng thái đồng ý',record.consent?'Đã đồng ý – answer: 1':'Chưa đồng ý');
    wrap.append(mark,heading,grid);

    const apiNotice=document.createElement('div');
    apiNotice.style.marginTop='16px';
    if(record.apiIntegration?.status==='sent'){
      apiNotice.className='notice success';
      apiNotice.textContent=record.apiIntegration.unverified
        ?'Yêu cầu đã được gửi ở chế độ no-cors. Trình duyệt không cho phép đọc phản hồi nên không thể xác minh trạng thái tiếp nhận.'
        :`Payload multipart/form-data đã được gửi tới DataTrust thành công. HTTP ${record.apiIntegration.httpStatus}.`;
    }else if(record.apiIntegration?.status==='failed-local-fallback'){
      apiNotice.className='notice warning';
      apiNotice.textContent=`API chưa nhận được dữ liệu. Bản ghi đã được lưu cục bộ để tiếp tục demo. Lỗi: ${record.apiIntegration.error}`;
    }else{
      apiNotice.className='notice warning';
      apiNotice.textContent='API Consent đang tắt; dữ liệu chỉ được lưu trên trình duyệt.';
    }
    wrap.append(apiNotice);

    const footer=document.createElement('div');
    footer.style.display='contents';
    const home=document.createElement('a');
    home.href='index.html';
    home.className='btn btn-secondary';
    home.textContent='Quay về trang chủ';
    const again=document.createElement('button');
    again.className='btn btn-primary';
    again.textContent='Tạo đăng ký mới';
    footer.append(home,again);

    const modal=VNDS_MODAL.open({title:'Đăng ký thành công',content:wrap,footer});
    again.onclick=()=>{
      modal.close();
      document.getElementById('registrationForm').reset();
      window.scrollTo({top:0,behavior:'smooth'});
    };
  }

  function buildRecord(form){
    return {
      id:VNDS_UTILS.generateCode('REG'),
      createdAt:new Date().toISOString(),
      productId:product.id,
      productName:product.name,
      customer:{
        fullName:getValue(form,'value-name'),
        phone:getValue(form,'value-number-phone'),
        email:getValue(form,'value-email'),
        identityNumber:getValue(form,'value-card')
      },
      consent:form.querySelector('#consent-confirm').checked
    };
  }

  function saveLocal(record){
    const list=VNDS_STORAGE.getStorageItem(VNDS_STORAGE.KEYS.registrations,[]);
    list.push(record);
    VNDS_STORAGE.setStorageItem(VNDS_STORAGE.KEYS.registrations,list);
  }

  function renderApiStatus(){
    const host=document.getElementById('apiIntegrationStatus');
    if(!host||!product)return;

    const config=VNDS_CONSENT_API.getConfig();

    if(!config.enabled){
      host.className='notice warning';
      host.textContent='API Consent đang tắt. Nút đăng ký sẽ chỉ lưu dữ liệu cục bộ.';
      return;
    }

    const errors=VNDS_CONSENT_API.validateConfig(config,product.id);
    if(errors.length){
      host.className='notice warning';
      host.textContent=`Chưa thể gửi API: ${errors.join(' ')}`;
      return;
    }

    const mapping=VNDS_CONSENT_API.getProductMapping(product.id);
    host.className='notice success';
    host.textContent=`API sẵn sàng cho ${product.name}: POST ${mapping.apiUrl}`;
  }

  async function handleSubmit(event){
    event.preventDefault();
    const form=event.currentTarget;
    const errorHost=document.getElementById('apiSubmitError');
    if(errorHost)errorHost.textContent='';
    if(!validate(form))return;

    const submitButton=form.querySelector('button[type="submit"]');
    const originalText=submitButton.textContent;
    submitButton.disabled=true;
    submitButton.textContent='Đang gửi dữ liệu...';

    const record=buildRecord(form);
    try{
      const result=await VNDS_CONSENT_API.sendRegistrationConsent(record);
      if(result.skipped){
        record.apiIntegration={status:'skipped',reason:result.reason};
      }else{
        record.apiIntegration={
          status:'sent',
          httpStatus:result.status,
          sentAt:new Date().toISOString(),
          unverified:Boolean(result.unverified),
          endpointUrl:result.endpointUrl||''
        };
      }
      saveLocal(record);
      VNDS_TOAST.show(result.skipped?'Đã lưu đăng ký trên trình duyệt.':'Đã gửi dữ liệu đồng ý về DataTrust.','success');
      successModal(record);
    }catch(error){
      if(errorHost)errorHost.textContent=error.message;
      VNDS_TOAST.show(error.message,'error','Lỗi gửi API Consent');
    }finally{
      submitButton.disabled=false;
      submitButton.textContent=originalText;
    }
  }

  function init(){
    const form=document.getElementById('registrationForm');
    if(!form)return;

    const id=VNDS_UTILS.getQueryParam('product');
    product=VNDS_DATA.PRODUCTS.find(item=>item.id===id);
    if(!product){location.href='404.html';return;}

    document.getElementById('productName').textContent=product.name;
    document.getElementById('selectedProductName').textContent=product.name;
    document.getElementById('productCategory').textContent=product.category;
    document.getElementById('productDescription').textContent=product.description;
    document.getElementById('productIcon').textContent=product.icon;
    document.getElementById('productData').innerHTML=product.collectedData.map(item=>`<span class="data-pill">${item}</span>`).join('');

    document.querySelectorAll('[data-open-policy]').forEach(button=>button.onclick=policyModal);
    form.addEventListener('input',event=>{
      if(event.target.id)setError(event.target.id,'');
      const apiError=document.getElementById('apiSubmitError');
      if(apiError)apiError.textContent='';
    });
    form.addEventListener('submit',handleSubmit);
    renderApiStatus();
    window.addEventListener('vnds:api-config-updated',renderApiStatus);
  }

  return {init};
})();
