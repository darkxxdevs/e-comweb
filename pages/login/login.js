

const toogleActive = document.getElementById("active-toggle");
const login = document.getElementById("formdiv-1");
const signUp = document.getElementById("formdiv-2");

function isMobileDevice() {
    return window.innerWidth < 900;
}

function isUltraSmoll() {
    return window.innerWidth < 400;
}

if (isMobileDevice()) {

    function siup() {
        toogleActive.style.left = '50%'
        toogleActive.style.background = "to left"
        login.style.left = "-112%"
        signUp.style.left = "20%"
    }

    function logiin() {
        toogleActive.style.left = '0%'
        login.style.left = "20%"
        signUp.style.left = "112%"
    }

}
else if (isUltraSmoll()) {
    function siup() {
        toogleActive.style.left = '50%'
        login.style.left = "-100%"
        signUp.style.left = "50%"

    }
    function logiin() {
        toogleActive.style.left = '0%'
        login.style.left = "50%"
        signUp.style.left = "100%"
    }
}

function siup() {
    toogleActive.style.left = '50%'
    login.style.left = "-100%"
    signUp.style.left = "29%"

}
function logiin() {
    toogleActive.style.left = '0%'
    login.style.left = "29%"
    signUp.style.left = "100%"
}
