window.VNDS_DATA = (() => {
  const COMPANY_INFO = {
    shortName: 'VNDS', fullName: 'Công ty Cổ phần An ninh Dữ liệu Việt Nam',
    englishName: 'Vietnam Data Security Joint Stock Company', tagline: 'An ninh dữ liệu Việt Nam',
    demoNotice: 'Website mô phỏng do VNDS xây dựng phục vụ đào tạo – Không phải website cung cấp dịch vụ thực tế.'
  };
  const PRODUCTS = [
    {
      id: 'eoffice-service',
      serviceId: '75998369709814782',
      acronym: 'SGO',
      name: 'Dịch vụ eOffice',
      category: 'Dịch vụ',
      description:
        'Dịch vụ văn phòng điện tử hỗ trợ quản lý công việc, tài liệu và quy trình vận hành của doanh nghiệp.',
      icon: '🏢',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Tiếp nhận đăng ký dịch vụ',
        'Xác minh thông tin khách hàng',
        'Cung cấp và hỗ trợ dịch vụ'
      ]
    }
  ];
  const RIGHTS = [
    ['withdraw-consent', 'Quyền đồng ý', 'Cung cấp sự đồng ý', 'Cung cấp sự đồng ý cho việc xử lý dữ liệu cá nhân của mình.'],
    ['self-protection', 'Quyền khác của chủ thể dữ liệu', 'Yêu cầu biện pháp bảo vệ dữ liệu cá nhân của mình.', 'Yêu cầu củ chủ thể dữ liệu trong quá trình xử lý dữ liệu cá nhân.'],
  ].map(([id, name, description, example], i) => ({ id, name, description, example, icon: ['ℹ️', '✅', '🔎', '↩️', '🗑️', '⏸️', '📦', '🛑', '⚖️', '💰', '🛡️'][i], defaultUrl: `right-request.html?right=${id}` }));
  const PROVINCES = ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ', 'Hà Nam', 'Bắc Ninh', 'Quảng Ninh', 'Thanh Hóa', 'Khác'];
  const TERMS_SECTIONS = [
    ['Phạm vi áp dụng', 'Điều khoản này áp dụng cho website mô phỏng do VNDS xây dựng nhằm phục vụ đào tạo.'],
    ['Mục đích website', 'Website giúp minh họa quy trình đăng ký dịch vụ, thông báo xử lý dữ liệu, ghi nhận sự đồng ý, quản lý cookie và thực hiện quyền chủ thể dữ liệu.'],
    ['Trách nhiệm người dùng', 'Người dùng chỉ nên nhập dữ liệu giả lập, không sử dụng dữ liệu cá nhân thật hoặc thông tin bí mật.'],
    ['Thông tin cung cấp', 'Người dùng chịu trách nhiệm về tính phù hợp của thông tin được nhập trong kịch bản đào tạo.'],
    ['Thanh toán', 'Mọi nội dung thanh toán chỉ là mô phỏng, không phát sinh giao dịch tài chính thực tế.'],
    ['Giới hạn trách nhiệm', 'VNDS không chịu trách nhiệm đối với việc sử dụng website ngoài phạm vi đào tạo hoặc việc người dùng tự ý nhập dữ liệu thật.'],
    ['Bảo vệ dữ liệu cá nhân', 'Dữ liệu demo được lưu cục bộ trên trình duyệt bằng localStorage và có thể được xóa trong phần Cài đặt Demo.'],
    ['Thay đổi điều khoản', 'Nội dung demo có thể được điều chỉnh để phù hợp với từng kịch bản đào tạo.'],
    ['Giải quyết phản ánh', 'Mọi phản ánh trong website chỉ mang tính mô phỏng và không thay thế quy trình tiếp nhận chính thức.'],
    ['Thông tin liên hệ', 'Thông tin liên hệ hiển thị trong website là thông tin mô phỏng.']
  ];
  const PRIVACY_SECTIONS = [
    ['Giới thiệu', 'Chính sách này giải thích cách website mô phỏng thu thập và lưu dữ liệu trong quá trình đào tạo.'],
    ['Bên kiểm soát dữ liệu', 'Công ty Cổ phần An ninh Dữ liệu Việt Nam – VNDS, trong phạm vi kịch bản mô phỏng.'],
    ['Loại dữ liệu được xử lý', 'Họ và tên, số điện thoại, email, CCCD hoặc giấy tờ định danh và trạng thái đồng ý.'],
    ['Mục đích xử lý', 'Tiếp nhận đăng ký sử dụng sản phẩm và ghi nhận sự đồng ý của khách hàng.'],
    ['Phương thức thu thập', 'Dữ liệu được người dùng nhập trực tiếp vào biểu mẫu và được gửi tới API Consent đã cấu hình. Một bản ghi demo có thể được lưu trên trình duyệt.'],
    ['Căn cứ xử lý và sự đồng ý', 'Biểu mẫu có một ô đồng ý duy nhất, không được tích sẵn. Chỉ khi người dùng chủ động chọn, payload mới ghi nhận answer bằng 1.'],
    ['Cookie và công nghệ theo dõi', 'Cookie Banner có thể được tích hợp bằng mã script do người đào tạo cung cấp trong phần Cài đặt Demo.'],
    ['Truyền dữ liệu', 'Khi API Consent được kích hoạt, website gửi dữ liệu trực tiếp tới endpoint DataTrust bằng multipart/form-data.'],
    ['Thời gian lưu trữ', 'Dữ liệu được giữ trong localStorage cho đến khi người dùng xóa hoặc khôi phục cấu hình.'],
    ['Biện pháp bảo vệ', 'Website hạn chế hiển thị đầy đủ số định danh, kiểm tra URL và không sử dụng eval hoặc new Function.'],
    ['Rủi ro có thể phát sinh', 'Dữ liệu có thể bị người khác nhìn thấy nếu dùng chung trình duyệt hoặc thiết bị. Vì vậy chỉ nên nhập dữ liệu giả lập.'],
    ['Quyền của chủ thể dữ liệu', 'Người dùng có thể truy cập trang quyền và gửi yêu cầu mô phỏng cho từng loại quyền.'],
    ['Rút lại sự đồng ý', 'Người dùng có thể tạo yêu cầu rút lại sự đồng ý tại trang Quyền của chủ thể dữ liệu.'],
    ['Thông tin liên hệ', 'Thông tin liên hệ trong website là mô phỏng và không phải kênh tiếp nhận chính thức.'],
    ['Cập nhật chính sách', 'Chính sách có thể được cập nhật để phục vụ nội dung đào tạo.']
  ];
  return { COMPANY_INFO, PRODUCTS, RIGHTS, PROVINCES, TERMS_SECTIONS, PRIVACY_SECTIONS };
})();
