(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  // const on = (type, el, listener, all = false) => {
  //   let selectEl = select(el, all)
  //   if (selectEl) {
  //     if (all) {
  //       selectEl.forEach(e => e.addEventListener(type, listener))
  //     } else {
  //       selectEl.addEventListener(type, listener)
  //     }
  //   }
  // }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }


  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
  })

})()

var projectsSection = document.querySelector("#projects #projectsDiv")
var technologiesSection = document.querySelector("#technologies .row")

var projects = [
  {
      "id": 1,
      "title": "Mini dog clothes",
      "alt": "minidogclothes",
      "img": "minidog.png",
      //"description": "A dog clothing store website",
      "description":{ "sr": "Sajt prodavnice odeće za pse", "en": "A dog clothing store website" },
      "link": "https://hristinasmiljanic.github.io/minidogclothes/",
      "technologies": ["HTML", "CSS", "JavaScript"],
      "isResponsive": true,
      "year": 2023
  },
  {
      "id": 2,
      "title": "Gelato Italiana",
      "alt": "gelatoitalina",
      "img": "gelato.png",
      //"description": "An ice cream shop website",
      "description": { "sr": "Sajt poslastičarnice sa sladoledom", "en": "An ice cream shop website" },
      "link": "https://hristinasmiljanic.github.io/gelatoitaliana/",
      "technologies": ["HTML", "CSS"],
      "isResponsive": true,
      "year": 2020
  },
  {
      "id": 3,
      "title": "Rosella",
      "alt": "rosella",
      "img": "rosella.png",
      //"description": "An e-commerce website for selling drinks",
      "description": { "sr": "E-commerce sajt za prodaju pića", "en": "An e-commerce website for selling drinks" },
      "link": "https://github.com/hristinasmiljanic",
      "technologies": ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      "isResponsive": true,
      "year": 2026
  },

]
var techs = [
  {
      "id": 1,
      "name": "HTML",
      "img": "html.png"
  },
  {
      "id": 2,
      "name": "CSS",
      "img": "css.png"
  },
  {
      "id": 3,
      "name": "JavaScript",
      "img": "js.png"
  },
  {
      "id": 4,
      "name": "PHP",
      "img": "php.png"
  },
  {
      "id": 5,
      "name": "Vue",
      "img": "vue.png"
  },
  {
      "id": 6,
      "name": "Node.js",
      "img": "node.png"
  },
  {
      "id": 7,
      "name": "Bootstrap",
      "img": "bootstrap.png"
  },
  {
      "id": 8,
      "name": "MySQL",
      "img": "mysql.png"
  }
]

// var filterTech = techs.filter((t) => { return t.id > 2 })

// filterTech.forEach((t) => {
//   var html = `<option value="${t.id}">${t.name}</option>`
//   document.querySelector("#filterDdl").innerHTML += html
// })


/* translate na eng i na srp*/
var translations = {
  sr: {
    nav_home: "Početna", nav_projects: "Projekti", nav_about: "O meni",
    hero_role: "Web Developer", hero_btn: "O meni",
    projects_title: "Projekti", sort_label: "Sortiraj:",
    sort_default: "Podrazumevano", sort_asc: "Godina rastuće", sort_desc: "Godina opadajuće",
    about_title: "O meni",
    about_p1: "Studentkinja sam završne godine Visoke škole strukovnih studija za informacione i komunikacione tehnologije (ICT) u Beogradu. Ambiciozna sam i stalno težim ličnom i profesionalnom razvoju. Motivisana sam da učim i sticanjem novih znanja unapređujem svoje veštine.",
    about_p2: "Imam iskustvo u izradi projekata na fakultetu koji uključuju i frontend i backend tehnologije, uključujući JavaScript, kao i rad sa relacionim bazama podataka i PHP-om.",
    email_label: "E-mail: ", cv_btn: "Preuzmi moj CV", rights: "Sva prava zadržana.",
    card_year: "godina", card_visit: "Poseti sajt", card_more: "Vidi više",
    modal_desc: "Opis", modal_langs: "Tehnologije", modal_responsive: "Responzivan", modal_year: "Godina",
    yes: "Da", no: "Ne", langBtn: "EN", themeAria: "Promeni temu"
  },
  en: {
    nav_home: "Home", nav_projects: "Projects", nav_about: "About",
    hero_role: "Web Developer", hero_btn: "About me",
    projects_title: "Projects", sort_label: "Sort:",
    sort_default: "Default", sort_asc: "Year Asc", sort_desc: "Year Desc",
    about_title: "About me",
    about_p1: "A final year student at the ICT College Of Vocational Studies located in Belgrade, Serbia, I am an ambitious individual who constantly strives for personal and professional growth. I am motivated to learn and acquire new knowledge in order to enhance my skills.",
    about_p2: "I have experience in developing projects at university that involve both frontend and backend technologies including JavaScript, as well as working with relational databases and PHP.",
    email_label: "E-mail: ", cv_btn: "Download my resume", rights: "All Rights Reserved.",
    card_year: "year", card_visit: "Visit website", card_more: "See more",
    modal_desc: "Description", modal_langs: "Languages", modal_responsive: "Responsive", modal_year: "Year",
    yes: "Yes", no: "No", langBtn: "SR", themeAria: "Toggle theme"
  }
}

var currentLang = localStorage.getItem("lang") || "en"
var currentTheme = localStorage.getItem("theme") || "light"

function t(key) { return translations[currentLang][key] }

function applyLanguage() {
  document.documentElement.lang = currentLang
  document.querySelectorAll("[data-prevod]").forEach((el) => {
    el.textContent = t(el.dataset.prevod)
  })
  document.querySelector("#langBtn").textContent = t("langBtn")
  document.querySelector("#themeBtn").setAttribute("aria-label", t("themeAria"))
  renderProjects(getSortedProjects())
  renderModals(projects)
}

function applyTheme() {
  document.documentElement.setAttribute("data-bs-theme", currentTheme)
  document.querySelector("#themeBtn i").className =
    currentTheme === "light" ? "bi bi-moon-stars-fill" : "bi bi-sun-fill"
}

document.querySelector("#langBtn").addEventListener("click", () => {
  currentLang = currentLang === "sr" ? "en" : "sr"
  localStorage.setItem("lang", currentLang)
  applyLanguage()
})

document.querySelector("#themeBtn").addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light"
  localStorage.setItem("theme", currentTheme)
  applyTheme()
})
/* kraj */

function sortProjects(projects, isReversed, isDefault){
  if(isReversed){
    return projects.sort((p1, p2) => p1.year - p2.year || p1.id - p2.id).reverse()
  }
  if(isDefault){
    return projects.sort((p1, p2) => p1.id - p2.id)
  }
  return projects.sort((p1, p2) => p1.year - p2.year || p1.id - p2.id)
}

var sortDdl = document.querySelector("#sortDdl")

function getSortedProjects() {
  var chosenValue = sortDdl.value
  return sortProjects(projects, chosenValue == "yearDESC", chosenValue == "default")
}

sortDdl.addEventListener("change", () => {
  renderProjects(getSortedProjects())
})


 function renderProjects(projectsArray){
  var html = ""
  projectsArray.forEach((p) => {
    html += createACard(p.img, p.title, p.description[currentLang], p.link, p.year, p.alt)
  })
  projectsSection.innerHTML = html
}
//renderProjects(projects)

function renderModals(projects){
  document.querySelector("#modals").innerHTML = ""
  projects.forEach((p) => {
    createAProjectModal(p.alt, p.title, p.img, p.description[currentLang], p.technologies, p.isResponsive, p.link, p.year)
  })
}
//renderModals(projects)

 function renderTechs(){
  techs.forEach((t) => {
    createATech(t.img, t.name)
  })
}
renderTechs() 

function createACard(img, title, desc, link, year, modalTarget){
  var html = `
  <div class="col" data-aos="zoom-in">
    <div class="card h-100">
      <img src="assets/img/portfolio/${img}" class="card-img" alt="${title}">
      <div class="card-body d-grid">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${desc}</p>
        <p class="card-text">${t("modal_year")}: ${year}</p>
        <div class="align-self-end">
          <a href="${link}" target="_blank" class="btn btn-primary"> ${t("card_visit")} </a>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${modalTarget}"> ${t("card_more")} </button>
        </div>
      </div>
    </div>
  </div>`

// projectsSection.innerHTML += html

return html

}


function createAProjectModal(id, title, img, desc, tecs, isResponsive, link, year){
  var responsive = isResponsive ? t("yes") : t("no");
  var technologies = tecs.join(", ");
  var html = `<div class="modal fade" id="${id}" tabindex="-1" aria-labelledby="${id}Label" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="${id}Label">${title}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="assets/img/portfolio/${img}" alt="${title}" class="img-fluid">
        <div class="mt-3">
          <p>${t("modal_desc")}: ${desc}</p>
          <p>${t("modal_langs")}: ${technologies}</p>
          <p>${t("modal_responsive")}: ${responsive}</p>
          <p>${t("modal_year")}: ${year}</p>
        </div>
      </div>
      <div class="modal-footer">
        <a href="${link}" target="_blank" class="btn btn-primary"> ${t("card_visit")} </a>
      </div>          
    </div>
  </div>
</div>`

document.querySelector("#modals").innerHTML += html
}

function createATech(img, alt){
  html = `<div class="col-lg-3 col-md-4 col-6 d-flex align-items-center justify-content-center" data-aos="zoom-in">
  <img src="assets/img/technologies/${img}" class="img-fluid tech-logo" alt="${alt}">
</div>`

technologiesSection.innerHTML += html
}
applyTheme()
applyLanguage()