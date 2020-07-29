window.onload = function () {
  window.scrollTo(0, 0);
}

function smoothScroll(target, element) {
  let targetElement = document.querySelector(target);
  let coord = targetElement.getBoundingClientRect().top;
  if (coord != 0) {
    coord = coord + window.pageYOffset;
    window.scrollTo(0, coord);
  }
  activeClass(element)
}

function activeClass(element) {
  let navigationElement = document.querySelector(".page-navigation");
  let navigationList = navigationElement.querySelectorAll("a");
  navigationList.forEach(item => {
    item.classList.remove("active");
  })

  let bulletsList = document.querySelectorAll(".navigation-bullets div a");
  bulletsList.forEach(item => {
    item.classList.remove("active");
  });

  element.classList.remove("active");
  let elementClass = element.className;
  let elementList = document.querySelectorAll("." + elementClass);
  elementList.forEach(item => {
    item.classList.add("active");
  });
}

let home = document.querySelectorAll(".home-navigation");
home[0].addEventListener("click", function () {
  smoothScroll(".home", this);
});
home[1].addEventListener("click", function () {
  smoothScroll(".home", this);
});

let aboutMe = document.querySelectorAll(".about-me-navigation");
aboutMe[0].addEventListener("click", function () {
  smoothScroll(".about-me", this);
});
aboutMe[1].addEventListener("click", function () {
  smoothScroll(".about-me", this);
});
aboutMe[2].addEventListener("click", function () {
  smoothScroll(".about-me", this);
});

let education = document.querySelectorAll(".education-navigation");
education[0].addEventListener("click", function () {
  smoothScroll(".education", this);
});
education[1].addEventListener("click", function () {
  smoothScroll(".education", this);
});
education[2].addEventListener("click", function () {
  smoothScroll(".education", this);
});

let skills = document.querySelectorAll(".skills-navigation");
skills[0].addEventListener("click", function () {
  smoothScroll(".skills", this);
});
skills[1].addEventListener("click", function () {
  smoothScroll(".skills", this);
});
skills[2].addEventListener("click", function () {
  smoothScroll(".skills", this);
});

let projects = document.querySelectorAll(".projects-navigation");
projects[0].addEventListener("click", function () {
  smoothScroll(".projects", this);
});
projects[1].addEventListener("click", function () {
  smoothScroll(".projects", this);
});
projects[2].addEventListener("click", function () {
  smoothScroll(".projects", this);
});

let contact = document.querySelectorAll(".contact-navigation");
contact[0].addEventListener("click", function () {
  smoothScroll(".contact", this);
});
contact[1].addEventListener("click", function () {
  smoothScroll(".contact", this);
});
contact[2].addEventListener("click", function () {
  smoothScroll(".contact", this);
});