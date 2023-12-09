const menuBurger = document.querySelector(".header__more");
const menu = document.querySelector(".header__menu");
const menuItem = document.querySelectorAll(".menu-header__el");

menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("more-active");
    menu.classList.toggle("menu-active");
});
for (let index = 0; index < menuItem.length; index++) {
    const el = menuItem[index];
    
    el.addEventListener('click', ()=> {
        menuBurger.classList.remove("more-active");
        menu.classList.remove("menu-active");
    });
};
