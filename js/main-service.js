'use strict'
let gCanvas;
let gCtx;
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
        {
            line: 'Edit Top text',
            font: 'Impact',
            size: 32,
            stroke: 'black',
            align: 'center',
            color: 'white',
            x: 20,
            y: 40,
        }

    ]
};

function ChangeStroke(color) {
    let selectedTxtIdx = getSelctedTxtIdx();
    gMeme.txts[selectedTxtIdx].stroke = color;

}
function changeColor(color) {
    let selectedTxtIdx = getSelctedTxtIdx();
    gMeme.txts[selectedTxtIdx].color = color;

}


function changeTxt(txt) {
    let selectedTxtIdx = getSelctedTxtIdx();
    gMeme.txts[selectedTxtIdx].line = txt;
}

function switchLine() {
    if (gMeme.txts.length === 0) return;



}


function changePos(pos) {
    let y = 2;
    if (pos === 'up') gMeme.txts[getSelctedTxtIdx()].y -= y;
    else gMeme.txts[getSelctedTxtIdx()].y += y
}

function alignText(pos) {
    let currentTxt = gMeme.txts[getSelctedTxtIdx()].line;
    let textWidth = gCtx.measureText(currentTxt).width;
    
    let x
    if (pos === 'center') {
        // x = gCanvas.width / 2;

        x = (gCanvas.width / 2) - (textWidth / 2)
    }
    if (pos === 'left') {
        x = 20;
    }
    if (pos === 'right') {
        x = gCanvas.width - textWidth - 10;
    }


    gMeme.txts[getSelctedTxtIdx()].x = x;

}

function addLine(txt) {
    if (getSelctedTxtIdx() === 2) return;
    gMeme.selectedTxtIdx += 1;
    let y;

    if (getSelctedTxtIdx() === 1) {

        y = gCanvas.height - 20;

    }
    if (getSelctedTxtIdx() === 2) {
        y = gCanvas.height / 2;

    }
    addTxt(txt, 20, y);
}

function changeSize(size) {
    let setSize;
    if (size === 1) setSize = 1;
    else setSize = -1;
    let selectedTxtIdx = getSelctedTxtIdx();
    gMeme.txts[selectedTxtIdx].size += setSize;
}

function findImgId(id) {
    let index = gImgs.findIndex((img) => img.id === id)
    return index;

}



function setFont(font){
    let selectedTxtIdx = getSelctedTxtIdx();
    gMeme.txts[selectedTxtIdx].font=font;

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

function addTxt(text, x, y) {
    let txt = {

        line: text,
        stroke: 'black',
        font: 'Impact',
        size: 32,
        align: 'center',
        color: 'white',
        x: x,
        y: y,

    }

    gMeme["txts"].push(txt);

}