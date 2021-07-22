const getButton = document.getElementById('enter-button');

function buttonAlert(event) {
  event.preventDefault();
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
  event.preventDefault();
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
