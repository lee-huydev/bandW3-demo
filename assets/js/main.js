// ! MODAL
const buyTickets = document.querySelectorAll(".js-buyTicket");
const modal = document.querySelector(".jsModal");
const exit = document.querySelector(".jsClose");

function openModal() {
  modal.classList.add("modalOpen");
}

for (const buyTicket of buyTickets) {
  buyTicket.addEventListener("click", openModal);
}
exit.addEventListener("click", closeModal);
function closeModal() {
  modal.classList.remove("modalOpen");
}

// ! MENU MOBILE
// Open nav when click on ti menu and close when click again

const menuMobile = document.querySelector(".js-menuMobile");
const btnMenu = document.querySelector(".menu-mobile");
const headerHeight = menuMobile.clientHeight;
function openMenu() {
  if (menuMobile.clientHeight === headerHeight) {
    menuMobile.classList.remove("nav-mobile");
  } else {
    menuMobile.classList.add("nav-mobile");
  }
}
btnMenu.addEventListener("click", openMenu);

// auto close nav when click on home band tour....
const listNavS = document.querySelectorAll('.js-nav li a[href*="#"]');
for (var listNav of listNavS) {
  listNav.addEventListener("click", closeNav);
}
function closeNav() {
  menuMobile.classList.add("nav-mobile");
}
