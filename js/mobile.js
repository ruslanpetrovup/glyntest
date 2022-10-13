const buttonOpen = document.querySelector(".mobile-menu");
const backdrop = document.querySelector(".backdrop");
const buttonClose = document.querySelector(".backdrop-close");
const buttonCategories = document.getElementById("categories");
const openMenu = () => {
  backdrop.classList.toggle("active");
  if (backdrop.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};
const openCategoriest = () => {
  document.querySelector(".categories-list-mobile").classList.toggle("active");
  document.querySelector(".categories-icon-mobile").classList.toggle("active");
};
buttonOpen.addEventListener("click", openMenu);
buttonClose.addEventListener("click", openMenu);
buttonCategories.addEventListener("click", openCategoriest);
