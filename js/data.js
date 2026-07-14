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
    },
    {
      id: 'pentest-gateway',
      serviceId: '75998361235541202',
      acronym: 'SGF',
      name: 'Pentest Gateway',
      category: 'Dịch vụ',
      description:
        'Dịch vụ kiểm thử an toàn thông tin nhằm phát hiện lỗ hổng và đánh giá mức độ an toàn của hệ thống.',
      icon: '🧪',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Tiếp nhận yêu cầu kiểm thử',
        'Xác minh thông tin khách hàng',
        'Tư vấn và cung cấp dịch vụ'
      ]
    },
    {
      id: 'gateway-school',
      serviceId: '75998306713942102',
      acronym: 'SGS',
      name: 'Gateway School',
      category: 'Sản phẩm phần mềm',
      description:
        'Nền tảng phần mềm phục vụ hoạt động đào tạo, quản lý học viên và cung cấp nội dung học tập trực tuyến.',
      icon: '🎓',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Tiếp nhận đăng ký học tập',
        'Quản lý thông tin học viên',
        'Cung cấp và hỗ trợ chương trình đào tạo'
      ]
    },
    {
      id: 'compliance-consulting',
      serviceId: '75998306713942103',
      acronym: 'TV',
      name: 'Tư vấn tuân thủ',
      category: 'Dịch vụ',
      description:
        'Dịch vụ tư vấn giúp doanh nghiệp đánh giá hiện trạng và xây dựng phương án tuân thủ về bảo vệ dữ liệu cá nhân.',
      icon: '📋',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Tiếp nhận nhu cầu tư vấn',
        'Liên hệ và xác minh thông tin',
        'Cung cấp phương án tư vấn phù hợp'
      ]
    },
    {
      id: 'datatrust-ce',
      serviceId: '75998306713942104',
      acronym: 'CE',
      name: 'Phần mềm DataTrust CE',
      category: 'Sản phẩm phần mềm',
      description:
        'Phần mềm hỗ trợ doanh nghiệp quản lý hoạt động tuân thủ và bảo vệ dữ liệu cá nhân.',
      icon: '🔐',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Tiếp nhận đăng ký sản phẩm',
        'Xác minh thông tin khách hàng',
        'Cung cấp và hỗ trợ sử dụng phần mềm'
      ]
    },
    {
      id: 'priority-services',
      serviceId: '75998306713942105',
      acronym: 'DS',
      name: 'Priority Services',
      category: 'Giải pháp & Dịch vụ',
      description:
        'Các dịch vụ ưu tiên gồm làm thủ tục nhanh, ưu tiên hành lý và ưu tiên lên máy bay.',
      icon: '⭐',
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
    },
    {
      id: 'guard-cyber-sentry',
      serviceId: '75998306713942106',
      acronym: 'GCS',
      name: 'GuardCyberSentry',
      category: 'Sản phẩm phần mềm',
      description:
        'Sản phẩm cung cấp các công cụ bảo mật mạng mạnh mẽ để bảo vệ hệ thống của doanh nghiệp.',
      icon: '🛡️',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Tiếp nhận đăng ký sản phẩm',
        'Xác minh thông tin khách hàng',
        'Cung cấp và hỗ trợ sản phẩm'
      ]
    },
    {
      id: 'defend-net',
      serviceId: '75998306713942107',
      acronym: 'DN',
      name: 'DefendNet',
      category: 'Sản phẩm phần mềm',
      description:
        'Sản phẩm cung cấp giải pháp bảo mật mạng đáng tin cậy cho doanh nghiệp và người dùng cá nhân.',
      icon: '🌐',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Tiếp nhận đăng ký sản phẩm',
        'Xác minh thông tin khách hàng',
        'Cung cấp và hỗ trợ sản phẩm'
      ]
    },
    {
      id: 'firewall-safe',
      serviceId: '75998306713942108',
      acronym: 'FWS',
      name: 'FirewallSafe',
      category: 'Sản phẩm phần mềm',
      description:
        'Sản phẩm cung cấp tường lửa mạng hàng đầu, giúp ngăn chặn các cuộc tấn công mạng.',
      icon: '🧱',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Tiếp nhận đăng ký sản phẩm',
        'Xác minh thông tin khách hàng',
        'Cung cấp và hỗ trợ sản phẩm'
      ]
    },
    {
      id: 'net-sentry',
      serviceId: '75998306713942109',
      acronym: 'CS',
      name: 'NetSentry',
      category: 'Sản phẩm phần mềm',
      description:
        'Sản phẩm cung cấp các công cụ an ninh mạng hiệu quả để bảo vệ doanh nghiệp.',
      icon: '📡',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Tiếp nhận đăng ký sản phẩm',
        'Xác minh thông tin khách hàng',
        'Cung cấp và hỗ trợ sản phẩm'
      ]
    },
    {
      id: 'defend-cyber-wall',
      serviceId: '75998306713942110',
      acronym: 'DC',
      name: 'DefendCyberWall',
      category: 'Giải pháp & Dịch vụ',
      description:
        'Dịch vụ tường lửa mạng giúp ngăn chặn các cuộc tấn công mạng và bảo vệ thông tin quan trọng.',
      icon: '🔥',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Tiếp nhận đăng ký giải pháp',
        'Xác minh thông tin khách hàng',
        'Cung cấp và hỗ trợ giải pháp'
      ]
    },
    {
      id: 'secure-shield-pro',
      serviceId: '75998306713942111',
      acronym: 'SSP',
      name: 'SecureShieldPro',
      category: 'Sản phẩm phần mềm',
      description:
        'Sản phẩm cung cấp bộ công cụ an ninh mạng toàn diện, từ phát hiện xâm nhập đến ngăn chặn mã độc.',
      icon: '🔒',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Tiếp nhận đăng ký sản phẩm',
        'Xác minh thông tin khách hàng',
        'Cung cấp và hỗ trợ sản phẩm'
      ]
    },
    {
      id: 'defend-pro',
      serviceId: '75998306713942112',
      acronym: 'DP',
      name: 'DefendPro',
      category: 'Sản phẩm phần mềm',
      description:
        'Sản phẩm cung cấp các công cụ bảo mật mạng mạnh mẽ để giúp doanh nghiệp hoạt động an toàn trên Internet.',
      icon: '⚔️',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Tiếp nhận đăng ký sản phẩm',
        'Xác minh thông tin khách hàng',
        'Cung cấp và hỗ trợ sản phẩm'
      ]
    },
    {
      id: 'guard-data',
      serviceId: '75998306713942113',
      acronym: 'GD',
      name: 'GuardData',
      category: 'Sản phẩm phần mềm',
      description:
        'Sản phẩm cung cấp giải pháp bảo mật mạng tiên tiến để bảo vệ hệ thống và dữ liệu khỏi các mối đe dọa.',
      icon: '🗄️',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Tiếp nhận đăng ký sản phẩm',
        'Xác minh thông tin khách hàng',
        'Cung cấp và hỗ trợ sản phẩm'
      ]
    },
    {
      id: 'net-wall',
      serviceId: '75998306713942114',
      acronym: 'NW',
      name: 'NetWall',
      category: 'Giải pháp & Dịch vụ',
      description:
        'Sản phẩm dịch vụ tường lửa mạng giúp ngăn chặn các cuộc tấn công và bảo vệ thông tin quan trọng.',
      icon: '🛡️',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Tiếp nhận đăng ký giải pháp',
        'Xác minh thông tin khách hàng',
        'Cung cấp và hỗ trợ giải pháp'
      ]
    },
    {
      id: 'safe-cyber',
      serviceId: '75998306713942115',
      acronym: 'SGuard',
      name: 'SafeCyber',
      category: 'Sản phẩm phần mềm',
      description:
        'Sản phẩm cung cấp các công cụ an ninh mạng đáng tin cậy để bảo vệ doanh nghiệp khỏi các mối đe dọa mạng.',
      icon: '🔐',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Tiếp nhận đăng ký sản phẩm',
        'Xác minh thông tin khách hàng',
        'Cung cấp và hỗ trợ sản phẩm'
      ]
    },
    {
      id: 'safety-shield',
      serviceId: '75998306713942116',
      acronym: 'SS',
      name: 'SafetyShield',
      category: 'Sản phẩm phần mềm',
      description:
        'Sản phẩm cung cấp giải pháp bảo mật mạng đơn giản nhưng mạnh mẽ, giúp bảo vệ doanh nghiệp khỏi các mối đe dọa mạng.',
      icon: '✅',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Tiếp nhận đăng ký sản phẩm',
        'Xác minh thông tin khách hàng',
        'Cung cấp và hỗ trợ sản phẩm'
      ]
    }
  ];
  const RIGHTS = [
    ['withdraw-consent', 'Quyền rút lại sự đồng ý', 'Rút lại sự đồng ý đã cung cấp trước đó.', 'Dừng nhận email giới thiệu sản phẩm.'],
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
