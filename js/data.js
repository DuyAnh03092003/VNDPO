window.VNDS_DATA = (() => {
  const COMPANY_INFO = {
    shortName: 'VNDS', fullName: 'Công ty Cổ phần An ninh Dữ liệu Việt Nam',
    englishName: 'Vietnam Data Security Joint Stock Company', tagline: 'An ninh dữ liệu Việt Nam',
    demoNotice: 'Website mô phỏng do VNDS xây dựng phục vụ đào tạo – Không phải website cung cấp dịch vụ thực tế.'
  };
  const PRODUCTS = [
    {id:'cloud',name:'VNDS Cloud Demo',category:'Lưu trữ dữ liệu',icon:'☁️',description:'Dịch vụ mô phỏng lưu trữ dữ liệu trực tuyến, dùng để trình diễn hoạt động thu thập thông tin và ghi nhận sự đồng ý.',collectedData:['Họ tên','Email','Số điện thoại','Nhu cầu sử dụng'],purposes:['Tiếp nhận đăng ký','Cung cấp dịch vụ','Hỗ trợ khách hàng']},
    {id:'pay',name:'VNDS Pay Demo',category:'Thanh toán điện tử',icon:'💳',description:'Giải pháp mô phỏng thanh toán điện tử và minh họa việc thông báo mục đích xử lý dữ liệu.',collectedData:['Họ tên','Số điện thoại','Email','Thông tin giao dịch'],purposes:['Xử lý giao dịch','Xác minh','Hỗ trợ']},
    {id:'shop',name:'VNDS Shop Demo',category:'Thương mại điện tử',icon:'🛒',description:'Nền tảng mua sắm mô phỏng dùng để đào tạo về sự đồng ý và chính sách bảo vệ dữ liệu.',collectedData:['Họ tên','Địa chỉ','Điện thoại','Nhu cầu mua sắm'],purposes:['Xử lý đơn hàng','Giao hàng','Chăm sóc khách hàng']},
    {id:'health',name:'VNDS Health Demo',category:'Chăm sóc sức khỏe',icon:'🩺',description:'Dịch vụ mô phỏng giúp minh họa việc xử lý dữ liệu có mức độ nhạy cảm cao hơn.',collectedData:['Họ tên','Ngày sinh','Thông tin liên hệ','Nhu cầu chăm sóc'],purposes:['Tiếp nhận nhu cầu','Liên hệ','Hỗ trợ dịch vụ']},
    {id:'travel',name:'VNDS Travel Demo',category:'Đặt vé và hành trình',icon:'✈️',description:'Dịch vụ mô phỏng đặt vé và quản lý hành trình, phục vụ trình diễn luồng đồng ý.',collectedData:['Họ tên','Email','Số điện thoại','Hành trình'],purposes:['Đặt dịch vụ','Thông báo hành trình','Hỗ trợ']},
    {id:'loyalty',name:'VNDS Loyalty Demo',category:'Khách hàng thân thiết',icon:'🎁',description:'Chương trình thành viên mô phỏng, giúp minh họa việc tách riêng đồng ý marketing.',collectedData:['Họ tên','Email','Điện thoại','Lịch sử tích điểm'],purposes:['Quản lý thành viên','Tích điểm','Truyền thông khi có đồng ý']}
  ];
  const RIGHTS = [
    ['know','Quyền được biết','Được thông báo về hoạt động xử lý dữ liệu cá nhân.','Biết doanh nghiệp thu thập dữ liệu gì, cho mục đích nào và lưu trong bao lâu.'],
    ['consent','Quyền đồng ý','Quyết định đồng ý hoặc không đồng ý với từng hoạt động xử lý.','Đồng ý đăng ký dịch vụ nhưng không đồng ý nhận quảng cáo.'],
    ['access','Quyền truy cập dữ liệu','Yêu cầu xem dữ liệu cá nhân đang được lưu trữ và xử lý.','Xem thông tin đăng ký và lịch sử đồng ý.'],
    ['withdraw-consent','Quyền rút lại sự đồng ý','Rút lại sự đồng ý đã cung cấp trước đó.','Dừng nhận email giới thiệu sản phẩm.'],
    ['delete','Quyền xóa dữ liệu','Yêu cầu xóa dữ liệu trong các trường hợp phù hợp.','Xóa hồ sơ đăng ký khi không còn sử dụng dịch vụ.'],
    ['restrict','Quyền hạn chế xử lý dữ liệu','Yêu cầu tạm thời giới hạn việc sử dụng dữ liệu.','Tạm dừng xử lý trong thời gian xác minh.'],
    ['provide','Quyền cung cấp dữ liệu','Yêu cầu được cung cấp dữ liệu theo hình thức phù hợp.','Xuất thông tin đăng ký và lịch sử đồng ý.'],
    ['object','Quyền phản đối xử lý dữ liệu','Phản đối một số hoạt động xử lý dữ liệu.','Phản đối sử dụng dữ liệu cho tiếp thị.'],
    ['complaint','Quyền khiếu nại, tố cáo hoặc khởi kiện','Gửi phản ánh khi cho rằng dữ liệu bị xử lý không phù hợp.','Phản ánh việc tiếp tục gửi quảng cáo sau khi rút đồng ý.'],
    ['compensation','Quyền yêu cầu bồi thường thiệt hại','Yêu cầu xem xét bồi thường khi có thiệt hại phù hợp.','Yêu cầu xem xét trách nhiệm khi dữ liệu bị dùng sai mục đích.'],
    ['self-protection','Quyền tự bảo vệ','Chủ động áp dụng biện pháp bảo vệ dữ liệu cá nhân.','Không cung cấp mật khẩu hoặc mã xác thực cho bên không tin cậy.']
  ].map(([id,name,description,example],i)=>({id,name,description,example,icon:['ℹ️','✅','🔎','↩️','🗑️','⏸️','📦','🛑','⚖️','💰','🛡️'][i],defaultUrl:`right-request.html?right=${id}`}));
  const PROVINCES=['Hà Nội','TP. Hồ Chí Minh','Đà Nẵng','Hải Phòng','Cần Thơ','Hà Nam','Bắc Ninh','Quảng Ninh','Thanh Hóa','Khác'];
  const TERMS_SECTIONS=[
    ['Phạm vi áp dụng','Điều khoản này áp dụng cho website mô phỏng do VNDS xây dựng nhằm phục vụ đào tạo.'],
    ['Mục đích website','Website giúp minh họa quy trình đăng ký dịch vụ, thông báo xử lý dữ liệu, ghi nhận sự đồng ý, quản lý cookie và thực hiện quyền chủ thể dữ liệu.'],
    ['Trách nhiệm người dùng','Người dùng chỉ nên nhập dữ liệu giả lập, không sử dụng dữ liệu cá nhân thật hoặc thông tin bí mật.'],
    ['Thông tin cung cấp','Người dùng chịu trách nhiệm về tính phù hợp của thông tin được nhập trong kịch bản đào tạo.'],
    ['Thanh toán','Mọi nội dung thanh toán chỉ là mô phỏng, không phát sinh giao dịch tài chính thực tế.'],
    ['Giới hạn trách nhiệm','VNDS không chịu trách nhiệm đối với việc sử dụng website ngoài phạm vi đào tạo hoặc việc người dùng tự ý nhập dữ liệu thật.'],
    ['Bảo vệ dữ liệu cá nhân','Dữ liệu demo được lưu cục bộ trên trình duyệt bằng localStorage và có thể được xóa trong phần Cài đặt Demo.'],
    ['Thay đổi điều khoản','Nội dung demo có thể được điều chỉnh để phù hợp với từng kịch bản đào tạo.'],
    ['Giải quyết phản ánh','Mọi phản ánh trong website chỉ mang tính mô phỏng và không thay thế quy trình tiếp nhận chính thức.'],
    ['Thông tin liên hệ','Thông tin liên hệ hiển thị trong website là thông tin mô phỏng.']
  ];
  const PRIVACY_SECTIONS=[
    ['Giới thiệu','Chính sách này giải thích cách website mô phỏng thu thập và lưu dữ liệu trong quá trình đào tạo.'],
    ['Bên kiểm soát dữ liệu','Công ty Cổ phần An ninh Dữ liệu Việt Nam – VNDS, trong phạm vi kịch bản mô phỏng.'],
    ['Loại dữ liệu được xử lý','Họ tên, số điện thoại, email, ngày sinh, địa chỉ, thông tin định danh nếu người dùng tự cung cấp, nhu cầu sử dụng dịch vụ và trạng thái đồng ý.'],
    ['Mục đích xử lý','Tiếp nhận đăng ký, liên hệ, hỗ trợ, minh họa quy trình cung cấp dịch vụ và ghi nhận sự đồng ý.'],
    ['Phương thức thu thập','Dữ liệu được người dùng nhập trực tiếp vào biểu mẫu và được lưu cục bộ trên trình duyệt.'],
    ['Căn cứ xử lý và sự đồng ý','Các mục đích xử lý bắt buộc và không bắt buộc được trình bày riêng; các checkbox không được tích sẵn.'],
    ['Cookie và công nghệ theo dõi','Cookie Banner có thể được tích hợp bằng mã script do người đào tạo cung cấp trong phần Cài đặt Demo.'],
    ['Chia sẻ dữ liệu','Website không gửi dữ liệu tới backend. Mọi nội dung chia sẻ chỉ là trạng thái đồng ý mô phỏng.'],
    ['Thời gian lưu trữ','Dữ liệu được giữ trong localStorage cho đến khi người dùng xóa hoặc khôi phục cấu hình.'],
    ['Biện pháp bảo vệ','Website hạn chế hiển thị đầy đủ số định danh, kiểm tra URL và không sử dụng eval hoặc new Function.'],
    ['Rủi ro có thể phát sinh','Dữ liệu có thể bị người khác nhìn thấy nếu dùng chung trình duyệt hoặc thiết bị. Vì vậy chỉ nên nhập dữ liệu giả lập.'],
    ['Quyền của chủ thể dữ liệu','Người dùng có thể truy cập trang quyền và gửi yêu cầu mô phỏng cho từng loại quyền.'],
    ['Rút lại sự đồng ý','Người dùng có thể tạo yêu cầu rút lại sự đồng ý tại trang Quyền của chủ thể dữ liệu.'],
    ['Thông tin liên hệ','Thông tin liên hệ trong website là mô phỏng và không phải kênh tiếp nhận chính thức.'],
    ['Cập nhật chính sách','Chính sách có thể được cập nhật để phục vụ nội dung đào tạo.']
  ];
  return {COMPANY_INFO,PRODUCTS,RIGHTS,PROVINCES,TERMS_SECTIONS,PRIVACY_SECTIONS};
})();
