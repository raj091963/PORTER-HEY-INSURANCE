// menubar icon
var element1 = document.getElementById("menu_icon");
var element2 = document.getElementById("menu");
function addOpenClass(){
    element1.classList.toggle("icon_cross");
    element2.classList.toggle("active_menu");
}

// slider
$(document).ready(function () {
    $('.slick-slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 400,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 637,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 479,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// remove menu onclick outside
document.onclick = function (e){
    if (!element2.contains(e.target)) {
        element2.classList.remove("active_menu");
        element1.classList.remove("icon_cross");
    }
}

