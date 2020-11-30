'use strict'
const BOOKS_KEY = 'booksDB';
const PAGE_SIZE = 6;

var gBooks;
var gPageIdx = 0;
var gBookNumber = 1;
var gSortBy = 'txt';

_createBooks();

function _createBook() {
    gBookNumber++;
    if (gBookNumber === 9) gBookNumber =1;
        return {
            id: makeId(),
            name: getRandomName(),
            price: getRandomIntInclusive(15, 50),
            imgUrl: `book${gBookNumber}`,
            rating: 0
        };
}


function _createBooks() {
    var books = loadFromStorage(BOOKS_KEY);
    if (!books || books.length === 0) {
        books = [];
        for (var i = 0; i < 9; i++) {
            var book = _createBook();
            books.push(book);
        }
        gBooks = books;
        _saveBooksToStorage();
    }
    gBooks = books;
}

function _saveBooksToStorage() {
    saveToStorage(BOOKS_KEY, gBooks)
}

function _removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage();
}

function _addBook(bookName, bookPrice) {
    var book = _createBook();
    book.name = bookName;
    book.price = bookPrice;
    gBooks.unshift(book);
    _saveBooksToStorage();
}

function _updateBook(bookId, bookPrice) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks[bookIdx].price = bookPrice;
    _saveBooksToStorage();
}

function getBookById(bookId) {
    return gBooks.find(function (book) {
        return bookId === book.id
    })
}

function _updateRating(book, rating) {
    book.rating = rating;
    _saveBooksToStorage();
}

function _nextPage() {
    gPageIdx++;
    if (gPageIdx * PAGE_SIZE >= gBooks.length) gPageIdx = 0;
}


function _getNextBooksForDisplay() {
    var startIdx = gPageIdx * PAGE_SIZE;
    var books = gBooks.slice(startIdx, startIdx + PAGE_SIZE);
    return books;
}

function _setSort() {
    if (gSortBy === 'txt') {
        return gBooks.sort(function (book1, book2) {
            if (book1.name.toUpperCase() > book2.name.toUpperCase()) return 1
            else if (book1.name.toUpperCase() < book2.name.toUpperCase()) return -1
            else return 0;
        })
    } else return gBooks.sort(function (book1, book2) {
        return book1.price - book2.price;
    })
}

function getBookNumber() {
    return gPageIdx * PAGE_SIZE;
}