const getButton = document.getElementById('enter-button');

function buttonAlert(event) {
  //event.preventDefault();
  const loginPadrao = 'tryber@teste.com';
  const senhaPadrao = '123456';
  const getLogin = document.getElementById('input-login').value;
  const getSenha = document.getElementById('input-senha').value;

  if (getLogin !== loginPadrao || getSenha !== senhaPadrao) {
    alert('Login ou senha inválidos.');
  } else if (getLogin === loginPadrao && getSenha === senhaPadrao) {
    alert('Olá, Tryber!');
  }
}
getButton.addEventListener('click', buttonAlert);

const btnSubmit = document.getElementById('submit-btn');
const getCheckbox = document.getElementById('agreement');
btnSubmit.disabled = true;

function stateHandle(event) {
  //event.preventDefault();
  if (getCheckbox.value === '') {
    btnSubmit.disabled = true;
    getCheckbox.value = true;
  } else {
    btnSubmit.disabled = false;
    getCheckbox.value = '';
  }
  console.log(getCheckbox.value);
}
getCheckbox.addEventListener('change', stateHandle);

const getTextarea = document.getElementById('textarea');

function countTextarea() {
  const inputLength = getTextarea.value.length;
  const getInput = document.getElementById('counter');
  let counter = 500 - inputLength;
  getInput.innerHTML = counter;
}       
countTextarea();
getTextarea.addEventListener('keyup', countTextarea);

function createDiv () {
  let formDiv = document.createElement('div');
  let getMain = document.querySelector('main');
  let div1 = document.createElement('div');
  getMain.appendChild(formDiv);

  let inputName = document.getElementById('input-name').value;
  let inputLastname = document.getElementById('input-lastname').value;
  div1.innerHTML = 'Nome: '+ inputName + ' ' + inputLastname;
  formDiv.appendChild(div1);

  let div2 = document.createElement('div');
  let inputEmail = document.getElementById('input-email').value;
  div2.innerHTML = 'Email: '+ inputEmail;
  formDiv.appendChild(div2);

  let div3 = document.createElement('div');
  let inputHouse = document.getElementById('house').value;
  div3.innerHTML = 'Casa: ' + inputHouse;
  formDiv.appendChild(div3);

  let div4 = document.createElement('div');
  let inputFamilia = document.querySelector('.classe-radio').value;
  div4.innerHTML = 'Familia: ' + inputFamilia;
  formDiv.appendChild(div4);

  console.log(inputFamilia);




  
  

  console.log(inputName);
  
}
btnSubmit.addEventListener('click', createDiv);

function clearFields(event) {
  event.preventDefault();
  let pai = document.getElementsByClassName('input-form');
  console.log(pai);
  pai.innerHTML = '';
  
  
    
}
btnSubmit.addEventListener('click',clearFields);
  
