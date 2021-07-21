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