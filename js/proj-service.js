'use strict';

var gProjects = createProjects();


function getProjectsForDisplay() {
    return gProjects;
}

function createProject(id, name, title, url, labels, imgUrl) {
    return {
        id: id,
        name: name,
        title: title,
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: url,
        publishedAt: Date.now(),
        labels: labels,
        imgUrl: imgUrl
    }
}

function createProjects() {
    return [
        createProject('mine-sweeper', 'Mine Sweeper', 'Watch out for the mines!',
            'https://eyalalfasi.github.io/MineSweeper-by-Eyal-Alfasi/', ['Mouse events', 'UI', 'Matrix'], 'img/portfolio/mine-sweeper.png'),
        createProject('book-store', 'Book store', 'helps keeping your stock up to date',
            'projects/book-store/index.html', ['Mouse events', 'UI', 'CRUDL', 'MVC'], 'img/portfolio/book-store.png'),
        createProject('touch-nums', 'Touch Nums', 'Click all of them!',
            'projects/touch-nums/index.html', ['Mouse events', 'UI', 'Matrix'], 'img/portfolio/touch-nums.png'),
        createProject('safe-content', 'Safe Content', 'Login to view the secret content!',
            'projects/safe-content/index.html', ['Mouse events', 'UI', 'CRUDL', 'MVC'], 'img/portfolio/safe-content.png'),
    ]
}

function getProjByID(projID) {

    return gProjects.find(function (proj) {
        return proj.id === projID;
    })
}