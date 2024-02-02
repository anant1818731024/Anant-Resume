const handleProjectClick = (project) => {
    console.log("function called");
    let urlToOpen
    switch(project){
        case "fixedPeriodMock":
            urlToOpen = "https://www.adda247.com/my-mock-test"
            break;
        case "packageUpgrade":
            alert("Can be opened only with company email id")
            return;
        case "socialMediaApp":
            urlToOpen = "https://github.com/anant1818731024/social-application"
    }
    if (urlToOpen) window.open(urlToOpen, "_blank");
} 


const handleNavClick = (e) => {
    e.preventDefault();
    const section = e?.target?.href?.split("#")[1];

    const yCoordinate = document?.getElementById(section)?.getBoundingClientRect()?.y;
    if(!yCoordinate){
        return;
    }

    let currentScroll = 0;

    const interval = setInterval(() => {
        if(currentScroll >= yCoordinate){
            clearInterval(interval);
            return;
        }
        currentScroll += 10;
        window.scrollBy(0, 10);
    },5)
}

const fillBar = (bar, targetWidth) => {
    let currentWidth = 0;
    const interval = setInterval(() => {
        if(currentWidth == targetWidth){
            clearInterval(interval);
        }
        currentWidth += 1;
        bar.style.width = currentWidth + "%";
    },10)
}

const fillBars = () => {
    const bars = document.querySelectorAll("#skills-list > div > div");
    for(let bar of bars){
        fillBar(bar, bar.getAttribute("data-bar-width"))
    }
}
let isSkillsSectionLoaded = false;
const handleScroll = () => {
    console.log("scrolling");
    
    const skillsContainer = document.getElementById("skills-list");
    if(!isSkillsSectionLoaded && skillsContainer.getBoundingClientRect().top < window.innerHeight){
        console.log("skill section loaded");
        isSkillsSectionLoaded = true;
        fillBars();
    }

    if(skillsContainer.getBoundingClientRect().top > window.innerHeight){
        isSkillsSectionLoaded= false;
    }
}

window.addEventListener("scroll", handleScroll);