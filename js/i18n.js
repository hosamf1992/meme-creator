'use strict'

let gCurrLang = 'en';


let gTrans = {
    'gallery-nav': {
        en: 'Gallery',

        he: 'גלריה'
    },
    'memes-nav': {
        en: ' Memes',

        he: ' תמונות שלי '
    },

    'about-nav': {
        en: 'About',

        he: 'אודות  ',

    }, 
    'memes-msg': {
        en: 'No Saved Images!',

        he: 'אין תמונות שמורות!  ',

    }, 
    search: {
        en: 'Enter search keyword',

        he: 'חפש לפי מילת מפתח  ',

    }, 

    'upload-btn': {
        en: 'Upload File',
        he: 'בחר קובץ',
    },

    'save-btn': {
        en: 'Save',

        he: 'שמור',
    },
    'download-btn': {
        en: 'Download',

        he: 'הורד',
    },
    'footer-rights': {
        en: 'All Rights Reserved 2019',

        he: 'כל הזכויות שמורות 2019',
    },
    
}



function doTrans() {
    let els = document.querySelectorAll('[data-trans]');

    for (let i = 0; i < els.length; i++) {
        let el = els[i];
        let transKey = el.dataset.trans;

        let txt = getTrans(transKey);
        el.innerText = txt;

    }


}

function getTrans(transKey) {
    let keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';

    let txt = keyTrans[gCurrLang];

    // If not found - use english
    if (!txt) txt = keyTrans['en'];

    return txt;
}

function setLang(lang) {
    gCurrLang = lang;
}

