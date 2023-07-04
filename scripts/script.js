// Constants
// Number of projects to show in Homepage
const PROJECTS_MAIN = 2;
// Projects information list
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
    {
        name: "Etch a Sketch!",
        description: "This is my implementation of a basic pixel drawing app. You can change the resolution og the grid and the colors to use.",
        demo: "https://iaaron-xyz.github.io/etch-a-sketch/",
        repo: "https://github.com/iaaron-xyz/etch-a-sketch",
        image: "./public/images/projects/project-etch-a-sketch.jpg"
    },
    {
        name: "Calculator",
        description: "This webpage displays a functional calculator. This calculator is able to make simple calculations, handy for quick computations.",
        demo: "https://iaaron-xyz.github.io/calculator/",
        repo: "https://github.com/iaaron-xyz/calculator",
        image: "./public/images/projects/project-calculator.jpg"
    },
]

// DOM Elements
const projectsSection = document.querySelector(".row-projects");

// Show the latest N projects in homepage
displayProjects();


// Display the projects from newest to oldest
function displayProjects() {
    projectsNumber = projectsList.length;
    projectsSection.innerHTML = '';

    // HOMEPAGE - DISPLAY LATEST PROJECTS
    if (projectsSection.id == "projects-home") {
        // Append the last 2 elements projects added
        for (let i = projectsNumber-1; i >= projectsNumber-PROJECTS_MAIN; i--) {
            projectsSection.innerHTML +=   `<div class="project-card"> \
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

    // PROJECTS PAGE - ALL THE FRONTEND PROJECTS
    else if (projectsSection.id == "frontend-projects-all") {        
        // Append all the projects from newest to oldest
        for (let i = projectsNumber-1; i >= 0; i--) {
            projectsSection.innerHTML +=   `<div class="project-card"> \
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
    return;
}