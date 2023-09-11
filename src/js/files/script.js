// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, menuClose } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";



window.addEventListener('load', pageLoad)

function pageLoad() {
    const htmlTag = document.documentElement

    document.addEventListener('click', e => {
        const targetElement = e.target

        if (targetElement.closest('.header-language') && htmlTag.closest('.touch')) {
            document.querySelector('.header-language').classList.add('open')
        } else if (!targetElement.closest('.header-language.open') && document.querySelector('.header-language.open')) {
            e.preventDefault()
            document.querySelector('.header-language').classList.remove('open')
        }


        // =================

        if (targetElement.closest('.form-header') && window.innerWidth <= 767 && !targetElement.closest('.form-header.open')){
            e.preventDefault()
            document.querySelector('.form-header').classList.add('open')
        } else if (!targetElement.closest('.form-header.open') && document.querySelector('.form-header.open')) {
            e.preventDefault()
            document.querySelector('.form-header').classList.remove('open')
        }


        // =================

        if (!targetElement.closest('.menu__body') && htmlTag.closest('.menu-open') && !targetElement.closest('.icon-menu') || targetElement.closest('.close-menu')) {
            menuClose()
            e.preventDefault()
        }


    })
}