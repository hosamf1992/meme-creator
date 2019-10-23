'use strict'
let gCanvas;
let gCtx;
let isDraw = true;


let gImgId;
let IMG_ID = 'imgId';

let gKeywords = { 'happy': 12, 'funny puk': 1 }

let gImgs = [
    { id: 1, url: 'img/gallery/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'img/gallery/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'img/gallery/3.jpg', keywords: ['happy'] },
    { id: 4, url: 'img/gallery/4.jpg', keywords: ['happy'] },
    { id: 5, url: 'img/gallery/5.jpg', keywords: ['happy'] },
    { id: 6, url: 'img/gallery/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'img/gallery/7.jpg', keywords: ['happy'] },
    { id: 8, url: 'img/gallery/8.jpg', keywords: ['happy'] },
    { id: 9, url: 'img/gallery/9.jpg', keywords: ['happy'] },


];

let gMeme = {
    selectedImgId: 5,
    selectedTxtIdx: 0,

    txts: [
        // {
        //     line: '',
        //     size: 20,
        //     align: 'left',
        //     color: 'red',
        //     x: 20,
        //     y: 40,
        // }

    ]
};




function findImgId(id) {
    var index = gImgs.findIndex((img) => img.id === id)
    return index;

}

function saveTxt(txts) {
    gMeme["txts"][0].line = txts;

}

function getTxt() {
    return gMeme['txts'][0].line;
}

function isTxt() {
    if (gMeme["txts"][0].line !== '') return true;
    else false;
}

function saveIdToStorage() {
    saveToStorage(IMG_ID, gImgId)
}

function loadImgIdFromStorage() {
    return loadFromStorage(IMG_ID);
}

function getSelctedTxtIdx() {
    return gMeme.selectedTxtIdx;
}

function addTxt(line, x, y) {
    var txt = {

        line: line,
        size: 32,
        align: 'center',
        color: 'white',
        x: 20,
        y: 40,

    }

    gMeme["txts"].push(txt);

}