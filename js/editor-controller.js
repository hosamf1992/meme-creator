'use strict'




function onInitEditor() {
    initCanvas();
    loadImg();
}




function onDrawTxt() {

    let elInput = document.querySelector('.user-input').value;
    drawStroked(elInput);
    saveTxt(elInput);


}



function drawStroked(text) {

    gCtx.font = "2rem Impact";
    gCtx.textAlign = "center";

    gCtx.strokeStyle = 'black';
    gCtx.lineWidth = 5;
    gCtx.strokeText(text, canvas.width / 2, 50);
    gCtx.fillStyle = 'white';
    gCtx.fillText(text, canvas.width / 2, 50);
}




function loadImg() {

    let idImg=  loadImgIdFromStorage();
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