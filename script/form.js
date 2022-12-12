//Находим элементы страницы
const inputForm = document.querySelectorAll('.form-input-element')
const buttonForm = document.getElementById('button-form')

//Ставим слушателя на кнопку
buttonForm.onclick = function(event){
    event.preventDefault() //Отключаем перезагрузку при отправке формы
    inputForm.forEach(input => {
        input.value = ''
    })

    alert('Заявка отправлена!Спасибо!')
}