const firstVariationSlider = () => {
    //Находим элементы страницы
    const btnBack = document.querySelector('.galery-button-back')
    const btnNext = document.querySelector('.galery-button-next')
    const sliderName = document.querySelector('.galery-content-title__wrap h1')
    const sliderText = document.querySelector('.galery-content-title__wrap p')
    const sliderImage = document.querySelector('.galery-image__wrap')

    //Определяем первый слайд
    let count = 0

    //Создаем массив с данными
    const SLIDER_OBJ = [
        {
            name: 'Владимир Иорданский',
            text: 'Москва, 3D графика <br>Работ в портфолио: 372',
            img: './images/slider imgs/slider-image.png'
        },
        {
            name: '3D Mitra',
            text: 'Москва, 3D графика <br>Работ в портфолио: 178',
            img: './images/slider imgs/slider-image2.png'
        },
        {
            name: 'Виталий Цой',
            text: 'Ростов-на-Дону 3D графика <br>Работ в портфолио: 106',
            img: './images/slider imgs/slider-image3.png'
        },
    ]

    //Управление назад
    btnBack.onclick = function(){
        if(count == 0){
            sliderName.innerHTML = SLIDER_OBJ[0].name
            sliderText.innerHTML = SLIDER_OBJ[0].text
            sliderImage.setAttribute('src', SLIDER_OBJ[0].img)
        } else{
            --count
            sliderName.innerHTML = SLIDER_OBJ[count].name
            sliderText.innerHTML = SLIDER_OBJ[count].text
            sliderImage.setAttribute('src', SLIDER_OBJ[count].img)
        }
    }

    //Управление вперед
    btnNext.onclick = function(){
        if(count == SLIDER_OBJ.length-1){
            sliderName.innerHTML = SLIDER_OBJ[SLIDER_OBJ.length-1].name
            sliderText.innerHTML = SLIDER_OBJ[SLIDER_OBJ.length-1].text
            sliderImage.setAttribute('src', SLIDER_OBJ[SLIDER_OBJ.length-1].img)
        } else{
            ++count
            sliderName.innerHTML = SLIDER_OBJ[count].name
            sliderText.innerHTML = SLIDER_OBJ[count].text
            sliderImage.setAttribute('src', SLIDER_OBJ[count].img)
        }
    }
}
firstVariationSlider()