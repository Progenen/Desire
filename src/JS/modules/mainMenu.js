const menus = document.querySelectorAll('.header__menu');
const menusPlace = document.querySelector('.rightside-menu__place');

export default function mainMenu () {
    if (window.innerWidth <= 768) {
        menus.forEach(element => {
            menusPlace.append(element);
        });
    }
}