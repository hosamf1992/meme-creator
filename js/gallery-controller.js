'use strict'

function onInitGallery() {
    renderGallery();

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