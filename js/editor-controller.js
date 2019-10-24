'use strict'



function onInitEditor() {

    initCanvas()
}


function onChangePos(pos) {
    changePos(pos);
    initCanvas();
}

function onChangeStroke(){
    let elStroke = document.querySelector("#stroke-box").value;


   ChangeStroke(elStroke)
   initCanvas();

   
}

function onChangeColor() {
    let elColor = document.querySelector("#color-box").value;
    changeColor(elColor)
  console.log(elColor);
   
    
    initCanvas();
   
}


function onAlignText(pos) {

    // console.log(pos);
    alignText(pos);
    initCanvas();

}

function onSwitchLine() {


    switchLine();
}


function onAddLine() {
    clearInput();
    let elTtx = document.querySelector('.user-input').value;
    addLine(elTtx);
    initCanvas();


}


function onChangeTxt() {
    let elTtx = document.querySelector('.user-input').value;
    changeTxt(elTtx);
    initCanvas();


}


function onChangeFont(size) {

    changeSize(size);
    initCanvas();
}




function loadImg(image) {

    gCtx.drawImage(image, 0, 0);
    gMeme.txts.forEach((txt) => {

        gCtx.font = `${txt.size}px ${txt.font}`;
        gCtx.strokeStyle = txt.stroke;
        gCtx.lineWidth = 5;
        gCtx.fillStyle = txt.color;

        gCtx.strokeText(txt.line, txt.x, txt.y);

        gCtx.fillText(txt.line, txt.x, txt.y);


    })


}




function initCanvas() {
    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    let idImg = loadImgIdFromStorage();
    gMeme.selectedImgId = idImg;
    let img = new Image();
    let index = findImgId(+idImg)
    img.src = gImgs[index].url;
    let txt = gMeme.txts[gMeme.selectedTxtIdx].line;
    document.querySelector('.user-input').value = txt;
    img.onload = start;
    function start() {
        gCanvas.width = img.width;
        gCanvas.height = img.height;
        loadImg(img)
    }

}


function clearInput() {
    let elTtx = document.querySelector('.user-input');
    elTtx.value = '';

}




