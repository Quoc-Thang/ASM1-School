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