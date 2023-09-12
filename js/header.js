function myFunction() {
    var x = document.getElementById("vg-navbar");
    if (x.className === "vg-nav") {
        x.className += " responsive";

    } else {
        x.className = "vg-nav";
    }
}

window.onscroll = function () {
    scrollFunction();
    stickyFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("vg-navbar").style.padding = "0px";
        document.getElementById("vg-navbar").style.fontSize = "1rem";
    } else {
        document.getElementById("vg-navbar").style.padding = "30px 10px";
        document.getElementById("vg-navbar").style.fontSize = "1.25rem";
    }
}

var navbars = document.getElementById("vg-navbar-2");
var sticky = navbars.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
        navbars.classList.add("vg-sticky");
    } else {
        navbars.classList.remove("vg-sticky");
    }
}