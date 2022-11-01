// Constants
const MAIN_PROJECTS = 2;

// Variables
const projectsList = [
    {
        name: "Recipes",
        description: "A static site where you can check recipes, the ingredients needed and the step-by-step process to get the same results.",
        demo: "https://iaaron-xyz.github.io/odin-recipes/",
        repo: "https://github.com/iaaron-xyz/odin-recipes",
        image: "./public/images/projects/project-recipes.jpg"
    },
    {
        name: "Basic Landing-page",
        description: "A This landing page was created using only css and html. The purpose to create this landing page was to practice the flexbox knowledge.static site where you can check recipes, the ingredients needed and the step-by-step process to get the same results.",
        demo: "https://github.com/iaaron-xyz/top-landing-page-project",
        repo: "https://github.com/iaaron-xyz/odin-recipes",
        image: "./public/images/projects/project-basic-landing-page.jpg"
    },
    {
        name: "Rock-Paper-Scissors!",
        description: "This webpage is a game of the user versus the computer in a rock-paper-scissors game, where the first to get 6 rounds is the winner of the game.",
        demo: "https://iaaron-xyz.github.io/rock-paper-scissors/",
        repo: "https://github.com/iaaron-xyz/rock-paper-scissors",
        image: "./public/images/projects/project-rock-paper-scissors.jpg"
    },
]

// DOM Elements
const projectsHome = document.getElementById("projects-home");

// Function
function displayMainProjects() {
    projectsNumber = projectsList.length;
    projectsHome.innerHTML = '';
    for (let i = projectsNumber-1; i >= projectsNumber-MAIN_PROJECTS; i--) {
        console.log(i);
        projectsHome.innerHTML += `<div class="project-card"> \
                                      <div class="project-image"> \
                                          <a href=${projectsList[i].demo} target="_blank"> \
                                              <img src=${projectsList[i].image} alt="project thumbnail"> \
                                          </a> \
                                      </div> \
                                      <div class="project-description"> \
                                          <span>${projectsList[i].name}</span><br> \
                                          ${projectsList[i].description} \
                                      </div> \
                                      <div class="project-links"> \
                                          <ul> \
                                              <li><a href="${projectsList[i].demo}" target="_blank">Live Demo</a></li> \
                                              <li><a href="${projectsList[i].repo}" target="_blank">Repository</a></li> \
                                          </ul> \
                                      </div> \
                                  </div>`;
    }
}

// DOM Manipualtion
displayMainProjects();