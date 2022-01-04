window.addEventListener("scroll", function () {
    // Clean up in loop
    let sec1 = document.getElementById("sec1");
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

// function up() {
//     if (scrollSection > 1) {
//         document.getElementById("sec" + (scrollSection - 1)).scrollIntoView({
//             behavior: 'smooth'
//         });
//     }
//     else {
//         console.log("LOL NO");
//     }
//     recordPos();
//     scrollSection = scrollSection - 1;
// }

// function down() {
//     if (scrollSection < 7) {
//         document.getElementById("sec" + (scrollSection + 1)).scrollIntoView({
//             behavior: 'smooth'
//         });
//     }
//     else {
//         console.log("LOL NO");
//     }
//     recordPos();
//     scrollSection = scrollSection + 1;
// }

function down() {
    if (scrollSection < 7) {
        window.scrollTo({
            top: document.getElementById("sec" + (scrollSection + 1)).offsetTop + 10,
            behavior: 'smooth'
        });
        scrollSection = scrollSection + 1;
    }
    else {
        console.log("LOL NO");
    }
    recordPos();
}

function up() {
    // Delete this later? Once overall "to-up of current section" feature is added
    if (scrollSection == 1) {
        scrollSection = 2;
    }
    // if (window.scrollY.offsetTop)
    if (scrollSection > 1) {
        window.scrollTo({
            top: document.getElementById("sec" + (scrollSection - 1)).offsetTop,
            behavior: 'smooth'
        });
        scrollSection = scrollSection - 1;
    }
    else {
        console.log("LOL NO");
    }
    recordPos();

}

function downPixels() {
    window.scrollTo(0, (window.scrollY + 10));
}

function recordPos() {
    console.log(scrollSection);
}

let scrollSection = 1;

// assignScrollSection();

// FIX DEFAULT SCROLL LOCATION










// ------------------------------------------------------------------

// // Simplify in loop later
// let sec1 = document.getElementById("sec1");
// let sec2 = document.getElementById("sec2");
// let sec3 = document.getElementById("sec3");
// let sec4 = document.getElementById("sec4");
// let sec5 = document.getElementById("sec5");
// let sec6 = document.getElementById("sec6");

// console.log(sec1);

// window.addEventListener("scroll", function(){
//     if (window.scrollY < sec2.offsetTop + sec2.offsetHeight) {
//         scrollSection = 1;
//     }
//     else if (window.scrollY.offsetTop < sec3.offsetTop + sec3.offsetHeight) {
//         scrollSection = 2;
//     }
//     else if (window.scrollY.offsetTop < sec4.offsetTop + sec4.offsetHeight) {
//         scrollSection = 3;
//     }
//     else if (window.scrollY.offsetTop < sec5.offsetTop + sec5.offsetHeight) {
//         scrollSection = 4;
//     }
//     else if (window.scrollY.offsetTop < sec6.offsetTop + sec6.offsetHeight) {
//         scrollSection = 5;
//     }
//     else if (window.scrollY.offsetTop < sec7.offsetTop + sec7.offsetHeight) {
//         scrollSection = 6;
//     }
// })















































// window.addEventListener("scroll", function(){
//     console.log("sec" + scrollPos);
// })

// // individual

// window.addEventListener("scroll", function(){
//     var pass = document.getElementById("sec1");
//     if (window.scrollY >= (pass.offsetTop + pass.offsetHeight) && (window.scrollY < document.getElementById("sec2").offsetTop + document.getElementById("sec2").offsetHeight)){
//         scrollPos = 1;
//     }
// })

// window.addEventListener("scroll", function(){
//     var pass = document.getElementById("sec2");
//     if (window.scrollY >= (pass.offsetTop + pass.offsetHeight) && (window.scrollY < document.getElementById("sec3").offsetTop + document.getElementById("sec3").offsetHeight)){
//         scrollPos = 2;
//     }
// })

// window.addEventListener("scroll", function(){
//     var pass = document.getElementById("sec3");
//     if (window.scrollY >= (pass.offsetTop + pass.offsetHeight) && (window.scrollY < document.getElementById("sec4").offsetTop + document.getElementById("sec4").offsetHeight)){
//         scrollPos = 3;
//     }
// })

// window.addEventListener("scroll", function(){
//     var pass = document.getElementById("sec4");
//     if (window.scrollY >= (pass.offsetTop + pass.offsetHeight) && (window.scrollY < document.getElementById("sec5").offsetTop + document.getElementById("sec5").offsetHeight)){
//         scrollPos = 4;
//     }
// })

// window.addEventListener("scroll", function(){
//     var pass = document.getElementById("sec5");
//     if (window.scrollY >= (pass.offsetTop + pass.offsetHeight) && (window.scrollY < document.getElementById("sec6").offsetTop + document.getElementById("sec6").offsetHeight)){
//         scrollPos = 5;
//     }
// })

// window.addEventListener("scroll", function(){
//     var pass = document.getElementById("sec6");
//     if (window.scrollY >= pass.offsetTop + pass.offsetHeight){
//         scrollPos = 6;
//     }
// })