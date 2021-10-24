

const activeBtn = document.querySelector('.header__rightsidemenu-btn');
const closeBtn = document.querySelector('.rightside-menu__close');
const rightsideMenu = document.querySelector('.rightside-menu');


export function rightSideMenuOpen() {
    rightsideMenu.classList.add('active');
    activeBtn.classList.add('active');
    rightsideMenu.classList.remove('disactive');
    activeBtn.classList.remove('disactive');
}

export function rightsideMenuClose() {
    rightsideMenu.classList.remove('active');
    activeBtn.classList.remove('active');
    rightsideMenu.classList.add('disactive');
    activeBtn.classList.add('disactive');
}

export default function rightSideMenu() {
    if (rightsideMenu) {
        if (!rightsideMenu.classList.contains('active')) {
            rightsideMenu.classList.add('disactive');
            activeBtn.classList.add('disactive');
        } 
        rightsideMenu.addEventListener('click', (e) => {
            if (e.target != document.querySelector('.rightside-menu__body') && e.target === rightsideMenu) {
                rightsideMenuClose();
            }
        });
        activeBtn.addEventListener('click', () => {
            rightSideMenuOpen();
        });
        closeBtn.addEventListener('click', () => {
            rightsideMenuClose();
        })
    }
}
