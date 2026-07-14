window.VNDS_COOKIE = (() => {
  const loaded = new Set();

  const SCRIPT_SELECTOR =
    'script[data-demo-cookie-script]';

  /**
   * Kiểm tra trang hiện tại có phải trang index hay không.
   *
   * Hỗ trợ:
   * - /
   * - /index.html
   * - /folder/
   * - /folder/index.html
   */
  function isIndexPage() {
    const pathname = window.location.pathname;
    const fileName = pathname
      .split('/')
      .pop()
      .toLowerCase();

    return !fileName || fileName === 'index.html';
  }

  /**
   * Parse đoạn HTML và lấy danh sách thẻ script.
   */
  function parseScripts(code) {
    const parsedDocument = new DOMParser().parseFromString(
      `<body>${code}</body>`,
      'text/html'
    );

    return [
      ...parsedDocument.querySelectorAll('script')
    ];
  }

  /**
   * Tạo chuỗi nhận diện một script.
   */
  function signature(script) {
    return (
      script.getAttribute('src') ||
      script.textContent.trim()
    );
  }

  /**
   * Tạo mã đánh dấu ngắn cho script.
   */
  function createMarker(value) {
    let hash = 2166136261;

    for (
      let index = 0;
      index < value.length;
      index += 1
    ) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }

    return `vnds-${(hash >>> 0).toString(36)}`;
  }

  /**
   * Xóa các thẻ Cookie Script do website demo đã chèn.
   *
   * Sự kiện được phát trước và sau khi xóa để thư viện
   * Cookie Banner có thể thực hiện cleanup nếu cần.
   */
  function removeLoadedScripts() {
    window.dispatchEvent(
      new CustomEvent(
        'vnds:before-cookie-script-remove'
      )
    );

    document
      .querySelectorAll(SCRIPT_SELECTOR)
      .forEach((script) => {
        script.remove();
      });

    loaded.clear();

    window.dispatchEvent(
      new CustomEvent(
        'vnds:cookie-script-removed'
      )
    );
  }

  /**
   * Chèn đoạn Cookie Script vào trang.
   *
   * Cookie Script chỉ được phép chèn vào index.html.
   */
  function loadScriptCode(code, options = {}) {
    if (!isIndexPage()) {
      return 0;
    }

    const {
      replaceExisting = false
    } = options;

    const scripts = parseScripts(code);

    if (!scripts.length) {
      throw new Error(
        'Không tìm thấy thẻ script hợp lệ.'
      );
    }

    /*
     * Khi áp dụng script mới,
     * xóa toàn bộ script cũ trước.
     */
    if (replaceExisting) {
      removeLoadedScripts();
    }

    let loadedCount = 0;

    scripts.forEach((sourceScript) => {
      const scriptSignature =
        signature(sourceScript);

      if (!scriptSignature) {
        return;
      }

      const marker =
        createMarker(scriptSignature);

      const existingScript =
        document.querySelector(
          `${SCRIPT_SELECTOR}` +
          `[data-demo-cookie-script="${marker}"]`
        );

      /*
       * Không tải trùng script.
       */
      if (
        loaded.has(scriptSignature) ||
        existingScript
      ) {
        return;
      }

      const newScript =
        document.createElement('script');

      /*
       * Chỉ sao chép các thuộc tính được cho phép.
       */
      [
        'src',
        'type',
        'crossorigin',
        'integrity',
        'referrerpolicy'
      ].forEach((attribute) => {
        if (
          sourceScript.hasAttribute(attribute)
        ) {
          newScript.setAttribute(
            attribute,
            sourceScript.getAttribute(attribute)
          );
        }
      });

      if (
        sourceScript.hasAttribute('async')
      ) {
        newScript.async = true;
      }

      if (
        sourceScript.hasAttribute('defer')
      ) {
        newScript.defer = true;
      }

      /*
       * Sao chép các thuộc tính data-*.
       */
      [
        ...sourceScript.attributes
      ]
        .filter((attribute) =>
          attribute.name.startsWith('data-')
        )
        .forEach((attribute) => {
          newScript.setAttribute(
            attribute.name,
            attribute.value
          );
        });

      /*
       * Với script inline, sao chép nội dung.
       */
      if (
        !sourceScript.getAttribute('src')
      ) {
        newScript.textContent =
          sourceScript.textContent;
      }

      /*
       * Đánh dấu script do website demo chèn.
       */
      newScript.dataset.demoCookieScript =
        marker;

      document.head.appendChild(newScript);

      loaded.add(scriptSignature);
      loadedCount += 1;
    });

    return loadedCount;
  }

  /**
   * Xóa script cũ rồi chèn script mới.
   */
  function replaceScriptCode(code) {
    if (!isIndexPage()) {
      return 0;
    }

    return loadScriptCode(code, {
      replaceExisting: true
    });
  }

  /**
   * Đọc cấu hình đã lưu trong localStorage
   * và áp dụng Cookie Banner trên trang chủ.
   */
  function applySaved() {
    if (!isIndexPage()) {
      return;
    }

    const config =
      VNDS_STORAGE.getStorageItem(
        VNDS_STORAGE.KEYS.cookie,
        VNDS_STORAGE.defaults.cookie
      );

    /*
     * Nếu Cookie Banner đang tắt hoặc không có script,
     * xóa script đang tồn tại.
     */
    if (
      !config.enabled ||
      !config.scriptCode
    ) {
      removeLoadedScripts();
      return;
    }

    try {
      /*
       * Luôn xóa script cũ trước khi tải script đã lưu.
       */
      const loadedCount =
        replaceScriptCode(
          config.scriptCode
        );

      if (loadedCount > 0) {
        VNDS_STORAGE.setStorageItem(
          VNDS_STORAGE.KEYS.cookie,
          {
            ...config,
            lastLoadedAt:
              new Date().toISOString()
          }
        );
      }
    } catch (error) {
      console.warn(
        'Không thể tải Cookie Banner:',
        error
      );
    }
  }

  return {
    isIndexPage,
    parseScripts,
    loadScriptCode,
    replaceScriptCode,
    removeLoadedScripts,
    applySaved
  };
})();