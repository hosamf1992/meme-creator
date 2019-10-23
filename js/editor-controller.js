'use strict'





function onInitEditor() {
    initCanvas();
    loadImg();

}


function onAddLine() {
    clearInput()
    if (gMeme['txts'].length > 0) {
        isDraw = true;
        gMeme.selectedTxtIdx += 1;


    }


}


function onDrawTxt() {
    // clearCanvas();
    var pos = setPos();
    if (isDraw) {
        setTimeout(() => {

            let elInput = document.querySelector('.user-input').value;

            drawStroked(elInput, pos);
            addTxt(elInput, 10, 20);

        }, 10);
        isDraw = false;
    }




}



function drawStroked(text, pos) {

    let x = canvas.width / 2;;
    let y;
    if (pos === 'top') {

        y = 50;
    }

    if (pos === 'bottom') {

        y = canvas.height - 20;
    }

    if (pos === 'center') {
        y = canvas.height / 2;

    };
    gCtx.font = "2rem Impact";

    gCtx.strokeStyle = 'black';
    gCtx.lineWidth = 5;
    gCtx.strokeText(text, x, y);
    gCtx.fillStyle = 'white';
    gCtx.fillText(text, x, y);
    gCtx.textAlign = "center";

}




function loadImg() {

    let idImg = loadImgIdFromStorage();
    var index = findImgId(+idImg)


    let img = new Image();
    img.src = gImgs[index].url;
    // img.src = 'img/gallery/1.jpg';

    img.onload = function () {

        gCtx.drawImage(img, 0, 0);

    };

}



function initCanvas() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
}

function clearCanvas() {
    gCtx.clearRect(0, 0, canvas.width, canvas.height);
    loadImg()

}


function clearInput() {
    let elInput = document.querySelector('.user-input');
    elInput.value = '';
}

function setPos() {
    let pos = '';
    var idxTxt = getSelctedTxtIdx();
    switch (idxTxt) {
        case 0:
            pos = 'top'
            break;
        case 1:
            pos = 'bottom'
            break;

        case 2:
            pos = 'center'
            break;


    }
    return pos;
}