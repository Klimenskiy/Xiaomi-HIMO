let form = document.querySelector('.article-order__form');
let formInputs = document.querySelectorAll('.article-order__input');
let inputPhone = document.querySelector('.article-order__input-phone');
let inputName = document.querySelector('.article-order__input-name');


form.onsubmit = function (){
  const phoneVal = inputPhone.value;
  const emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  formInputs.forEach(function (input) {
    if (input.value === '') {
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
  });
  
  if (emptyInputs.length !== 0) {
    console.log(" Не все поля заполнены!")
    return false;
  }

}
