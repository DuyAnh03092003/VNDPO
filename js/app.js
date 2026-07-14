document.addEventListener('DOMContentLoaded', () => {
  VNDS_LAYOUT.init();
  VNDS_SETTINGS.init();

  const fileName = window.location.pathname
    .split('/')
    .pop()
    .toLowerCase();

  const isIndexPage = !fileName || fileName === 'index.html';

  if (isIndexPage) {
    VNDS_COOKIE.applySaved();
  }

  VNDS_PRODUCTS.renderHome();
  VNDS_REGISTRATION.init();
  VNDS_RIGHTS.init();
  VNDS_RIGHT_REQUEST.init();
});