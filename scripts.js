const area = document.getElementById('bar');
const project = Array.from(document.querySelectorAll('.project'));
const projectImg = Array.from(document.querySelectorAll('.illustration'));
const projectText = Array.from(document.querySelectorAll('h2'));
const projectParagraph = Array.from(document.getElementsByClassName("paragraph")) 

if (area.addEventListener) {
    area.addEventListener('input', () => {
        selector();
    }, false);
} else if (area.attachEvent) {
    area.attachEvent('onpropertychange', () => {
        selector();
    });   
}

// function selector() {
//     let text = area.value.toLowerCase();
//     console.log("Nombre de projets:", project.length);
//     console.log("Nombre d'illustrations:", projectImg.length);
//     console.log("Nombre de titres:", projectText.length);
//     console.log("Nombre de paragraphes:", projectParagraph.length);

//     for (let i = 0; i < projectText.length; i++ ) {
//         console.log(`Traitement du projet ${i}`);
//         let projectTitle = projectText[i].innerHTML.toString().toLowerCase();
//         let projectDesc = projectParagraph[i].innerHTML.toString().toLowerCase();

//         console.log("Titre:", projectTitle);
//         console.log("Description:", projectDesc);

//         if (!projectTitle.includes(text) && !projectDesc.includes(text)) {
//             projectImg[i].hidden = true;
//             projectText[i].parentElement.hidden = true;
//             projectParagraph[i].hidden = true;
//         } else {
//             projectImg[i].hidden = false;
//             projectText[i].hidden = false;
//             projectParagraph[i].hidden = false;
//         }
//     }

//     if (text === '') {
//         for (let i = 0; i < project.length ; i++) {
//             projectImg[i].hidden = false;
//             projectText[i].hidden = false;
//             projectParagraph[i].hidden = false;
//         }
//     }
// }


// function selector() {
//     let text = area.value.toLowerCase();
//     console.log("Nombre de projets:", project.length);
//     console.log("Nombre d'illustrations:", projectImg.length);
//     console.log("Nombre de titres:", projectText.length);
//     console.log("Nombre de paragraphes:", projectParagraph.length);
//     for (let i = 0; i < projectText.length; i++) {
//         let projectTitleElement = projectText[i]; // Element DOM du titre
//         let projectDescElement = projectParagraph[i]; // Element DOM du paragraphe
//         let projectContainer = projectTitleElement.parentElement; // Trouver le conteneur .project
//         console.log("Container:", projectContainer);

//         let projectTitle = projectTitleElement.innerHTML.toLowerCase();
//         let projectDesc = projectDescElement.innerHTML.toLowerCase();

//         projectContainer.style.display = (!projectTitle.includes(text) && !projectDesc.includes(text)) ? 'none' : '';
//     }
//     if (text === '') {
//         for (let i = 0; i < projectText.length ; i++) {
//             let projectTitleElement = projectText[i]; // Element DOM du titre
//             let projectContainer = projectTitleElement.parentElement; // Trouver le conteneur .project
//             projectContainer.style.display = (!projectTitle.includes(text) && !projectDesc.includes(text)) ? 'none' : '';
//         }
//     }
// }

function selector() {
    let text =  area.value.toLowerCase();
    if (text != '') {
        for (let i = 0; i < project.length; i++ ) {
            if (!projectText[i].innerHTML.toLowerCase().includes(text) && !projectParagraph[i].innerHTML.toLowerCase().includes(text)) {
                project[i].hidden = true;
            } else {
                project[i].hidden = false;
            }
        }
    } else {
        for (let i = 0; i < project.length ; i++) {
            project[i].hidden = false;
        }
    }
}