const btn = document.querySelector("#tap")
const home1 = document.querySelector(".home")
const home2 = document.querySelector(".home_2")
const subs = document.querySelector(".subs_video")
const home3 = document.querySelector(".home_3")
const make_you = document.querySelector(".make_youtube")
const sidebar = document.querySelector(".sidebar")
const primary_menu = document.querySelector(".primary_menu")
const side_1 = document.querySelector("#side1")
const ifr = document.querySelectorAll("iframe")
const make = document.querySelector(".make_video")
let a = true


function btn_on() {
    if (a === true) {
        sidebar.style.width = "20%"
        sidebar.style.overflow = "scroll"
        home1.style.display = "block"
        home2.style.display = "block"
        home3.style.display = "block"
        make_you.style.display = "block"
        subs.style.display = "block"
        primary_menu.style.display = "none"
        make.style.width = "80%"
        a = false
    } else {
        sidebar.style.width = "9%"
        home1.style.display = "none"
        home2.style.display = "none"
        home3.style.display = "none"
        make_you.style.display = "none"
        subs.style.display = "none"
        primary_menu.style.display = "block"
        sidebar.style.overflow = "hidden"
        make.style.width = "90%"
        a = true
    }
}


const pro_sidebar = document.querySelector(".profile_sidebar")
let i = true
function displayNone(){
    if (i === true) {
        pro_sidebar.style.display = "block"
        i = false
    } else {
        pro_sidebar.style.display = "none"
        i = true
        
    }
}

