const getButton = document.getElementById('enter-button');

function buttonAlert() {
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

function stateHandle() {
  if (getCheckbox.value === '') {
    btnSubmit.disabled = true;
    getCheckbox.value = true;
  } else {
    btnSubmit.disabled = false;
    getCheckbox.value = '';
  }
}
getCheckbox.addEventListener('change', stateHandle);

const getTextarea = document.getElementById('textarea');

function countTextarea() {
  const inputLength = getTextarea.value.length;
  const getInput = document.getElementById('counter');
  const counter = 500 - inputLength;
  getInput.innerHTML = counter;
}
countTextarea();
getTextarea.addEventListener('keyup', countTextarea);

// Seleciona a tag <form> que será substituída por uma <div> com os valores inseridos no formulário
// Recupera os valores preenchido no formulário
// Cria uma nova string adicionando os todos os valores recuperados e insere na nova <div> criada
function createDiv() {
  const tagForm = document.querySelector('#evaluation-form');
  const inputName = document.getElementById('input-name').value;
  const inputLastname = document.getElementById('input-lastname').value;
  const inputEmail = document.getElementById('input-email').value;
  const inputHouse = document.getElementById('house').value;
  const inputFamily = document.querySelector('input[name="family"]:checked').value;
  const inputCheckbox = document.querySelectorAll('input[name="conteudo"]:checked');
  const conteudos = [];
  inputCheckbox.forEach((element) => {
    conteudos.push(` ${element.value}`);
  });
  const rating = document.querySelector('input[name="rate"]:checked').value;
  const note = document.getElementById('textarea').value;
  tagForm.innerHTML = document.createElement('div');
  tagForm.innerHTML = `Nome: ${inputName} ${inputLastname} <br>
  Email: ${inputEmail} <br>Casa: ${inputHouse} <br>
  Família: ${inputFamily} <br>Matérias:${conteudos} <br>
  Avaliação: ${rating} <br>Observações: ${note}`;
}
btnSubmit.addEventListener('click', createDiv);
