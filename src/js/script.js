        window.addEventListener('DOMContentLoaded', function () {
            "use strict";

            //slider
            function slider() {   
                let slideIndex = 1,
                    slides = document.querySelectorAll('.slider__item'),
                    prev = document.querySelector('.slider__prev'),
                    next = document.querySelector('.slider__next');
            
                    showSlides(slideIndex);
                    
                    function showSlides(n) {
            
                        if (n > slides.length) {
                            slideIndex = 1;
                        }
                        if (n < 1) {
                            slideIndex = slides.length;
                        }
            
                        slides.forEach((item) => item.style.display = 'none');
            
                        slides[slideIndex - 1].style.display = 'block';
                        }
            
                    function plusSlides(n) {
                        showSlides(slideIndex += n);
                    }  
                    function currentSlide(n) {
                        showSlides(slideIndex = n);
                    }
            
                    prev.addEventListener('click', function() {
                        plusSlides(-1);
                    });
            
                    next.addEventListener('click', function() {
                        plusSlides(1);
                    });
            
                };
        

            slider();
        
        });