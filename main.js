const buttonMenuOpen = document.querySelector(`.open-menu-btn`);
const menuBlock = document.querySelector(`.mobile-menu`);
const closeMenu = document.querySelectorAll(`.mob-nav-link`);
const buttonMenuClose = document.querySelector(`.close-menu-btn`);

const listenFoo = () => {
  menuBlock.classList.toggle("is-open");
};

closeMenu.forEach((element) => {
  element.addEventListener("click", listenFoo);
});

function closeModal(event) {
  const target = event.target;
  if (
    target.classList.contains("mobile-menu") ||
    target.closeMenu ||
    target.buttonMenuClose
  ) {
    menuBlock.classList.toggle("is-open");
  }
}

menuBlock.addEventListener("click", closeModal);
buttonMenuOpen.addEventListener("click", listenFoo);
buttonMenuClose.addEventListener("click", listenFoo);
