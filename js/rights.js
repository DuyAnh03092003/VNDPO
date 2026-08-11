window.VNDS_RIGHTS = (() => {
  function openRightModal(right, url) {
    const popupContent = document.createElement('div');

    const description = document.createElement('p');
    description.className = 'muted';
    description.textContent =
      `Bạn đang thực hiện: ${right.name}. Vui lòng hoàn thành thông tin trong biểu mẫu dưới đây.`;

    const iframe = document.createElement('iframe');

    // Hỗ trợ cả URL đầy đủ và đường dẫn nội bộ.
    iframe.src = new URL(url, window.location.href).href;
    iframe.title = `Thực hiện ${right.name}`;
    iframe.loading = 'lazy';

    iframe.style.cssText = `
      display: block;
      width: 100%;
      height: 65vh;
      margin-top: 16px;
      border: 1px solid #dfe3e8;
      border-radius: 8px;
      background: #ffffff;
    `;

    popupContent.append(description, iframe);

    VNDS_MODAL.open({
      title: right.name,
      content: popupContent,
      size: 'lg'
    });
  }

  function init() {
    const grid = document.getElementById('rightsGrid');
    if (!grid) return;

    VNDS_DATA.RIGHTS.forEach(right => {
      const card = document.createElement('article');
      card.className = 'card right-card';

      card.innerHTML = `
        <div class="card-icon">${right.icon}</div>
        <h3>${right.name}</h3>
        <p class="muted">${right.description}</p>

        <div class="right-example">
          <strong>Ví dụ:</strong> ${right.example}
        </div>

        <button
          type="button"
          class="btn btn-primary"
          data-right="${right.id}"
        >
          Thực hiện quyền
        </button>
      `;

      grid.appendChild(card);
    });

    grid.addEventListener('click', event => {
      const button = event.target.closest('[data-right]');
      if (!button) return;

      const id = button.dataset.right;

      const right = VNDS_DATA.RIGHTS.find(item => item.id === id);

      const cfg = VNDS_STORAGE
        .getStorageItem(
          VNDS_STORAGE.KEYS.rights,
          VNDS_STORAGE.defaults.rights
        )
        .find(item => item.id === id);

      if (!cfg?.url) {
        VNDS_MODAL.open({
          title: 'Chưa cấu hình đường dẫn',
          content:
            '<p>Đường dẫn thực hiện quyền này chưa được cấu hình. Vui lòng sử dụng nút Cài đặt Demo để bổ sung đường dẫn.</p>',
          size: 'sm'
        });

        return;
      }

      if (!VNDS_UTILS.isValidUrl(cfg.url)) {
        VNDS_TOAST.show('URL đã cấu hình không hợp lệ.', 'error');
        return;
      }

      openRightModal(
        right || {
          name: 'Thực hiện quyền'
        },
        cfg.url
      );
    });
  }

  return { init };
})();