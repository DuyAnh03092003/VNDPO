window.VNDS_POLICY=(()=>{
  function render(type){const host=document.getElementById('policyContent'),toc=document.getElementById('policyToc');if(!host||!toc)return;const sections=type==='terms'?VNDS_DATA.TERMS_SECTIONS:VNDS_DATA.PRIVACY_SECTIONS;sections.forEach(([h,p],i)=>{const id=`section-${i+1}`;const a=document.createElement('a');a.href=`#${id}`;a.textContent=`${i+1}. ${h}`;toc.appendChild(a);const art=document.createElement('article');art.id=id;const hh=document.createElement('h2');hh.textContent=`${i+1}. ${h}`;const pp=document.createElement('p');pp.textContent=p;art.append(hh,pp);host.appendChild(art)})}
  return {render};
})();
