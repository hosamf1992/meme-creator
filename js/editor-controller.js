'use strict'



function onInitEditor() {

    initCanvas()
}

function onSaveImg() {
    let image = canvas.toDataURL("image/jpg");
    saveImg(image);
}

function onDownload(el) {

    let image = canvas.toDataURL("image/jpg");
   

    el.href = image;

}


function onChangePos(pos) {
    changePos(pos);
    initCanvas();
}

function onChangeStroke() {
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
    // initCanvas();


    switchLine();
    let pos = getSelectedPos();

    initCanvas();
    setTimeout(() => {
        drawRec(pos)

        // initCanvas();
    }, 10);


}

function onDelete() {
    deleteLine();
    initCanvas();
}

function onAddLine() {
    if (gMeme.txts.length === 3) return;
    clearInput();
    let elTtx = document.querySelector('.user-input').value;
    addLine(elTtx);
    let pos = getSelectedPos();

    drawRec(pos)
    setTimeout(() => {

        initCanvas();
    }, 1500);


}

function onSetFont(font) {
    setFont(font);
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
        gCtx.alignText = txt.align;

        gCtx.strokeText(txt.line, txt.x, txt.y);

        gCtx.fillText(txt.line, txt.x, txt.y);


    })


}




function initCanvas() {

    let imgUpload = loadUpload();

    gCanvas = document.querySelector('#canvas');
    gCtx = gCanvas.getContext('2d');
    let idImg = loadImgIdFromStorage();
    gMeme.selectedImgId = idImg;
    let img = new Image();
    let index = findImgId(+idImg)


    if (imgUpload !== null) {
        img.src = imgUpload;

    } else {
        img.src = gImgs[index].url;
    }
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




const shareBtn = document.querySelector('.share-btn');

shareBtn.addEventListener('click', () => {
    let image = canvas.toDataURL("image/png");

  if (navigator.share) {
    navigator.share({
      title: 'My awesome meme!',
      text: 'This post may or may not contain the answer to the universe',
      url:image,
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