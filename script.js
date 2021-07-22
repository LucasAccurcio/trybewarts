let getButton = document.getElementById('enter-button');
let getLogin = document.getElementById('input-login').value;
let getSenha = document.getElementById('input-senha').value;



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


let btnSubmit = document.getElementById('submit-btn');
let getCheckbox = document.getElementById('agreement');
btnSubmit.disabled = true;
function stateHandle(event) {
    event.preventDefault();
    if (getCheckbox.value === "") {
        btnSubmit.disabled = true;
        getCheckbox.value = true 
        
    } else {
        btnSubmit.disabled = false;
        getCheckbox.value = "";
    }
    console.log(getCheckbox.value);
}
getCheckbox.addEventListener("change", stateHandle);


