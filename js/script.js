'use strict';

window.addEventListener('DOMContentLoaded', () => {


    const prev = document.querySelector('#prev'),
          next = document.querySelector('#next'),
          slides = document.querySelectorAll('.slider-image'),
          dots = document.querySelectorAll('.dot');
    let slideIndex = 0;


    showSlides(1);

    

    function showSlides(n) {
        if(n > slides.length - 1){
            slideIndex = 0;
        }

        if(n < 0) {
            slideIndex = slides.length - 1;
        }


        slides.forEach(item => {
            item.classList.add('hide', 'fade');
        });

        dots.forEach(dot => {
            dot.classList.remove('dots-active');
        });

        dots[slideIndex].classList.add('dots-active');
        slides[slideIndex].classList.remove('hide');
    }


    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // prev.addEventListener('click', ()=> {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });

    function isClicked() {
        prev.addEventListener('click', ()=> {
            plusSlides(-1);
        });
    
        next.addEventListener('click', () => {
            plusSlides(1);
        }); 
    }

    isClicked();

    

    

});