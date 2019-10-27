'use strict'

function onInitGallery() {
    renderGallery(gImgs);
    uploadImage();
    renderList();
    loadLang();


}

function onInitSavedImg() {
    renderSavedImg();
    loadLang();
}

function toggleMenu() {

    document.body.classList.toggle('open-menu');
}

function renderGallery(imgs) {
    let strHtml = '';

    imgs.forEach((img) => {
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

function renderSavedImg() {

    let strHtml = '';
    let imgFromStorage = loadFromStorage(SAVED_IMG);
    if (imgFromStorage !== null) {
        gSavedImg = imgFromStorage;
    }
    else {
        document.querySelector('.msg').style.display = 'block';
    }
    gSavedImg.forEach((img) => {
        strHtml += `<div class='items'> <img class="saved-img"  src="${img}"> </div>`;


    });

    let elGallery = document.querySelector('.main-gallery');
    elGallery.innerHTML = strHtml;

}

function FilterGallery(el) {

    let selectedVal = el.value;

    if (selectedVal === '') return renderGallery(gImgs);
    // console.log(elSelected);
    let imgs = sortBy('img', selectedVal);
    renderGallery(imgs);


}

function renderList() {
    let strHtml = '';
    let keyWords = sortBy('keyword');
    keyWords.forEach((key) => {
        strHtml += ` <option  value="${key}" label="${key}" />`;

    });
    let elList = document.querySelector('#keyword-list');
    elList.innerHTML = strHtml;


}
function onSetLang(lang) {
    setLang(lang);
    saveToStorage(LANG_KEY, lang);
    doTrans();

}

function loadLang() {
    let currentLang = loadFromStorage('lang');
    if (currentLang !== null) {
        document.querySelector('.dropdown-lang').value = currentLang;

        setLang(currentLang);
        doTrans();
    }



}