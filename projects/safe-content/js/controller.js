'use strict'

function onUserLogin() {
    var elUsername = document.querySelector('input[name=username-input]')
    var elPassword = document.querySelector('input[name=password-input]')
    var currUser = _doLogin(elUsername.value, elPassword.value)
    if (currUser) {
        window.location.href = "secret-content.html";
    }
    elUsername.value = '';
    elPassword.value = '';
}

function onUserLogOut() {
    _removeLoggedInUserFromStorage();
    window.location.href = "index.html";
}

function getLoggedInUserDetails() {
    var elDisplayName = document.querySelector('.display-name');
    var user = loadFromStorage(USER_STORAGE_KEY);
    if (user) {
        var name = user.userName;
        elDisplayName.innerText = name;
        var elAdminLink = document.querySelector('.admin-link');
        elAdminLink.innerHTML = (user.isAdmin) ? '<a href="admin.html">Link to admin page</a>' : '';
    }
}

function checkIfAdmin() {
    var currLoggedInUser = loadFromStorage(USER_STORAGE_KEY)
    if (currLoggedInUser){
        if(currLoggedInUser.isAdmin) renderUsersTable();
        else window.location.href = "secret-content.html";
    } 
    else window.location.href = "index.html";
}

function renderUsersTable() {
    _SortForDisplayAdmin();
    console.log(gUsers);
    var usersTable = document.querySelector('.users-table-body');
    var strHTMLs = '<tr class="table-headings"><td>Username</td><td>Password</td><td>Last login time</td><td>Is admin</td></tr>';
    strHTMLs += gUsers.map(function (user) {
        return `<tr>
        <td>${user.userName}</td>
        <td>${user.password}</td>
        <td>${user.lastLoginTime}</td>
        <td>${user.isAdmin}</td>
    </tr>`
    }).join('');
    usersTable.innerHTML = strHTMLs;

}

function onSetSort(sortBy) {
    console.log('Sorting by', sortBy);
    _setSort(sortBy);
    renderUsersTable();
}

function onUserGoBack(){
    window.location.href = "secret-content.html";
}