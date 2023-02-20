openPerfume = (evt, perfumeSex) => {
    //Khai báo biến i, tab-content, tab-link
    let i, tabcontent, tablinks;

    //Khai báo biến theo thẻ class và tạo biến với class "tab-content"
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //Tạo biến với class "tab-content"
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Thêm class "active" vào thẻ
    document.getElementById(perfumeSex).style.display = "block";
    evt.currentTarget.className += " active";
}

//Click chuột lên thẻ có id "defaultOpen"
// document.getElementById("defaultOpen").click();
window.onload = () => {
    autoOpen();
};

autoOpen = () => {
    document.getElementById("defaultOpen").click();

}

openMenu = () => {
    document.getElementById("main-menu").style.width = "250px";
    document.getElementById("overlay").style.display = "block";
}

closeMenu = () => {
    document.getElementById("main-menu").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

//Scroll smooth to Top
/*
scrollToTop = () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
//Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari
}
*/


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
    scrollFunction();
};

scrollFunction = () => {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
topFunction = () => {
    document.body.scrollTop = 0; // For Apple Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
plusSlides = (n) => {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
currentSlide = (n) => {
    showSlides(slideIndex = n);
}

showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let slideIndex = 0;
showSlides();

showSlides = () => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let slideIndex = [1, 1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}