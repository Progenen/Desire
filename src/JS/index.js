'use strict';
import ibg from './modules/ibg.js';
import mainMenu from './modules/mainMenu.js';
import newCollection from './modules/newCollection.js';
import offerSlider from './modules/offerSlider.js';
import rightSideMenu from './modules/rightsideMenu.js';
import Tabs from './modules/tabs.js';
import { Fancybox } from "@fancyapps/ui";
import partners from './modules/partners.js';
import galleryPreview from './modules/galleryPreview.js';
import Vaildate from './modules/vaildate.js';

document.addEventListener('DOMContentLoaded', function () {
    ibg();
    rightSideMenu();
    mainMenu();
    offerSlider();
    newCollection();
    if (document.querySelector('.gallery')) {
        const gallery = new Tabs('.gallery__titles-btn', '.gallery', '.gallery__content', '.gallery', '.das');
        gallery.render();
        gallery.activeTab('bedroom');
    }
    partners();
    galleryPreview();
    const contactsForm = new Vaildate('.contacts-page-contacts__form');
    contactsForm.render();
});