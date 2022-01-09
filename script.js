function assignScrollSection() {
    let sec2 = document.getElementById("sec2");
    let sec3 = document.getElementById("sec3");
    let sec4 = document.getElementById("sec4");
    let sec5 = document.getElementById("sec5");
    let sec6 = document.getElementById("sec6");
    let sec7 = document.getElementById("sec7");
    if (window.scrollY < sec2.offsetTop) {
        scrollSection = 1;
    }
    else if (window.scrollY < sec3.offsetTop) {
        scrollSection = 2;
    }
    else if (window.scrollY < sec4.offsetTop) {
        scrollSection = 3;
    }
    else if (window.scrollY < sec5.offsetTop) {
        scrollSection = 4;
    }
    else if (window.scrollY < sec6.offsetTop) {
        scrollSection = 5;
    }
    else if (window.scrollY < sec7.offsetTop) {
        scrollSection = 6;
    }
    else if (window.scrollY > sec6.offsetTop) {
        scrollSection = 7;
    }
}


window.addEventListener("scroll", function () {
    let sec2 = document.getElementById("sec2");
    let sec3 = document.getElementById("sec3");
    let sec4 = document.getElementById("sec4");
    let sec5 = document.getElementById("sec5");
    let sec6 = document.getElementById("sec6");
    let sec7 = document.getElementById("sec7");

    if (window.scrollY < sec2.offsetTop) {
        scrollSection = 1;
    }
    else if (window.scrollY < sec3.offsetTop) {
        scrollSection = 2;
    }
    else if (window.scrollY < sec4.offsetTop) {
        scrollSection = 3;
    }
    else if (window.scrollY < sec5.offsetTop) {
        scrollSection = 4;
    }
    else if (window.scrollY < sec6.offsetTop) {
        scrollSection = 5;
    }
    else if (window.scrollY < sec7.offsetTop) {
        scrollSection = 6;
    }
    else if (window.scrollY > sec6.offsetTop) {
        scrollSection = 7;
    }
})

function down() {
    if (scrollSection < 7) {
        window.scrollTo({
            top: document.getElementById("sec" + (scrollSection + 1)).offsetTop + 10,
            behavior: 'smooth'
        });
    }
    recordPos();
}

function toTop() {
    window.scrollTo({
        top: document.getElementById("sec1").offsetTop,
        behavior: 'smooth'
    });
    scrollSection = 1;
}

let scrollSection = 1;

assignScrollSection();