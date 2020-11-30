'use strict';

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


function getRandomName() {
    var res = '';
    var words = ['earthwax', 'mosaic', 'visual', 'weapon', 'assessment', 'stable', 'valid',
        'heart', 'increase', 'hunting', 'calculation', 'agreement', 'leash', 'restless',
        'palace', 'panel', 'premium', 'man', 'information', 'pier', 'resign', 'place', 'dignity', 'illustrate', 'fantasy'];
    var word = words[Math.floor(Math.random() * words.length)];
    res += word + ' ';
    word = words[Math.floor(Math.random() * words.length)];

    return res + word;
}