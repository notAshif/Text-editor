let optionsBtn = document.querySelectorAll('.option-button');
let advanceBtn = document.querySelectorAll('.adv-option-button');
let format = document.querySelectorAll('.format');
let script = document.querySelectorAll('.script');
let createLinkBtn = document.getElementById('createLink');
let align = document.querySelectorAll('.align');
let spacing = document.querySelectorAll('.spacing');
let formatBlockBtn = document.getElementById('formatBlock');
let fontNameBtn = document.getElementById('fontName');
let fontSizeBtn = document.getElementById('fontSize');
let writingArea = document.getElementById('text-input');

const fonts = [
    "Arial",
    "Times New Roman",
    "Verdena",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive"
];

function intializer() {
    highlighter(align, true);
    highlighter(spacing, true);
    highlighter(format, true);

    fonts.map((value) =>{
        let option = document.createElement('option');
        option.value = value;
        option.innerHTML = value;
        fontNameBtn.appendChild(option);
    });

    for(let i = 0; i <= 7; i++){
        let option = document.createElement('option');
        option.innerHTML = i;
        option.value = i;
        fontSizeBtn.appendChild(option);
    }

    fontSizeBtn.value = 3;
};

const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
}
optionsBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        modifyText(button.id, false, null);
    })
});

advanceBtn.forEach((button) => {
    button.addEventListener('change', () =>{
        modifyText(button.id, false, button.value);
    })
});

createLinkBtn.addEventListener('click', () =>{
    let userLink = prompt("Enter a URL:");

    if(/http/i.test(userLink)){
        modifyText(createLinkBtn.id, false, userLink);
    }else{
        userLink = 'http://' + userLink;
        modifyText(createLinkBtn.id, false, userLink);
    }
});

function highlighter(className, needsRemove) {
    className.forEach((button) => {
        button.addEventListener('click', () =>{
            if(needsRemove){
                let alreadyActive = false;

                if(button.classList.contains('active')){
                    alreadyActive = true;
                } 
                removehighlighter(className);

                if(!needsRemove){
                    button.classList.add('active')
                } else {
                    button.classList.toggle('active');
                }
            }
        });
    });
};

function removehighlighter(className) {
    className.forEach((button) =>{
        button.classList.remove('active');
    });
};

window.onload = intializer();


