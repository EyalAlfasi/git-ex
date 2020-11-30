'use strict'

function onInit() {
    renderBooks();
}

function renderBooks() {
    var books = _getNextBooksForDisplay();
    var counter = getBookNumber();
    var strHTMLs = books.map(function (book, idx) {
        return `
                <tr>
                    <td>${counter + idx + 1}</td>
                    <td>${book.id}</td>
                    <td>${book.name}</td>
                    <td>${book.price}$</td>
                    <td>
                        <button onclick="onReadBook('${book.id}')" class="btn read-btn">Read</button>
                        <button onclick="onUpdateBook('${book.id}')" class="btn update-btn">Update</button>
                        <button onclick="onRemoveBook('${book.id}')" class="btn delete-btn">Delete</button>
                    </td>
                </tr>
        `
    })
    document.querySelector('.books-table tbody').innerHTML = strHTMLs.join('')
}

function onRemoveBook(bookId) {
    _removeBook(bookId)
    renderBooks();
}

function onAddBook() {

    var elName = document.querySelector('input[name=bookName]');
    var elPrice = document.querySelector('input[name=bookPrice]');

    var name = elName.value;
    var price = +elPrice.value;

    if (name && price) {
        _addBook(name, price);
        renderBooks();
    }
    elName.value = '';
    elPrice.value = '';
}

function onUpdateBook(bookId) {
    var price = +prompt('New price?');
    if (price) {
        _updateBook(bookId, price);
        renderBooks();
    }
}


function onReadBook(bookId) {
    var book = getBookById(bookId);
    renderReadBookModal(book);
}

function onUpdateRating(bookId) {
    var elRating = document.querySelector('input[name=rating]');
    var book = getBookById(bookId);
    var rating = elRating.value;
    if (rating) {
        _updateRating(book, rating);
        renderReadBookModal(book);
    }
}

function renderReadBookModal(book) {
    showReadModal();
    var elModal = document.querySelector('.read-book-modal-container');
    var strHTML = `<span class="close-read-modal" onclick="hideReadModal()">X</span>
    <div class="image-container">
        <img src="img/${book.imgUrl}.jpg">
    </div>
    <div class="inner-read-book-modal-container">
        <div class="book-details">
            <h3 class="bookId">Book Id: <span>${book.id}</span></h3>
            <h3 class="bookTitle">Book title: <span>${book.name}</span></h3>
            <h3 class="bookPrice">Book price: <span>${book.price}$</span></h3>
            <h3 class="bookRating">Book rating: <span>${book.rating}</span></h3>
        </div>
        <div class="book-rating">
            <input placeholder="Rate" name="rating" type="number" min="1" max="10">
            <button onclick="onUpdateRating('${book.id}')" class="btn rating-btn">Update rating</button>
        </div>
    </div>`;
    elModal.innerHTML = strHTML;

}
function showReadModal() {
    var modal = document.querySelector('.read-book-modal-container');
    modal.style.display = 'flex';
}

function hideReadModal() {
    var modal = document.querySelector('.read-book-modal-container');
    modal.style.display = '';
}

function onNextPage() {
    _nextPage();
    renderBooks();
}

function onPrevPage() {
    _prevPage();
    renderBooks();
}

function onSetSort(sortType) {
    gSortBy = sortType.dataset.sort;
    _setSort();
    renderBooks();
}