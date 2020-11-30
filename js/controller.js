'use strict'


jQuery(function () {
    init();
})

function init() {
    renderProjects();
}




function renderProjects() {
    var projects = getProjectsForDisplay();
    var strHTML = projects.map(function (proj) {
        var badges = convertLabelsToBadges(proj);

        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        ${badges}
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModalDetails('${proj.id}')">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${proj.imgUrl}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>`
    })
    var container = $('.projects-container');
    container.html(strHTML.join(''));
}

function convertLabelsToBadges(proj) {
    var strHTML = proj.labels.map(function (label) {
        return `<span class="badge badge-primary badge-pill">${label}</span>`
    })
    return strHTML.join('');
}

function renderModalDetails(projID) {
    var project = getProjByID(projID);
    console.log(project);
    var strHTML = `
    <h2>${project.name}</h2>
                <p class="item-intro text-muted">${project.title}</p>
                <img class="img-fluid d-block mx-auto" src="${project.imgUrl}" alt="">
                <p>${project.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${project.publishedAt}</li>
                </ul>

                <a class="proj-link" href="${project.url}" target="_blank"><button class="btn btn-primary"
                    type="button">Project link</button></a>
                <button class="btn btn-secondary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>`

    $('.modal-body').html(strHTML);
}


function onSubmitForm(ev) {
    ev.preventDefault();
    var subjectVal = $('#subjectInput').val();
    var textareaVal = $('#textareaInput').val();

    window.location = `https://mail.google.com/mail/?view=cm&fs=1&to=eyalalf@gmail.com&su=${subjectVal}&body=${textareaVal}`;
}
