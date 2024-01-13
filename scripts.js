const area = document.getElementById('bar');
const projects = Array.from(document.querySelectorAll('.project'));
const articles = Array.from(document.querySelectorAll('article'));
const projectImg = Array.from(document.querySelectorAll('.illustration'));
const projectText = Array.from(document.querySelectorAll('h2'));
const projectParagraph = Array.from(document.getElementsByClassName("paragraph")) 
let project = '';
let article = '';

if (area.addEventListener) {
    area.addEventListener('input', () => {
        selector();
    }, false);
} else if (area.attachEvent) {
    area.attachEvent('onpropertychange', () => {
        selector();
    });   
}

function selector() {
    let text =  area.value.toLowerCase();
    if (text != '') {
        for (let i = 0; i < projects.length; i++ ) {
            project = projects[i];
            article = articles[i];
            if (!projectText[i].innerHTML.toLowerCase().includes(text) && !projectParagraph[i].innerHTML.toLowerCase().includes(text)) {
                project.style.display = 'none';
                article.style.display = 'none';
                console.log('project.style.display :', project.style.display)
                console.log('article.style.display :', article.style.display)
            } else {
                project.style.display = 'flex';
                article.style.display = 'block';
                console.log('project.style.display :', project.style.display)
                console.log('article.style.display :', article.style.display)
            }
        }
    } else {
        for (let i = 0; i < project.length ; i++) {
            project = projects[i];
            article = articles[i];
            project.style.display = 'flex';
            article.style.display = 'block';
            console.log('project.style.display :', project.style.hidden)
            console.log('article.style.display :', article.style.hidden)
        }
    }
}