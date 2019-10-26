'use strict'

function onInitGallery() {
    renderGallery();
    uploadImage();

}

function onInitSavedImg(){
    renderSavedImg();
}

function toggleMenu() {
   
    document.body.classList.toggle('open-menu');
}

function renderGallery() {
    let strHtml = '';

    gImgs.forEach((img) => {
        strHtml += `<div class='items'> <img  onclick="openEditor(this);" data-id="${img.id}"  src="${img.url}"> </div>`;


    });

    let elGallery = document.querySelector('.main-gallery');
    elGallery.innerHTML = strHtml;
}

function openEditor(el) {
    gImgId = el.dataset.id;
    saveIdToStorage();
    console.log(el.dataset.id);
    window.open("editor.html", "_self");
}

function renderSavedImg(){

    let strHtml = '';
    let imgFromStorage = loadFromStorage(SAVED_IMG);
    if (imgFromStorage !== null) {
        gSavedImg = imgFromStorage;
    }
    else{
        document.querySelector('.msg').style.display='block';
    }
    gSavedImg.forEach((img) => {
        strHtml += `<div class='items'> <img src="${img}"> </div>`;


    });

    let elGallery = document.querySelector('.main-gallery');
    elGallery.innerHTML = strHtml;

}