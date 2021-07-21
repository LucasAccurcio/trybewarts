let getButton = document.getElementById('enter-button');
let getLogin = document.getElementById('input-login').value;
let getSenha = document.getElementById('input-senha').value;

let btnSubmit = document.getElementById('submit-btn');
let getCheckbox = document.getElementById('agreement');
btnSubmit.disabled = true;

function buttonAlert(event) {
    event.preventDefault();
    let loginPadrao = 'tryber@teste.com';
    let senhaPadrao = '123456';
    let getLogin = document.getElementById('input-login').value;
    let getSenha = document.getElementById('input-senha').value;
    
    if( getLogin !== loginPadrao || getSenha !== senhaPadrao){
        alert('Login ou senha inválidos.');
    } else if (getLogin === loginPadrao && getSenha === senhaPadrao){
        alert('Olá, Tryber!');
    }
}
getButton.addEventListener('click', buttonAlert);


function stateHandle(event) {
        event.preventDefault();
        console.log(event.value);
        if (getCheckbox.value === "") {
         btnSubmit.disabled = true; 
         } else {
        btnSubmit.disabled = false;
    }
     getCheckbox.addEventListener("click", stateHandle);
}

