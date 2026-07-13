window.VNDS_UTILS=(()=>{
  const getQueryParam=name=>new URLSearchParams(location.search).get(name);
  const formatDateTime=v=>new Intl.DateTimeFormat('vi-VN',{dateStyle:'medium',timeStyle:'short'}).format(new Date(v));
  const pad=n=>String(n).padStart(2,'0');
  function generateCode(prefix){const d=new Date();return `${prefix}-${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${Math.floor(1000+Math.random()*9000)}`}
  const maskIdentityNumber=v=>v?`${'*'.repeat(Math.max(4,v.length-4))}${v.slice(-4)}`:'';
  const isValidEmail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());
  const isValidPhone=v=>/^[0-9+()\s.-]{8,15}$/.test(String(v).trim());
  function isValidUrl(v){if(!v)return false;if(v.startsWith('/')||/^[\w-]+\.html(?:\?.*)?$/.test(v))return true;try{const u=new URL(v);return ['http:','https:'].includes(u.protocol)}catch{return false}}
  const debounce=(fn,delay=250)=>{let t;return(...args)=>{clearTimeout(t);t=setTimeout(()=>fn(...args),delay)}};
  return {getQueryParam,formatDateTime,generateCode,maskIdentityNumber,isValidEmail,isValidPhone,isValidUrl,debounce};
})();
