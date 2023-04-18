const OpenModalFormBtn = document.querySelectorAll('.btn-js')
const OpenModal = document.querySelectorAll('.modal')
const OpenModalFB = document.querySelector('.modal-fb')
const OpenModalGS = document.querySelector('.modal-gs')
const OpenModalClose = document.querySelectorAll('.modal__close')
const upBtn = document.querySelector('.footer__btn')
const kittensModalBtn = document.querySelector('.btn-js-info-kittens')
const scientistModalBtn = document.querySelector('.btn-js-info-at-scientist')
const kittensModal = document.querySelector('.modal-kittens')
const scientistModal = document.querySelector('.modal-at-scientist')
const modalForm = document.querySelector('.modal-fb__form')
const bodyElement = document.body 


document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.menu-burger').addEventListener('click', ()=> {
        document.querySelector('.menu').classList.add('menu--active');
    });

    document.querySelector('.menu__btn-close').addEventListener('click', ()=> {
        document.querySelector('.menu').classList.remove('menu--active');
    });


    const swiper1 = new Swiper('.advantages__slider', {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    });
    const swiper2 = new Swiper('.price__slider', {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
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
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    const swiper4 = new Swiper('.tither__slider', {
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
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    const swiper5 = new Swiper('.roboxod__slider', {
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
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    kittensModalBtn.addEventListener('click', () => {
        OpenModal.forEach(el => el.classList.remove('modal--active'))
        kittensModal.classList.add('modal--active')
        bodyElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
    scientistModalBtn.addEventListener('click', () => {
        OpenModal.forEach(el => el.classList.remove('modal--active'))
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
            OpenModalFB.classList.add('modal--active')

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

    modalForm.addEventListener('submit', (event) => {
        event.preventDefault()
        OpenModal.forEach(el => el.classList.remove('modal--active'))
        OpenModalGS.classList.add('modal--active')
    })

    $("form").submit(function() {
        let th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize(),
            success: function(data) {
                th.trigger("reset");
            }
        });
        return false;
    });

});





