const area = document.getElementById('bar');
const project = Array.from(document.querySelectorAll('.project'));
const projectText = Array.from(document.querySelectorAll('h2'));

console.log(project);
console.log(projectText)


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
        for (let i = 0; i < project.length; i++ ) {
            if (!projectText[i].innerHTML.toLowerCase().includes(text)) {
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