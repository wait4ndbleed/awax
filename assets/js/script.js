/*
// Slide Banner

let pointers1st = document.querySelector('.banner').querySelector('.sliders-pointers');
let totalSlides1st = document.querySelector('.banner').querySelectorAll('.slide').length;
let currentSlide1st = 0;
let Html = ''; 

for (let i = 0; i < totalSlides1st; i++) {
    if (i == 0) {
        Html = '<div class="pointer active"></div>';
    } else {
        Html += '<div class="pointer"></div>';
    }
}

pointers1st.innerHTML = Html;

let pointer1st = document.querySelector('.banner').querySelectorAll('.pointer');

document.querySelector('.banner').querySelector('.sliders').style.width = `calc(100vw * ${totalSlides1st})`;

function goNext() {
    currentSlide1st++;
    if (currentSlide1st > (totalSlides1st-1)) {
        currentSlide1st = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth1st = document.querySelector('.banner').querySelector('.slide').clientWidth;
    let newMargin1st = currentSlide1st * sliderItemWidth1st;
    document.querySelector('.banner').querySelector('.sliders').style.marginLeft = `-${newMargin1st}px`;
    pointer1st[0].classList.remove('active');
    pointer1st[1].classList.remove('active');
    pointer1st[2].classList.remove('active');
    pointer1st[currentSlide1st].classList.add('active');
}

pointer1st.forEach(function(elemento) {
    elemento.addEventListener("click", function() {
        currentSlide1st = Array.from(pointer1st).indexOf(this);
        clearInterval(time1st);
        time1st = setInterval(goNext, 5000);
        updateMargin(); 
    });
});

let time1st = setInterval(goNext, 5000);


// Slide Clients


let totalSlides2nd = document.querySelector('.section-clients').querySelectorAll('.slide').length;
let pointer2nd = document.querySelector('.section-clients').querySelectorAll('.pointer');
let currentSlide2nd = 0;

document.querySelector('.section-clients').querySelector('.sliders').style.width = `calc(100vw * ${totalSlides2nd})`;

function goNext2() {
    currentSlide2nd++;
    if (currentSlide2nd > (totalSlides2nd-1)) {
        currentSlide2nd = 0;
    }
    updateMargin2();
}

function updateMargin2() {
    let sliderItemWidth2nd = document.querySelector('.section-clients').querySelector('.slide').clientWidth;
    let newMargin2nd = currentSlide2nd * sliderItemWidth2nd;
    document.querySelector('.section-clients').querySelector('.sliders').style.marginLeft = `-${newMargin2nd}px`;
    pointer2nd[0].classList.remove('active');
    pointer2nd[1].classList.remove('active');
    pointer2nd[2].classList.remove('active');
    pointer2nd[currentSlide2nd].classList.add('active');
}

pointer2nd.forEach(function(elemento) {
    elemento.addEventListener("click", function() {
        currentSlide2nd = Array.from(pointer2nd).indexOf(this);
        clearInterval(time2nd);
        time2nd = setInterval(goNext2, 5000);
        updateMargin2(); 
    });
});

let time2nd = setInterval(goNext2, 5000);

*/

function inicializarSlider(slideArea, timer) {
    let pointers = slideArea.querySelector('.sliders-pointers');
    let totalSlides = slideArea.querySelectorAll('.slide').length;
    let currentSlide = 0;
    let Html = ''; 

    for (let i = 0; i < totalSlides; i++) {
        if (i == 0) {
            Html = '<div class="pointer active"></div>';
        } else {
            Html += '<div class="pointer"></div>';
        }
    }

    pointers.innerHTML = Html;

    let pointer = slideArea.querySelectorAll('.pointer');

    slideArea.querySelector('.sliders').style.width = `calc(100vw * ${totalSlides})`;

    function goNext() {
        currentSlide++;
        if (currentSlide > (totalSlides-1)) {
            currentSlide = 0;
        }
        updateMargin();
    }

    function updateMargin() {
        let sliderItemWidth = slideArea.querySelector('.slide').clientWidth;
        let newMargin = currentSlide * sliderItemWidth;
        slideArea.querySelector('.sliders').style.marginLeft = `-${newMargin}px`;
        for (let i = 0; i < totalSlides; i++) {
            pointer[i].classList.remove('active');
        }
        pointer[currentSlide].classList.add('active');
    }

    pointer.forEach(function(elemento) {
        elemento.addEventListener("click", function() {
            currentSlide = Array.from(pointer).indexOf(this);
            clearInterval(time);
            time = setInterval(goNext, timer);
            updateMargin(); 
        });
    });

    let time = setInterval(goNext, timer);
}

inicializarSlider(document.querySelector('.banner'), 5000);

inicializarSlider(document.querySelector('.section-clients'), 5000);

inicializarSlider(document.querySelector('.section-packs'), 5000);