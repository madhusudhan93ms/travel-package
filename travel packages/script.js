
var sidenavbar=document.querySelector(".side-list");
var menu1= document.querySelector(".menu-icon1");
var menu2= document.querySelector(".menu-icon2");
function show(){
sidenavbar.style.display= "block";

    var block=document.querySelector(".side-list");
   if(sidenavbar!==block){
    menu1.style.display="block";
    menu2.style.display="none";
 }
 else{
    menu2.style.display="block";
    menu1.style.display= "none";
 }
}

function hide(){
    sidenavbar.style.display="none";
    var block=document.querySelector(".side-list");
   if(sidenavbar !== block){
    menu2.style.display="block";
    menu1.style.display="none";
 }
 else{
    menu1.style.display="block";
    menu2.style.display= "none";
 }

}

window.onscroll = function () {
    var navbar = document.querySelector('.item');
    var screenWidth = window.innerWidth;

    if (screenWidth > 700) {  
        if (window.scrollY < 20) {  
            navbar.style.top = "40px";  
            navbar.style.position = "fixed";
        } else {
            navbar.style.top = "0px";  
        }
    } else {
        if (window.scrollY > 20) {
            navbar.style.top = "-100px"; 
        } else {
            navbar.style.top = "0px"; 
        }
        navbar.style.transition = "top 0.1s ease-in-out";
    }
};



function toggleMenu() {
    const navLinks = document.querySelector('.list');
    navLinks.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", function () {
    let section = document.querySelector(".text-left");

    let observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting < 0.3) {
                    section.classList.add("big-text"); 
                } else {
                    section.classList.remove("big-text"); 
                }
            });
        },
        { threshold: 0.9} 

    );

    observer.observe(section);
});


document.addEventListener("DOMContentLoaded", function () {
    let videos = document.querySelectorAll(".fullscreen-video");
    let currentIndex = 0;
    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            let video = entry.target;
            if (entry.isIntersecting > 0.0) {
                playVideos();
                video.classList.add("big-video")
            } else {
                playVideos();
                video.classList.remove("big-video" ,)
            }
        });
    }, { threshold: 0.6 });
    videos.forEach(video => observer.observe(video));

    observer.observe(document.querySelector(".video-container"));

    function playVideos() {
        if (currentIndex >= videos.length) {
            currentIndex = 0; 
        }

        videos.forEach((video, index) => {
            video.style.opacity = index === currentIndex ? "1" : "0";
            if (index === currentIndex) {
                video.play();
                setTimeout(() => {
                    video.pause();
                    video.currentTime = 0;
                    currentIndex++;
                    playVideos();
                }, 3000); 
            }
        });
    }
});


// document.addEventListener("DOMContentLoaded", function () {
//     let avatar = document.querySelector(".avatar");

//     let observer = new IntersectionObserver(function (entries) {
//         entries.forEach(function (entry) {
//             if (entry.isIntersecting >=0.5) {
//                 avatar.classList.add("moving");
//             } else {
//                 avatar.classList.remove("moving");
//             }
//         });
//     }, { threshold: 0.8 });

//     observer.observe(document.querySelector(".avatar"));
// });

document.addEventListener("DOMContentLoaded", function () {
    let avatar = document.querySelector(".avatar");
    let screenWidth = window.innerWidth; 

    if (screenWidth < 768) {
        return; 
    }

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                avatar.classList.add("moving");
            } else {
                avatar.classList.remove("moving");
            }
        });
    }, { threshold: 0.8 });

    observer.observe(document.querySelector(".avatar"));
});



let reviews = document.querySelectorAll('.review-box');
    let currentIndex = 0;

    function switchReview() {
        reviews[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % reviews.length;
        reviews[currentIndex].classList.add('active');
    }
