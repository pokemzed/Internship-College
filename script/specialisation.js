//Находим контейнер
const specialisationWrapper = document.querySelector('.specialisation_content-block__wrap')

//Создаем массив с данными
const SPECIALISATION_OBJ = [
    {
        title: '3D Визуализация',
        count: '26',
    },
    {
        title: '3D Графика',
        count: '16',
    },
    {
        title: '3D Анимация',
        count: '13',
    },
    {
        title: '3D Моделирование',
        count: '21',
    },
    {
        title: '3D Персонажи',
        count: '2',
    },
    {
        title: '3D-сканирование',
        count: '2',
    },
    {
        title: '3D Экстерьеры',
        count: '4',
    },
    {
        title: '3D Интерьеры',
        count: '15',
    },
]

//Генерируем элементы, исходя из массива
SPECIALISATION_OBJ.map(({title,count},index) => {
    let html = ''
    html = `
        <div class="spec-block__wrap" style="background-image: url('./images/specialisation imgs/spec${index+1}.png');">
            <div class="spec-block_text__wrap">
                <h3>${title}</h3>
                <h3>${count}</h3>
            </div>
        </div>
    `
    specialisationWrapper.insertAdjacentHTML('beforeend', html)
})