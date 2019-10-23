'use strict'




function onInit(){
    renderGallery();
}



function renderGallery() {
    var strHtml = '';

    gImgs.forEach((img) => {
        strHtml += `<div class='items'> <img data-id="${img.id}"  src="${img.url}"> </div>`;


    });

    var elGallery = document.querySelector('.main-gallery');
    elGallery.innerHTML = strHtml;
}