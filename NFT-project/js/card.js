const controller = new ScrollMagic.Controller();

const tween = new TimelineMax();
tween
    .to(".box-1", 1, {
        opacity: 0.8,
        marginTop: 0,
        marginLeft: '80%'
    }, '-=1')
    .to(".box-2", 1, {
        marginTop: 0,
        marginRight: '28%',
        opacity: 0.9
    }, '-=1')
    .to(".box-3", 1, {
        marginTop: 0,
        marginRight: '80%'
    }, '-=1')
    .to(".box-4", 1, {
        marginTop: 0,
        marginLeft: '28%'
    }, '-=1')
    .to(".box-5", 1, {
        marginTop: 0
    }, '-=1')

const scene = new ScrollMagic.Scene ({
    triggerElement: '#containerr',
    duration: 2000,
    triggerHook: 0
})
    .setTween(tween)
    .setPin('#containerr')
    .addTo(controller);


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}






