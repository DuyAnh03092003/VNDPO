window.VNDS_SETTINGS=(()=>{
  let currentTab='cookie';

  function tabButton(id,label){
    return `<button class="tab-btn ${currentTab===id?'active':''}" data-tab="${id}">${label}</button>`;
  }

  function cookieTab(){
    const cfg=VNDS_STORAGE.getStorageItem(VNDS_STORAGE.KEYS.cookie,VNDS_STORAGE.defaults.cookie);
    const wrap=document.createElement('div');
    wrap.innerHTML=`
      <div class="notice warning"><strong>Cảnh báo:</strong> Chỉ dán script từ nguồn tin cậy. Chức năng này chỉ dùng trong môi trường demo.</div>
      <div class="form-group" style="margin-top:18px">
        <label class="checkbox-row"><input id="cookieEnabled" type="checkbox" ${cfg.enabled?'checked':''}><span>Kích hoạt Cookie Banner</span></label>
      </div>
      <div class="form-group" style="margin-top:14px">
        <label for="cookieScript">Mã script Cookie Banner</label>
        <textarea id="cookieScript" class="form-control" placeholder="Dán thẻ <script>...</script> tại đây"></textarea>
        <div id="scriptError" class="field-error"></div>
      </div>
      <div class="script-status notice">Trạng thái: ${cfg.scriptCode?(cfg.enabled?'Đã cấu hình và đang bật':'Đã cấu hình nhưng đang tắt'):'Chưa cấu hình'}</div>
      <div class="form-actions">
        <button class="btn btn-secondary" id="clearCookie">Xóa cấu hình</button>
        <button class="btn btn-secondary" id="saveCookie">Lưu cấu hình</button>
        <button class="btn btn-primary" id="applyCookie">Lưu và áp dụng</button>
      </div>`;
    wrap.querySelector('#cookieScript').value=cfg.scriptCode||'';
    wrap.querySelector('#saveCookie').onclick=()=>saveCookie(false,wrap);
    wrap.querySelector('#applyCookie').onclick=()=>saveCookie(true,wrap);
    wrap.querySelector('#clearCookie').onclick=async()=>{
      if(await VNDS_MODAL.confirm({title:'Xóa cấu hình Cookie Banner',message:'Bạn có chắc muốn xóa cấu hình Cookie Banner?',confirmText:'Xóa',danger:true})){
        VNDS_STORAGE.setStorageItem(VNDS_STORAGE.KEYS.cookie,VNDS_STORAGE.defaults.cookie);
        VNDS_TOAST.show('Đã xóa cấu hình Cookie Banner.','success');
      }
    };
    return wrap;
  }

  function saveCookie(apply,wrap){
    const enabled=wrap.querySelector('#cookieEnabled').checked;
    const scriptCode=wrap.querySelector('#cookieScript').value.trim();
    const err=wrap.querySelector('#scriptError');
    err.textContent='';
    if(scriptCode&&!VNDS_COOKIE.parseScripts(scriptCode).length){
      err.textContent='Không tìm thấy thẻ script hợp lệ.';
      VNDS_TOAST.show('Script không hợp lệ.','error');
      return;
    }
    const cfg={enabled,scriptCode,updatedAt:new Date().toISOString(),lastLoadedAt:''};
    VNDS_STORAGE.setStorageItem(VNDS_STORAGE.KEYS.cookie,cfg);
    if(apply&&enabled&&scriptCode){
      try{
        const count=VNDS_COOKIE.loadScriptCode(scriptCode);
        VNDS_TOAST.show(count?'Đã tải script Cookie Banner.':'Script đã tồn tại, không tải lại.','success');
      }catch(e){
        VNDS_TOAST.show(e.message,'error');
        return;
      }
    }
    VNDS_TOAST.show('Đã lưu cấu hình Cookie Banner.','success');
  }

  function apiTab(){
    const cfg=VNDS_CONSENT_API.getConfig();
    const wrap=document.createElement('div');
    wrap.innerHTML=`
      <div class="notice warning">
        <strong>Lưu ý:</strong> Tên sản phẩm và serviceId được cố định trong <code>js/data.js</code>. URL API Consent của từng sản phẩm được nhập tại đây và lưu trên trình duyệt.
      </div>
      <div class="form-group" style="margin-top:18px">
        <label class="checkbox-row">
          <input id="apiEnabled" type="checkbox">
          <span>Kích hoạt gửi dữ liệu đồng ý về DataTrust</span>
        </label>
      </div>
      <div style="margin-top:18px">
        <h3>URL API theo sản phẩm</h3>
        <p class="muted" style="margin-top:6px">Mỗi sản phẩm sẽ gửi dữ liệu tới URL được cấu hình tương ứng.</p>
        <div class="api-product-map" id="productApiList"></div>
      </div>
      <div class="form-actions">
        <button class="btn btn-primary" id="saveApiConfig">Lưu cấu hình API</button>
      </div>`;

    wrap.querySelector('#apiEnabled').checked=Boolean(cfg.enabled);
    const list=wrap.querySelector('#productApiList');

    VNDS_DATA.PRODUCTS.forEach(product=>{
      const row=document.createElement('div');
      row.className='api-product-row api-product-row-3';
      row.innerHTML=`
        <div>
          <strong>${product.name}</strong>
          <div class="muted" style="font-size:.84rem;margin-top:4px">serviceId: ${product.serviceId||'Chưa cấu hình'}</div>
        </div>
        <div class="form-group">
          <label class="sr-only" for="api-url-${product.id}">URL API của ${product.name}</label>
          <input id="api-url-${product.id}" class="form-control" data-product-api="${product.id}" type="url" placeholder="https://..." autocomplete="off">
          <div class="setting-status" data-api-status="${product.id}"></div>
        </div>
        <button class="btn btn-secondary" type="button" data-check-product-api="${product.id}">Kiểm tra</button>`;
      row.querySelector(`[data-product-api="${product.id}"]`).value=cfg.productApiUrls?.[product.id]||'';
      list.appendChild(row);
    });

    list.addEventListener('click',event=>{
      const productId=event.target.dataset.checkProductApi;
      if(!productId)return;
      const input=list.querySelector(`[data-product-api="${productId}"]`);
      const status=list.querySelector(`[data-api-status="${productId}"]`);
      const value=input.value.trim();
      const valid=/^https?:\/\//i.test(value);
      status.className=`setting-status ${valid?'status-ok':'status-error'}`;
      status.textContent=valid?'URL hợp lệ':value?'URL phải bắt đầu bằng http:// hoặc https://':'Chưa nhập URL';
    });

    wrap.querySelector('#saveApiConfig').onclick=()=>{
      const productApiUrls={};
      let firstInvalid=null;

      VNDS_DATA.PRODUCTS.forEach(product=>{
        const input=list.querySelector(`[data-product-api="${product.id}"]`);
        const status=list.querySelector(`[data-api-status="${product.id}"]`);
        const value=input.value.trim();
        productApiUrls[product.id]=value;

        if(value&&!/^https?:\/\//i.test(value)){
          status.className='setting-status status-error';
          status.textContent='URL phải bắt đầu bằng http:// hoặc https://';
          firstInvalid=firstInvalid||input;
        }else{
          status.className=`setting-status ${value?'status-ok':''}`;
          status.textContent=value?'URL hợp lệ':'Chưa cấu hình';
        }
      });

      if(firstInvalid){
        firstInvalid.focus();
        VNDS_TOAST.show('Có URL API không hợp lệ. Vui lòng kiểm tra lại.','error');
        return;
      }

      const saved=VNDS_CONSENT_API.saveConfig({
        enabled:wrap.querySelector('#apiEnabled').checked,
        productApiUrls
      });
      if(!saved){
        VNDS_TOAST.show('Không thể lưu cấu hình API trên trình duyệt.','error');
        return;
      }

      const missing=VNDS_DATA.PRODUCTS.filter(product=>!productApiUrls[product.id]).length;
      VNDS_TOAST.show(
        missing
          ?`Đã lưu cấu hình. Còn ${missing} sản phẩm chưa có URL API.`
          :'Đã lưu URL API cho tất cả sản phẩm.',
        missing?'warning':'success'
      );
      window.dispatchEvent(new CustomEvent('vnds:api-config-updated'));
    };

    return wrap;
  }

  function rightsTab(){
    const saved=VNDS_STORAGE.getStorageItem(VNDS_STORAGE.KEYS.rights,VNDS_STORAGE.defaults.rights);
    const wrap=document.createElement('div');
    wrap.innerHTML=`<div class="settings-list" id="rightsSettings"></div><div class="form-actions"><button class="btn btn-secondary" id="restoreRights">Khôi phục mặc định</button><button class="btn btn-primary" id="saveRights">Lưu tất cả</button></div>`;
    const list=wrap.querySelector('#rightsSettings');
    VNDS_DATA.RIGHTS.forEach(r=>{
      const cfg=saved.find(x=>x.id===r.id)||{url:r.defaultUrl};
      const row=document.createElement('div');
      row.className='setting-row';
      row.innerHTML=`<div><strong>${r.name}</strong><div class="muted" style="font-size:.86rem">${r.description}</div></div><div class="form-group"><input class="form-control" data-right-url="${r.id}" value=""><div class="setting-status" data-status="${r.id}"></div></div><button class="btn btn-secondary" data-check="${r.id}">Kiểm tra</button>`;
      row.querySelector('input').value=cfg.url||'';
      list.appendChild(row);
    });
    list.addEventListener('click',e=>{
      const id=e.target.dataset.check;
      if(!id)return;
      const input=list.querySelector(`[data-right-url="${id}"]`);
      const status=list.querySelector(`[data-status="${id}"]`);
      const ok=VNDS_UTILS.isValidUrl(input.value.trim());
      status.className=`setting-status ${ok?'status-ok':'status-error'}`;
      status.textContent=ok?'URL hợp lệ':'URL không hợp lệ';
    });
    wrap.querySelector('#saveRights').onclick=()=>{
      const data=VNDS_DATA.RIGHTS.map(r=>({id:r.id,name:r.name,url:list.querySelector(`[data-right-url="${r.id}"]`).value.trim(),updatedAt:new Date().toISOString()}));
      const invalid=data.find(x=>x.url&&!VNDS_UTILS.isValidUrl(x.url));
      if(invalid){VNDS_TOAST.show(`URL của “${invalid.name}” không hợp lệ.`,'error');return;}
      VNDS_STORAGE.setStorageItem(VNDS_STORAGE.KEYS.rights,data);
      VNDS_TOAST.show('Đã lưu cấu hình quyền.','success');
    };
    wrap.querySelector('#restoreRights').onclick=()=>{
      VNDS_STORAGE.setStorageItem(VNDS_STORAGE.KEYS.rights,VNDS_STORAGE.defaults.rights);
      VNDS_TOAST.show('Đã khôi phục cấu hình mặc định.','success');
      const host=wrap.parentElement;
      if(host){host.innerHTML='';host.append(rightsTab())}
    };
    return wrap;
  }

  function dataTab(){
    const wrap=document.createElement('div');
    wrap.innerHTML=`
      <div class="notice">Dữ liệu demo chỉ được lưu trên trình duyệt hiện tại.</div>
      <div class="danger-zone" style="margin-top:18px">
        <h3>Quản lý dữ liệu demo</h3>
        <div class="danger-actions">
          <button class="btn btn-secondary" data-action="restore">Khôi phục cấu hình mặc định</button>
          <button class="btn btn-secondary" data-action="api">Xóa cấu hình API Consent</button>
          <button class="btn btn-secondary" data-action="regs">Xóa lịch sử đăng ký</button>
          <button class="btn btn-secondary" data-action="reqs">Xóa lịch sử yêu cầu quyền</button>
          <button class="btn btn-danger" data-action="all">Xóa toàn bộ dữ liệu demo</button>
        </div>
      </div>`;
    wrap.addEventListener('click',async e=>{
      const action=e.target.dataset.action;
      if(!action)return;
      const ok=await VNDS_MODAL.confirm({
        title:'Xác nhận thao tác',
        message:action==='all'?'Hành động này sẽ xóa toàn bộ cấu hình và dữ liệu mô phỏng đang lưu trên trình duyệt.':'Bạn có chắc muốn thực hiện thao tác này?',
        confirmText:'Xác nhận',danger:action==='all'
      });
      if(!ok)return;
      if(action==='restore')VNDS_STORAGE.restoreDefaultConfig();
      if(action==='api'){VNDS_STORAGE.removeStorageItem(VNDS_STORAGE.KEYS.consentApi);window.dispatchEvent(new CustomEvent('vnds:api-config-updated'))}
      if(action==='regs')VNDS_STORAGE.removeStorageItem(VNDS_STORAGE.KEYS.registrations);
      if(action==='reqs')VNDS_STORAGE.removeStorageItem(VNDS_STORAGE.KEYS.requests);
      if(action==='all')VNDS_STORAGE.clearDemoStorage();
      VNDS_TOAST.show('Đã hoàn tất thao tác.','success');
    });
    return wrap;
  }

  function renderBody(container){
    container.innerHTML='';
    const content=currentTab==='cookie'?cookieTab():currentTab==='api'?apiTab():currentTab==='rights'?rightsTab():dataTab();
    container.append(content);
  }

  function open(){
    const shell=document.createElement('div');
    shell.innerHTML=`<div class="tabs">${tabButton('cookie','Cookie Banner')}${tabButton('api','API Consent')}${tabButton('rights','Quyền chủ thể dữ liệu')}${tabButton('data','Dữ liệu demo')}</div><div id="settingsBody" style="padding-top:18px"></div>`;
    const modal=VNDS_MODAL.open({title:'Cài đặt Demo',content:shell});
    shell.querySelectorAll('[data-tab]').forEach(button=>button.onclick=()=>{
      currentTab=button.dataset.tab;
      modal.close();
      open();
    });
    renderBody(shell.querySelector('#settingsBody'));
  }

  function init(){document.addEventListener('click',e=>{if(e.target.closest('[data-open-settings]'))open()})}
  return {init,open};
})();
