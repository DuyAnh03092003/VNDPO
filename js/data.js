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
      id: 'data-security-software',
      serviceId: '75998375272500029',
      acronym: 'SGO',
      name: 'Phần mềm an ninh dữ liệu',
      category: 'Phần mềm',
      description:
        'Phần mềm an ninh dữ liệu cung cấp các công cụ và giải pháp để bảo vệ thông tin cá nhân và dữ liệu nhạy cảm của người dùng.',
      icon: '🏢',
      collectedData: [
        'Họ và tên',
        'Số điện thoại',
        'Email',
        'Số CCCD hoặc giấy tờ định danh'
      ],
      purposes: [
        'Marketing và quảng cáo sản phẩm',
        'Xác minh thông tin khách hàng',
        'Cung cấp và hỗ trợ dịch vụ'
      ]
    }
  ];
  const RIGHTS = [
    {
      id: 'withdraw-consent',
      name: 'Quyền rút lại sự đồng ý',
      description:
        'Rút lại sự đồng ý đã cung cấp trước đó.',
      example:
        'Dừng nhận email giới thiệu sản phẩm.',
      icon: '↩️',

      defaultUrl:
        ''
    },
    {
      id: 'self-protection',
      name: 'Quyền khác của chủ thể dữ liệu',
      description:
        'Yêu cầu thực hiện các biện pháp liên quan đến việc bảo vệ dữ liệu cá nhân.',
      example:
        'Gửi yêu cầu khác phát sinh trong quá trình xử lý dữ liệu cá nhân.',
      icon: '🛡️',

      defaultUrl:
        ''
    }
  ];
  const PROVINCES = ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ', 'Hà Nam', 'Bắc Ninh', 'Quảng Ninh', 'Thanh Hóa', 'Khác'];
  const TERMS_SECTIONS = [
    [
      'Điều 1: Bản quyền và thương hiệu',
      `Nền tảng này và toàn bộ nội dung trên Nền tảng, bao gồm nhưng không giới hạn ở nhãn hiệu, tên thương mại, mẫu logo công ty hoặc sản phẩm, kiểu dáng sản phẩm, văn bản, thiết kế, đồ họa, giao diện, hình ảnh và mã nguồn, đều thuộc quyền sở hữu của Công ty Cổ phần An ninh Dữ liệu Việt Nam (“VNDS”) hoặc bên thứ ba cấp phép cho VNDS và được bảo hộ theo quy định của pháp luật Việt Nam về sở hữu trí tuệ cùng các văn bản pháp luật có liên quan.

Mọi hành vi sao chép, trích dẫn, sửa đổi, phân phối, xuất bản hoặc lưu thông nội dung của Nền tảng vì mục đích thương mại dưới bất kỳ hình thức nào mà không có sự chấp thuận trước bằng văn bản của VNDS hoặc không thuộc phạm vi thỏa thuận hợp tác với VNDS đều được xem là hành vi xâm phạm quyền của VNDS.

VNDS có quyền yêu cầu Người sử dụng chấm dứt hành vi vi phạm và bồi thường thiệt hại, nếu có, theo quy định của pháp luật.`
    ],

    [
      'Điều 2: Quyền và nghĩa vụ của VNDS',
      `1. VNDS có quyền thay đổi hoặc chấm dứt một phần hay toàn bộ nội dung, tính năng của Nền tảng mà không cần thông báo trước cho Người sử dụng, với điều kiện việc thay đổi hoặc chấm dứt không làm thay đổi, biến dạng, mất hoặc phát sinh dữ liệu do Người sử dụng đã cung cấp và lưu trữ trên DataTrust; đồng thời không làm thay đổi mục đích và phạm vi xử lý dữ liệu cá nhân của Người sử dụng.

2. VNDS có quyền áp dụng các biện pháp an ninh nhằm bảo vệ Nền tảng và ngăn chặn hành vi truy cập, sửa đổi, tiết lộ hoặc phá hủy thông tin trái phép.

3. VNDS không chịu trách nhiệm đối với sự chậm trễ, gián đoạn, lỗi hoặc thất bại phát sinh trong quá trình Người sử dụng truy cập và sử dụng Nền tảng nếu sự cố xuất phát từ nguyên nhân ngoài khả năng kiểm soát của VNDS, bao gồm lỗi đường truyền mạng, sự cố kỹ thuật, lỗi trên thiết bị của Người sử dụng hoặc hệ thống của bên thứ ba.

4. Nền tảng có thể hiển thị các liên kết đến trang thông tin hoặc dịch vụ của bên thứ ba để tạo thuận tiện cho Người sử dụng. VNDS không kiểm soát nội dung của các trang này và không chịu trách nhiệm đối với việc Người sử dụng truy cập hoặc sử dụng các liên kết đó.

Người sử dụng phải tự cân nhắc và tự chịu trách nhiệm khi truy cập trang thông tin hoặc dịch vụ của bên thứ ba. VNDS cũng không chịu trách nhiệm đối với nội dung của các website được mở trong cửa sổ hoặc tab mới từ đường dẫn xuất hiện trên Nền tảng.

5. VNDS được phép sử dụng các ý tưởng hoặc khái niệm do Người sử dụng đưa lên Nền tảng cho các mục đích phù hợp, bao gồm việc nghiên cứu, phát triển, sản xuất hoặc tiếp thị sản phẩm. VNDS không có trách nhiệm phải bồi thường hoặc trả thưởng cho người cung cấp ý tưởng hoặc khái niệm đó, trừ khi các bên có thỏa thuận khác bằng văn bản.`
    ],

    [
      'Điều 3: Quyền và nghĩa vụ của Người sử dụng',
      `1. Người sử dụng hiểu và đồng ý rằng Nền tảng có thể cung cấp các công cụ kỹ thuật nhằm hỗ trợ thu thập, chuẩn hóa và tổng hợp dữ liệu để hoàn thiện hồ sơ, biểu mẫu hành chính.

Nền tảng không cung cấp dịch vụ tư vấn pháp lý và không đưa ra bất kỳ bảo đảm nào về kết quả giải quyết hồ sơ. Mọi hướng dẫn, gợi ý hoặc nội dung hiển thị trên Nền tảng chỉ mang tính chất tham khảo, không thay thế quy định pháp luật hoặc hướng dẫn chính thức của cơ quan có thẩm quyền.

2. Người sử dụng phải tuân thủ pháp luật và các quy định có liên quan khi truy cập, sử dụng Nền tảng; không được can thiệp hoặc gây ảnh hưởng đến việc sử dụng Nền tảng của người khác; không được can thiệp vào hoạt động hoặc quá trình quản lý Nền tảng.

Người sử dụng đồng ý bồi thường cho VNDS toàn bộ thiệt hại thực tế phát sinh từ việc vi phạm các cam kết tại Điều này hoặc thực hiện hành vi bị nghiêm cấm quy định tại Điều 4 của Điều khoản sử dụng.

3. Mọi thông tin, dữ liệu và tài liệu do Người sử dụng nhập, tải lên hoặc cung cấp trên Nền tảng phải thuộc quyền sở hữu, quyền sử dụng hợp pháp của Người sử dụng hoặc của bên mà Người sử dụng được phép đại diện.

Việc cung cấp thông tin, dữ liệu và tài liệu cho Nền tảng không làm chuyển giao quyền sở hữu cho VNDS. Tuy nhiên, Người sử dụng đồng ý cho VNDS sử dụng những thông tin, dữ liệu và tài liệu đó trong phạm vi cần thiết để vận hành Nền tảng và cung cấp dịch vụ theo Điều khoản sử dụng.

4. Người sử dụng chịu trách nhiệm hoàn toàn về tính chính xác, đầy đủ và hợp pháp của mọi thông tin, dữ liệu và tài liệu cung cấp cho Nền tảng.

Người sử dụng cam kết có đầy đủ quyền và sự đồng ý cần thiết của các bên liên quan, nếu có, đồng thời chịu trách nhiệm đối với mọi hậu quả phát sinh từ việc cung cấp thông tin không chính xác, không đầy đủ, trái pháp luật hoặc sai sự thật.`
    ],

    [
      'Điều 4: Các hành vi bị nghiêm cấm',
      `Người sử dụng không được thực hiện các hành vi sau:

1. Sử dụng thông tin hoặc tiện ích của Nền tảng vì mục đích thương mại khi chưa có sự đồng ý bằng văn bản hoặc thỏa thuận hợp tác với VNDS.

2. Cố ý thay đổi, dịch ngược, đảo ngược hoặc can thiệp vào mã nguồn của Nền tảng.

3. Cố ý đánh cắp thông tin hoặc giành quyền truy cập trái phép vào Nền tảng.

4. Truy vấn API theo cách gây thiệt hại cho máy chủ của VNDS hoặc can thiệp vào hoạt động API của người sử dụng khác.

5. Sử dụng hoặc cố gắng sử dụng API để đưa phần mềm độc hại, mã độc hoặc thực hiện bất kỳ hành vi xâm nhập nào vào máy chủ của VNDS.

6. Truy cập hoặc sử dụng Nền tảng, dù cố ý hay vô ý, theo cách có khả năng gây tổn hại cho VNDS, người sử dụng khác hoặc vi phạm quy định của pháp luật.`
    ],

    [
      'Điều 5: Bồi thường thiệt hại',
      `1. Trong phạm vi tối đa được pháp luật cho phép, VNDS không chịu trách nhiệm bồi thường đối với các thiệt hại gián tiếp, thiệt hại hệ quả, thiệt hại ngẫu nhiên, thiệt hại đặc biệt, mất lợi nhuận, mất cơ hội kinh doanh, mất dữ liệu hoặc tổn thất phi vật chất phát sinh từ hoặc liên quan đến việc Người sử dụng truy cập, sử dụng hoặc không thể sử dụng Nền tảng.

2. Tổng trách nhiệm bồi thường của VNDS, nếu có, đối với mọi khiếu nại, yêu cầu hoặc tranh chấp phát sinh từ hoặc liên quan đến Nền tảng sẽ không vượt quá tổng giá trị phí dịch vụ mà Người sử dụng đã thanh toán cho VNDS trong vòng 03 tháng gần nhất tính đến thời điểm phát sinh yêu cầu bồi thường.`
    ],

    [
      'Điều 6: Điều khoản chung',
      `1. Điều khoản sử dụng này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh chấp, khiếu nại hoặc trách nhiệm phát sinh liên quan đến Điều khoản sử dụng sẽ được giải quyết tại Tòa án nhân dân có thẩm quyền của Việt Nam.

2. Trường hợp một nội dung của Điều khoản sử dụng bị tuyên vô hiệu theo quyết định của Tòa án có thẩm quyền, hiệu lực và khả năng thi hành của các nội dung còn lại sẽ không bị ảnh hưởng.

3. Đối với bất kỳ hành vi vi phạm nào liên quan đến Điều khoản sử dụng, VNDS có quyền áp dụng các biện pháp xử lý được pháp luật cho phép.

4. VNDS luôn hoan nghênh ý kiến đóng góp và phản hồi từ Người sử dụng. Những ý kiến đóng góp sẽ giúp VNDS tiếp tục hoàn thiện Nền tảng và các dịch vụ được cung cấp.

5. Thông tin tiếp nhận góp ý:

Công ty Cổ phần An ninh Dữ liệu Việt Nam
Tên tiếng Anh: Viet Nam Data Security JSC

Điện thoại/Hotline: 08 866 791 85

Email: info@datasecurity.vn

Địa chỉ: Trung tâm Đổi mới sáng tạo Quốc gia, Tòa nhà NIC, số 6 ngõ 7 Tôn Thất Thuyết, Cầu Giấy, Hà Nội.`
    ]
  ];
  const PRIVACY_SECTIONS = [
    [
      'Điều 1: Giải thích từ ngữ',
      `1. “Thông Tin Bảo Mật” bao gồm các điều kiện, điều khoản của Chính Sách; thông tin xác thực nhận diện của các bên; cùng mọi thông tin, tài liệu được Bên Tiết Lộ Thông Tin cung cấp cho Bên Nhận Thông Tin trong quá trình thảo luận, đàm phán hoặc thực hiện Chính Sách.

Thông Tin Bảo Mật bao gồm nhưng không giới hạn ở dữ liệu khách hàng, nhà cung cấp, bí mật thương mại, bí quyết, ý tưởng, nghiên cứu, sáng chế, kế hoạch kinh doanh, thông tin tiếp thị, tài chính, kỹ thuật, thương mại, mã phần mềm, thuật toán, thư điện tử và dữ liệu liên quan đến một cá nhân đã hoặc có thể được xác định.

2. “Bên Liên Kết” là cá nhân, tổ chức hoặc doanh nghiệp trực tiếp hoặc gián tiếp kiểm soát, bị kiểm soát bởi hoặc chịu sự kiểm soát chung với một Bên, bao gồm công ty mẹ, công ty con và đơn vị phụ thuộc.

3. “Đại Diện” gồm Bên Liên Kết, giám đốc, người quản lý, cán bộ, nhân viên, nhà thầu và các đơn vị tư vấn chuyên nghiệp cần biết Thông Tin Bảo Mật để thực hiện Mục Đích.

4. “Mục Đích” là việc các Bên thảo luận, làm việc và đánh giá cơ hội hợp tác, bao gồm cung ứng quyền truy cập, sử dụng DataTrust và các sản phẩm, dịch vụ liên quan.`
    ],

    [
      'Điều 2: Thông Tin Loại Trừ',
      `Thông Tin Bảo Mật không bao gồm:

1. Thông tin đã hoặc sẽ được công khai mà không xuất phát từ hành vi vi phạm Chính Sách này.

2. Thông tin đã được biết đến, có thể tìm kiếm trên phương tiện thông tin đại chúng hoặc đã được tiết lộ hợp pháp cho Bên Nhận Thông Tin trước khi được Bên Tiết Lộ Thông Tin cung cấp và có tài liệu chứng minh.

3. Thông tin được nhận hợp pháp từ bên thứ ba mà không kèm theo hạn chế bảo mật tương tự.

4. Thông tin được Bên Nhận Thông Tin phát triển độc lập, không dựa trên bất kỳ Thông Tin Bảo Mật nào và có chứng cứ chứng minh.

5. Thông tin được Bên Tiết Lộ Thông Tin cho phép tiết lộ bằng văn bản.

6. Thông tin được Bên Nhận Thông Tin mua lại hợp pháp từ một bên thứ ba không vi phạm nghĩa vụ bảo mật hoặc bất kỳ thỏa thuận liên quan nào.`
    ],

    [
      'Điều 3: Sử dụng và tiết lộ Thông Tin Bảo Mật',
      `1. Bên Nhận Thông Tin chỉ được sử dụng Thông Tin Bảo Mật để thực hiện Mục Đích. Việc tiết lộ cho cá nhân, tổ chức hoặc Bên Liên Kết khác phải có sự đồng ý bằng văn bản của Bên Tiết Lộ Thông Tin, trừ các trường hợp được Chính Sách này cho phép.

2. Bên Nhận Thông Tin phải áp dụng các biện pháp hợp lý để ngăn chặn việc tiết lộ, lan truyền hoặc sử dụng trái phép Thông Tin Bảo Mật. Khi phát hiện hoặc dự đoán có vi phạm, Bên Nhận Thông Tin phải thông báo ngay cho Bên Tiết Lộ Thông Tin và phối hợp xử lý.

3. Bên Nhận Thông Tin không bị coi là vi phạm nghĩa vụ bảo mật khi:

a. Việc tiết lộ đã được Bên Tiết Lộ Thông Tin chấp thuận bằng văn bản.

b. Thông Tin Bảo Mật được cung cấp trên cơ sở bảo mật cho Đại Diện hoặc Nhân Sự cần biết thông tin để thực hiện Mục Đích. Bên Nhận Thông Tin phải thông báo cho những người này về tính bảo mật của thông tin và chịu trách nhiệm nếu họ vi phạm nghĩa vụ bảo mật.

c. Thông Tin Bảo Mật được cung cấp cho cơ quan nhà nước có thẩm quyền theo yêu cầu hoặc quy định của pháp luật.`
    ],

    [
      'Điều 4: Nhân Sự và Bên Liên Kết của Bên Nhận Thông Tin',
      `Bên Nhận Thông Tin chỉ cho phép giám đốc, nhân sự cấp cao, người lao động, nhà thầu, đại lý, đơn vị tư vấn pháp lý, kế toán và các tổ chức chịu sự kiểm soát của mình tiếp cận Thông Tin Bảo Mật khi:

1. Người đó thực sự cần biết thông tin để thực hiện Mục Đích.

2. Người đó đã được thông báo về tính bảo mật của thông tin.

3. Người đó có nghĩa vụ bảo vệ Thông Tin Bảo Mật phù hợp với Chính Sách này.

Mỗi Bên phải bảo đảm Bên Liên Kết và Người Đại Diện của mình tuân thủ đầy đủ các quy định của Chính Sách.`
    ],

    [
      'Điều 5: Phạm vi và thời hạn áp dụng',
      `Chính Sách áp dụng đối với Thông Tin Bảo Mật được tiết lộ trước, tại hoặc sau thời điểm các Bên giao kết thỏa thuận hoặc bắt đầu quan hệ hợp tác để thực hiện Mục Đích.

Chính Sách có hiệu lực kể từ Ngày Hiệu Lực và tiếp tục tồn tại vô thời hạn, kể cả khi quan hệ hợp tác giữa Bên Nhận Thông Tin và Bên Tiết Lộ Thông Tin đã chấm dứt, trừ khi các Bên có thỏa thuận khác bằng văn bản.`
    ],

    [
      'Điều 6: Tiết lộ cho cơ quan nhà nước',
      `Khi phải tiết lộ Thông Tin Bảo Mật theo thủ tục pháp lý, tố tụng, hành chính hoặc yêu cầu của cơ quan nhà nước có thẩm quyền, Bên Nhận Thông Tin phải thông báo bằng văn bản cho Bên Tiết Lộ Thông Tin trước khi tiết lộ, trừ trường hợp pháp luật có quy định khác.

Bên Nhận Thông Tin chỉ được tiết lộ trong phạm vi thông tin được yêu cầu và phải nỗ lực duy trì tính bảo mật của thông tin, bao gồm việc phối hợp với Bên Tiết Lộ Thông Tin để áp dụng trình tự bảo mật hoặc biện pháp bảo vệ phù hợp.`
    ],

    [
      'Điều 7: Tính chất của Thông Tin Bảo Mật',
      `Thông Tin Bảo Mật được cung cấp theo nguyên trạng.

Bên Tiết Lộ Thông Tin có toàn quyền quyết định việc tiết lộ và không đưa ra cam kết hoặc bảo đảm rõ ràng hay ngụ ý về tính chính xác, đầy đủ hoặc hợp lý của thông tin.

Bên Tiết Lộ Thông Tin, Bên Liên Kết và Đại Diện của Bên Tiết Lộ Thông Tin không chịu trách nhiệm đối với việc sử dụng Thông Tin Bảo Mật hoặc những tổn thất trực tiếp, gián tiếp hay phát sinh do Bên Nhận Thông Tin dựa vào nội dung được cung cấp.`
    ],

    [
      'Điều 8: Quyền sở hữu và không cấp quyền',
      `1. Quyền sở hữu

Mọi Thông Tin Bảo Mật và thông tin được tạo ra hoặc có nguồn gốc từ Thông Tin Bảo Mật đều thuộc quyền sở hữu của Bên Tiết Lộ Thông Tin.

Việc cung cấp thông tin không làm phát sinh quyền sở hữu, quyền chuyển nhượng, quyền cấp phép hoặc bất kỳ quyền nào khác cho Bên Nhận Thông Tin, Bên Liên Kết hoặc Người Đại Diện của họ.

Việc chuyển nhượng hoặc chuyển giao quyền sở hữu Thông Tin Bảo Mật phải được lập thành văn bản và có chữ ký, con dấu của người đại diện hợp pháp có thẩm quyền của mỗi Bên.

2. Không cấp quyền

Việc tiết lộ Thông Tin Bảo Mật không được hiểu là việc cấp cho Bên Nhận Thông Tin bất kỳ quyền nào đối với sáng chế, quyền tác giả, bí mật kinh doanh, nhãn hiệu hoặc quyền sở hữu trí tuệ khác của Bên Tiết Lộ Thông Tin.

Không Bên nào được sử dụng tên thương mại, nhãn hiệu, biểu tượng hoặc đặc quyền của Bên còn lại khi chưa có sự chấp thuận trước bằng văn bản.`
    ],

    [
      'Điều 9: Trả lại Thông Tin Bảo Mật và thông báo sử dụng trái phép',
      `1. Trả lại hoặc xóa Thông Tin Bảo Mật

Khi Chính Sách chấm dứt hoặc khi nhận được yêu cầu của Bên Tiết Lộ Thông Tin, Bên Nhận Thông Tin phải trả lại hoặc xóa Thông Tin Bảo Mật khỏi máy tính, thiết bị điện tử và các phương tiện lưu trữ khác; đồng thời hủy các bản sao bằng giấy.

Việc trả lại, xóa hoặc hủy thông tin phải được thực hiện trong vòng 07 ngày làm việc kể từ ngày có yêu cầu hoặc ngày ngừng hợp tác. Bên Nhận Thông Tin phải cung cấp xác nhận bằng văn bản về việc đã hoàn thành nghĩa vụ này.

2. Thông báo sử dụng trái phép

Khi phát hiện hành vi vi phạm, các Bên phải thông báo cho nhau và thực hiện biện pháp khắc phục kịp thời.

Bên Tiết Lộ Thông Tin có quyền kiểm tra, cập nhật, điều chỉnh, hủy bỏ hoặc yêu cầu xóa Thông Tin Bảo Mật bằng cách thao tác trên ứng dụng DataTrust hoặc liên hệ với Người Đại Diện của Bên Nhận Thông Tin.`
    ],

    [
      'Điều 10: Không có nghĩa vụ giao kết hợp đồng',
      `Chính Sách này và các tài liệu, thông tin hoặc nội dung trao đổi giữa các Bên không tạo thành lời đề nghị, lời mời, cam kết hoặc nghĩa vụ phải giao kết hợp đồng.

Nghĩa vụ hợp đồng chỉ phát sinh khi các Bên ký kết một thỏa thuận cụ thể, riêng biệt và có hiệu lực pháp lý.`
    ],

    [
      'Điều 11: Điều khoản chung',
      `1. Chính Sách này thể hiện toàn bộ thỏa thuận giữa các Bên về bảo mật thông tin và thay thế các trao đổi hoặc thỏa thuận trước đó có cùng nội dung. Mọi sửa đổi, bổ sung hoặc chuyển nhượng phải được các Bên chấp thuận bằng văn bản.

2. Bên vi phạm phải bồi thường thiệt hại thực tế, trực tiếp, gián tiếp và thiệt hại gây ra cho bên thứ ba theo quy định của pháp luật.

3. Việc một Bên không thực hiện, thực hiện không đúng hoặc trì hoãn thực hiện quyền của mình không được xem là từ bỏ quyền đó.

4. Bên Nhận Thông Tin phải áp dụng các biện pháp cần thiết để bảo vệ Thông Tin Bảo Mật. Tuy nhiên, dữ liệu truyền qua Internet không thể được bảo đảm an toàn tuyệt đối. Bên Nhận Thông Tin không chịu trách nhiệm đối với việc truy cập trái phép nằm ngoài khả năng kiểm soát hoặc việc Bên Tiết Lộ Thông Tin tự ý chia sẻ thông tin.

5. Bên Tiết Lộ Thông Tin có trách nhiệm bảo mật tài khoản và mật khẩu truy cập dịch vụ, không chia sẻ cho người khác. Bên Nhận Thông Tin không chịu trách nhiệm đối với thiệt hại phát sinh do Bên Tiết Lộ Thông Tin làm lộ thông tin đăng nhập.

6. Thông tin liên hệ:

Hotline: 08 866 79185

Email: info@datasecurity.vn

Địa chỉ: Công ty Cổ phần An ninh Dữ liệu Việt Nam, Trung tâm Đổi mới Sáng tạo Quốc gia, Tòa nhà NIC, số 6 Ngõ 7 Tôn Thất Thuyết, Cầu Giấy, Hà Nội.

Các Bên có thể gặp và trao đổi trực tiếp với Người Đại Diện của Bên Nhận Thông Tin tại thời gian, địa điểm được thống nhất. Bên Tiết Lộ Thông Tin cần thông báo trước ít nhất 03 ngày.`
    ]
  ];
  return { COMPANY_INFO, PRODUCTS, RIGHTS, PROVINCES, TERMS_SECTIONS, PRIVACY_SECTIONS };
})();
