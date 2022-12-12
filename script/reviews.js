const secondVariationSlider = () => {
    //Находим элементы страницы
    const containerReviews = document.querySelector('.review__wrap')
    const btnBackReviews = document.querySelectorAll('.review-back')
    const btnNextReviews = document.querySelectorAll('.review-next')

    //Определяем значение первого слайда
    let countReviews = 0

    //Создаем массив с данными
    const REVIEWS_OBJ = [
        {
            name: 'Азат',
            title: 'Фрилансер для 3D моделирования',
            subtitle: 'Без проблем выполнил задание по 3d моделированию.',
            age: '28 лет',
            img: './images/review imgs/rev1.png'
        },
        {
            name: 'Игорь',
            title: 'Фрилансер для 3D моделирования',
            subtitle: 'Игорь выполнил заказ точно в срок, 3D модель и рендер очень хорошо проработаны. Спасибо за работу.',
            age: '26 лет',
            img: './images/review imgs/rev2.png'
        },
        {
            name: 'Иван',
            title: 'Фрилансер для 3D моделирования',
            subtitle: 'Итог работы очень понравился, все сделали качественно и в срок. Всегда на связи, присылают промежуточные варианты для согласования, очень удобно. 3D-модели нереально отличить от фотографии, рекомендую!',
            age: '26 лет',
            img: './images/review imgs/rev3.png'
        },
    ]

    //Генерим первый отзыв
    generateReview(countReviews)

    //Управление назад
    btnBackReviews.forEach(elem => {
        elem.addEventListener('click', () => {
            if(countReviews == 0){
                generateReview(0)
            } else{
                --countReviews
                generateReview(countReviews)
            }
        })
    })

    //Управление вперед
    btnNextReviews.forEach(elem => {
        elem.addEventListener('click', () => {
            if(countReviews == REVIEWS_OBJ.length - 1){
                generateReview(REVIEWS_OBJ.length - 1)
            } else{
                ++countReviews
                generateReview(countReviews)
            }
        })
    })

    function generateReview(count){
        let html = ''
        html = `
        <div class="review_image-title__wrap">
            <img src="${REVIEWS_OBJ[count].img}" alt="">
            <div class="review-title__wrap">
                <h2>${REVIEWS_OBJ[count].name}</h2>
                <h4>${REVIEWS_OBJ[count].age}</h4>
            </div>
        </div>
        <div class="main-review__wrap">
            <h2>${REVIEWS_OBJ[count].title}</h2>
            <h4>${REVIEWS_OBJ[count].subtitle}</h4>
        </div>
        <a class="review-link" href="#">Все отзывы (125)</a>
        `
        containerReviews.innerHTML = html
    }
}
secondVariationSlider()