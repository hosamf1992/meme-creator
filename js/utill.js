'use strict'


function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromStorage(key) {
    let str = localStorage.getItem(key);
    let value = JSON.parse(str)
    return value;
}