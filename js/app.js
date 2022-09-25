const OpenModalFormBtn = document.querySelectorAll('.btn-js')
const OpenModal = document.querySelectorAll('.modal')
const OpenModalForm = document.querySelector('.modal-fb')
const OpenModalClose = document.querySelectorAll('.modal__close')
const upBtn = document.querySelector('.footer__btn')
const kittensModalBtn = document.querySelector('.btn-js-info-kittens')
const scientistModalBtn = document.querySelector('.btn-js-info-at-scientist')
const kittensModal = document.querySelector('.modal-kittens')
const scientistModal = document.querySelector('.modal-at-scientist')
const bodyElement = document.body 


document.addEventListener('DOMContentLoaded', () => {

    const swiper1 = new Swiper('.advantages__slider', {
        pagination: {
            el: ".swiper-pagination",
          },
    });
    const swiper2 = new Swiper('.price__slider', {
        pagination: {
            el: ".swiper-pagination",
          },
    });
    const swiper3 = new Swiper('.foto__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            1240: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        },
        pagination: {
            el: ".swiper-pagination",
          },
    });


    kittensModalBtn.addEventListener('click', () => {
        kittensModal.classList.add('modal--active')
        bodyElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
    scientistModalBtn.addEventListener('click', () => {
        scientistModal.classList.add('modal--active')
        bodyElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })

    upBtn.addEventListener('click', () => {
        bodyElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
    
    OpenModalFormBtn.forEach((btn) =>  {
        btn.addEventListener('click', () => {
            OpenModal.forEach(el => el.classList.remove('modal--active'))
            OpenModalForm.classList.add('modal--active')

            bodyElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    })
    OpenModalClose.forEach((btn) =>  {
        btn.addEventListener('click', () => {
            OpenModal.forEach(el => el.classList.remove('modal--active'))
        })
    })


    // btnOpenPopup.forEach(function(event) {
    //     event.addEventListener('click', function(event) {
    //         popupMain.classList.add('franchise-um-popup--active')

    //         popupMain.scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start'
    //         })
    //     })
    // })
});





