'use strict'

const USER_STORAGE_KEY = 'loggedInUser';
const STORAGE_KEY = 'usersDB';

var gUsers;
var gSortBy = 'txt'

_createUsers();

function _doLogin(username, password) {
    var currUser = gUsers.find(function (user) {
        return user.userName === username && user.password === password;
    });
    if (currUser) {
        currUser.lastLoginTime = Date.now();
        console.log(currUser);
        _saveLoggedInUserToStorage(currUser);
        _saveUsersToStorage();
    }
    return currUser;
}

function _saveUsersToStorage() {
    saveToStorage(STORAGE_KEY, gUsers)
}

function _saveLoggedInUserToStorage(user) {
    saveToStorage(USER_STORAGE_KEY, user)
}

function _removeLoggedInUserFromStorage() {
    localStorage.removeItem(USER_STORAGE_KEY);
}

function _createUsers() {
    var users = loadFromStorage(STORAGE_KEY)

    if (!users || users.length === 0) {
        users = [
            {
                id: 'u101',
                userName: 'auki',
                password: 'secret',
                lastLoginTime: 1601891998864,
                isAdmin: true
            },
            {
                id: 'u102',
                userName: 'buki',
                password: 'topsecret',
                lastLoginTime: 1601891998864,
                isAdmin: false
            },
            {
                id: 'u103',
                userName: 'cuki',
                password: 'verysecret',
                lastLoginTime: 1601891998864,
                isAdmin: false
            }
        ];

    }
    gUsers = users;
    _saveUsersToStorage();
}

function _SortForDisplayAdmin() {
    if (gSortBy === 'txt') {
        return gUsers.sort(function (user1, user2) {
            if (user1.userName.toUpperCase() > user2.userName.toUpperCase()) return 1
            if (user1.userName.toUpperCase() < user2.userName.toUpperCase()) return -1
            return 0

        })
    } else if (gSortBy === 'time') {
        return gUsers.sort(function (user1, user2) {
            return user1.lastLoginTime - user2.lastLoginTime;
        })
    }
}

function _setSort(sortBy) {
    gSortBy = sortBy;
}