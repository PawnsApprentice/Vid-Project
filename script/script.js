const header = document.querySelector('header')
const body = document.querySelector('body')
const showcase = document.querySelector('.showcase')
const about = document.querySelector('.about')
const team = document.querySelector('.team')
const reports = document.querySelector('.reports')
const headerH2 = header.children[0].children[0]
const headerListItems = header.children[0].children[1].children[0].children

initialFadeIns()
window.addEventListener('scroll', navbarScroll)
window.onbeforeunload = function () {
    window.scrollTo(0,0)
}

function initialFadeIns(){
    let initialDelay = 700

    /* Fade In Header Elements */
    headerH2.style.opacity = "1"
    setTimeout( ()=>{
        headerListItems[0].style.opacity = "1"
    },initialDelay + 100)
    setTimeout( ()=>{
        headerListItems[1].style.opacity = "1"
    },initialDelay + 200)
    setTimeout( ()=>{
        headerListItems[2].style.opacity = "1"
    },initialDelay + 300)
    setTimeout( ()=>{
        headerListItems[3].style.opacity = "1"
    },initialDelay + 400)

    /* Fade In Showcase Elements */
    const showcaseTexts = showcase.children[0].children
    const showcaseImg = showcase.children[1]
    setTimeout( ()=>{
        showcaseTexts[0].style.opacity = "1"
    },initialDelay + 500)
    setTimeout( ()=>{
        showcaseTexts[1].style.opacity = "1"
    },initialDelay + 600)
    setTimeout( ()=>{
        showcaseTexts[2].style.opacity = "1"
    },initialDelay + 700)
    setTimeout( ()=>{
        showcaseImg.style.transform = "translateX(0px)"
    },initialDelay + 800)
}

function navbarScroll(){
    const showcaseBottom = showcase.getBoundingClientRect().bottom
    const aboutBottom = about.getBoundingClientRect().bottom
    const teamBottom = team.getBoundingClientRect().bottom
    const reportsBottom = reports.getBoundingClientRect().bottom

    headerH2.classList.remove('selected')
    for(const child of headerListItems){
        child.classList.remove('selected')
    }
    
    if(window.scrollY > reportsBottom){
        headerListItems[3].classList.add('selected')
        return
    }
    if(window.scrollY > teamBottom){
        headerListItems[2].classList.add('selected')
        return
    }
    if(window.scrollY > aboutBottom){
        headerListItems[1].classList.add('selected')
        return
    }
    if(window.scrollY > showcaseBottom){
        headerListItems[0].classList.add('selected')
        return
    }
    
    headerH2.classList.add('selected')
}

/*window.addEventListener('scroll',showWhenScrolled)/*
/*
function showWhenScrolled(){
    const triggerBottom = window.innerHeight / 10 * 4
    
    const showcaseTop = showcase.getBoundingClientRect().top
    const aboutTop = about.getBoundingClientRect().top
    if(aboutTop < triggerBottom){
        showSection(about)
    }
    if(showcaseTop < triggerBottom){
        showSection(showcase)
    }
}

function showSection(section){
    if(section = about){
        console.log("Here")
        const aboutTexts = about.children[0].children
        const aboutImg = about.children[1]
        setTimeout( ()=>{
            aboutTexts[0].style.opacity = "1"
        },0)
        setTimeout( ()=>{
            aboutTexts[1].style.opacity = "1"
        },100)
        setTimeout( ()=>{
            aboutTexts[2].style.opacity = "1"
        },200)
        setTimeout( ()=>{
            aboutImg.style.transform = "translateX(0px)"
        },300)
    }
}

function showAbout(){
}

function removeAbout(){
    const aboutTexts = about.children[0].children
    const aboutImg = about.children[1]
    setTimeout( ()=>{
        aboutTexts[0].style.opacity = "0"
    },0)
    setTimeout( ()=>{
        aboutTexts[1].style.opacity = "0"
    },0)
    setTimeout( ()=>{
        aboutTexts[2].style.opacity = "0"
    },0)
    setTimeout( ()=>{
        aboutImg.style.transform = "translateX(-1000px)"
    },0)
}*/