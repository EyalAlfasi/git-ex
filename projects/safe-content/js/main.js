'use strict'

function init() {
    if (loadFromStorage(USER_STORAGE_KEY)) window.location.href = "secret-content.html";
}

