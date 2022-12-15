const specialisationWrapper = document.querySelector('.spspecialisationec-cards__wrap')
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
]

SPECIALISATION_OBJ.map(({title, count},index) => {
    let html = ''
    html = `
    <div class="specialisation-card"  style="background-image: url('./images/spec-img/spec${index+1}.png')">
        <div class="specialisation-card-title__wrap">
            <h4>${title}</h4>
            <p>${count}</p>
        </div>
    </div>
    `
    specialisationWrapper.insertAdjacentHTML('beforeend', html)
})