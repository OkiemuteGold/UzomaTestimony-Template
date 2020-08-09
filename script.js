
// SLIDER
let thumbnails = document.getElementsByClassName ("thumbnail");

let activeImages = document.getElementsByClassName ("active");

for ( var i = 0; i < thumbnails.length; i++) {
    
    thumbnails[i].addEventListener("mouseover", function(){

        if (activeImages.length > 0) {
            activeImages[0].classList.remove("active");
        }

        this.classList.add("active")
        document.getElementById("featured").src = this.src
        }
    )
}


let buttonLeft = document.getElementById("slideLeft")
let buttonRight = document.getElementById("slideRight")

buttonLeft.addEventListener("click", function(){
    document.getElementById("slider").scrollLeft += -180
})

buttonRight.addEventListener("click", function(){
    document.getElementById("slider").scrollLeft += 180
})


// buttonLeft.addEventListener("click", function(){
//     if(i < thumbnails.length) {
//         document.getElementById("slider").scrollLeft += 180
//     }

//     else if(i >= thumbnails.length) {
//         document.getElementById("slideLeft").hidden
//     }
// })

// buttonRight.addEventListener("click", function(){
//     if(i < thumbnails.length) {
//         document.getElementById("slider").scrollLeft += -180
//     }

//     else if(i >= thumbnails.length) {
//         document.getElementById("slideRight").hidden
//     }
// })


// NAVIGATION
const menu = document.querySelector(".menu");
const showNav = document.querySelector(".showNav");
const hideNav = document.querySelector(".hideNav");
const headerFlow = document.querySelector("header");

showNav.addEventListener("click", show);
hideNav.addEventListener("click", close);

function show(){
    menu.style.transition = "left 400ms linear"
    menu.style.left = "0"
    headerFlow.style.top = "-60px"
    headerFlow.style.transition = "top 400ms linear"
}

function close(){
    menu.style.transition = "left 400ms linear"
    menu.style.left = "-80%"
    headerFlow.style.top = "0"
    headerFlow.style.transition = "top 400ms linear"
}