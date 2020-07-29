let arrayOfProjects = [{
  title: "Games",
  description: "Games is an application created with the help of an API.The technologies used are: HTML, CSS and Javascript.HTML provides the basic structure of sites. CSS is used to control presentation, formatting, and layout. JavaScript is used to control the behavior of different elements.",
  image: "src/img/games.png",
  gitHub: "https://github.com/cristina-crisan/Games"
}, {
  title: "Weather App",
  description: " Weather it is an unusual application because the user can select how this preferences can be saved, with cookies or Local Storage.The technologies used are: HTML, CSS and Javascript.HTML provides the basic structure of sites. CSS is used to control presentation, formatting, and layout. JavaScript is used to control the behavior of different elements. ",
  image: "src/img/weather.png",
  gitHub: "https://github.com/cristina-crisan/Weather-App"
}, {
  title: "Animals",
  description: "Animals it is an application that lets the user see details about different breeds of dogs.The technologies used are: HTML and CSS.HTML provides the basic structure of sites and CSS is used to control presentation, formatting, and layout.",
  image: "src/img/animals.png",
  gitHub: "https://github.com/cristina-crisan/Animals"
}, {
  title: "Resume",
  description: "Resume is an application that contains basic information about a person that wants to apply for a job.The technologies used are: HTML and CSS.HTML provides the basic structure of sites and CSS is used to control presentation, formatting, and layout.",
  image: "src/img/resume.png",
  gitHub: "https://github.com/cristina-crisan/Resume"
}]

function createTemplate(title, description, image, gitHub) {
  let modalTemplate = `
  <div id="myModal" class="modal">
    <div class="modal-content">
    <div class="modal-header">
      <span>${title}</span>
      <span class="close-modal">&times;</span>
    </div>
    <div class="modal-wrapper">
    <div class="modal-content-wrapper">
        <div class="image-project-details">
        <img src =${image} alt = "Project image">
        </div>
        <div class="modal-content-details" >
      <div class="modal-body">
        <p>${description}</p>
      </div>
      <div class="modal-footer">
        <a href="${gitHub}" target="_blank">
              <i class="fab fa-github fa-3x"></i>
            </a>
      </div>
      <div class="action-button">
      <button class="close-button"> Close</button>
      </div>
      </div>
      </div>
    </div>
  </div>
     `
  return modalTemplate;
}

function openModal(project) {
  let template = document.querySelector(".modalTemplate");
  template.innerHTML = createTemplate(project.title, project.description, project.image, project.gitHub);
  let modal = document.getElementById("myModal");
  modal.style.display = "block";

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  let closeModal = document.querySelector(".close-modal");
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  let closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });
}