// Header-burger

function getBurgerMenu(inputSelector, labelSelector, menuSelector) {
  let input = document.querySelector(inputSelector),
    label = document.querySelector(labelSelector),
    menu = document.querySelector(menuSelector);

  document.addEventListener('click', (e) => {
    if (e.target !== menu && e.target !== input && e.target !== label) {
      input.checked = false;
    }
  });
}

getBurgerMenu('#check-menu', '#check-label', '.header-burger__menu');
getBurgerMenu('#check-contacts', '#check-contacts-label', '.header-burger__contacts-menu');