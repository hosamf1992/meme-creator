'use strict'
let gCanvas;
let gCtx;
let gImgId;
let IMG_ID = 'imgId';
let SAVED_IMG = 'savedImg';
let gSavedImg = [];

// uploadFile();

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
    { id: 10, url: 'img/gallery/17.jpg', keywords: ['happy'] },
    { id: 11, url: 'img/gallery/11.jpg', keywords: ['happy'] },
    { id: 12, url: 'img/gallery/12.jpg', keywords: ['happy'] },
    { id: 13, url: 'img/gallery/13.jpg', keywords: ['happy'] },
    { id: 14, url: 'img/gallery/18.jpg', keywords: ['happy'] },
    { id: 15, url: 'img/gallery/15.jpg', keywords: ['happy'] },
    { id: 16, url: 'img/gallery/19.jpg', keywords: ['happy'] },
    { id: 17, url: 'img/gallery/20.jpg', keywords: ['happy'] },
    { id: 18, url: 'img/gallery/23.jpg', keywords: ['happy'] },
    { id: 19, url: 'img/gallery/24.jpg', keywords: ['happy'] },
    { id: 20, url: 'img/gallery/25.jpg', keywords: ['happy'] },




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
            pos: 'top',
            color: 'white',
            x: 20,
            y: 40,
        }

    ]
};
function drawRec(y) {
    gCtx.fillStyle = 'rgba(225, 225, 225, 0.5)';
    gCtx.fillRect(0, y - 50, gCanvas.width, 100);

}
function getSelectedPos() {
    let pos = gMeme.txts[getSelctedTxtIdx()].y;
    return pos;

}
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


    if (gMeme.txts.length === 1) return;

    if (getSelctedTxtIdx() === gMeme.txts.length - 1) {
        gMeme.selectedTxtIdx = 0;
    } else {
        gMeme.selectedTxtIdx += 1;
    }

}

function deleteLine() {
    let selectedTxtIdx = getSelctedTxtIdx();
    // if (gMeme.txts.length === 1) {
    //     return (gMeme.txts[0].line = ''), gMeme.selectedTxtIdx = 0;


    // }
    gMeme.selectedTxtIdx = gMeme.txts.length - 1;
    gMeme.selectedTxtIdx -= 1;
    gMeme.txts.splice(selectedTxtIdx, 1);
    if (gMeme.txts.length === 0) {
        return (addTxt('', 20, 40, 'top'), gMeme.selectedTxtIdx = 0)


    }



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
    if (gMeme.txts.length === 3) return;

    gMeme.selectedTxtIdx += 1;

    addTxt(txt, 20, arrangeLines().y, arrangeLines().pos);

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



function setFont(font) {
    let selectedTxtIdx = getSelctedTxtIdx();
    gMeme.txts[selectedTxtIdx].font = font;

}

function saveIdToStorage() {
    saveToStorage(IMG_ID, gImgId)
}

function loadImgIdFromStorage() {
    return loadFromStorage(IMG_ID);
}

function loadUpload() {
    let str = localStorage.getItem('user-img');
    return str;
}

function clearImg() {
    localStorage.removeItem('user-img');

}
function getSelctedTxtIdx() {
    return gMeme.selectedTxtIdx;
}

function addTxt(text, x, y, pos) {
    let txt = {

        line: text,
        stroke: 'black',
        font: 'Impact',
        size: 32,
        pos: pos,
        color: 'white',
        x: x,
        y: y,

    }

    gMeme["txts"].push(txt);

}

function arrangeLines() {
    let posMap = gMeme.txts.map(pos => pos.pos);
    if (posMap.every(pos => ['top'].indexOf(pos) > -1)) return { y: gCanvas.height - 20, pos: 'bottom' };
    if (posMap.every(pos => ['top', 'bottom'].indexOf(pos) > -1)) return { y: gCanvas.height / 2, pos: 'center' };
    if (posMap.every(pos => ['top', 'center'].indexOf(pos) > -1)) return { y: gCanvas.height - 20, pos: 'bottom' };
    if (posMap.every(pos => ['center'].indexOf(pos) > -1)) return { y: 40, pos: 'top' };
    if (posMap.every(pos => ['center', 'bottom'].indexOf(pos) > -1)) return { y: 40, pos: 'top' };

}
function uploadImage() {
    var input = document.getElementById('uploadImage');
    input.onchange = function (evt) {
        var tgt = evt.target || window.event.srcElement,
            files = tgt.files;

        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                localStorage['user-img'] = fr.result;
            }
            fr.readAsDataURL(files[0]);
        }
        window.open("editor.html", "_self");

    }
}

window.onbeforeunload = closingCode;
function closingCode() {
    clearImg();
    return null;
}

function saveImg(image) {
    let imgFromStorage = loadFromStorage(SAVED_IMG);
    if (imgFromStorage !== null) {
        gSavedImg = imgFromStorage;
    }
    gSavedImg.push(image);
    saveToStorage(SAVED_IMG, gSavedImg)
}

const shareBtn = document.querySelector('.share-btn');

shareBtn.addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: 'My awesome post!',
      text: 'This post may or may not contain the answer to the universe',
      url: window.location.href
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(err => {
      console.log(`Couldn't share because of`, err.message);
    });
  } else {
    console.log('web share not supported');
  }
});