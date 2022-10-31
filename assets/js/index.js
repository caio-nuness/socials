var stateButton = false;

const buttonDarkMode = document.querySelector('.box_darkmod__button_darkmod');
const container = document.querySelector('.container')
const toggle = document.querySelector('.box_darkmod__button_darkmod___toggle')
const text = document.querySelector('.box_darkmod > p');

function changeClass() {
    if (stateButton == false) {
        container.classList.toggle('darkmod')
        toggle.style.transform= 'translateX(35px)'
        buttonDarkMode.style.backgroundColor = "var(--body-bg-color)"
        text.innerHTML = "MODO DARK ATIVO"
        stateButton = true 
        // console.log(`Darkmod: ${stateButton}`) // Verifica o estado do botão

    } else {
        text.innerHTML = "MODO LIGHT ATIVO"
        toggle.style.transform= 'translateX(0px)'
        buttonDarkMode.style.backgroundColor = "var(--body-bg-darkmod)"
        container.classList.remove('darkmod')
        stateButton = false 
        // console.log(`Darkmod: ${stateButton}`) // Verifica o estado do botão
    }
       
}