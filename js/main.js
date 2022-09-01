let mainColor = window.localStorage.getItem('color-opt')
if(mainColor){
    document.documentElement.style.setProperty('--main-color',mainColor)
    document.querySelectorAll(".color-list li").forEach((e)=>{
        e.classList.remove("active");
        if(e.dataset.color===mainColor){
            e.classList.add("active")
        }
    })
}


let setting=document.querySelector(".settings-box .fa-gear");
setting.onclick=function(){

    this.parentElement.classList.toggle("open")

}

const colorLi=document.querySelectorAll(".color-list li")

colorLi.forEach((li)=>{

   li.addEventListener("click",(e)=>{
    document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
    
    window.localStorage.setItem('color-opt',e.target.dataset.color)
    
    handleActive(e)
    
    
  
})

})

const randomBack=document.querySelectorAll(".random-background span");

randomBack.forEach((span)=>{

    span.addEventListener('click',(e)=>{
        handleActive(e)


        if(e.target.dataset.background==='yes'){
            backgroundOpt= true;
            randomizeImgs()
            localStorage.setItem("background_option",true)

        }else{
            backgroundOpt=false;
            clearInterval(randomInterval)
            localStorage.setItem("background_option",false)

        }
    })

})


let landingPage=document.querySelector(".landing-page");

let imgsArray = ["01.png","02.jpg","03.jpg","04.jpg","05.jpg"];

var randomInterval;

var backgroundOpt=true;

let backgroundlocal=localStorage.getItem("background_option");
    if(backgroundlocal !== null){
        if(backgroundlocal==="true"){
            backgroundOpt=true
        }else{
            backgroundOpt=false
        
    }

document.querySelectorAll(".random-background span").forEach((e)=>{
    e.classList.remove("active");

});
if(backgroundlocal==="true"){
    document.querySelector(".yes").classList.add('active')
}else{
    document.querySelector(".no").classList.add('active')
}

}

function randomizeImgs(){
    if(backgroundOpt===true){
        randomInterval=setInterval(() => {
            let randomN=Math.floor(Math.random() * imgsArray.length);
            landingPage.style.backgroundImage= `url("imgs/${imgsArray[randomN]}")`
        
        }, 10000);
    }
}


randomizeImgs()


let skillsSec=document.querySelector(".skills")
let skillsProg=document.querySelectorAll(".skill-progress");
window.onscroll=function(){
    if(this.pageYOffset > (skillsSec.offsetTop + skillsSec.offsetHeight - this.innerHeight)){
skillsProg.forEach((skill)=>{
     Array.from(skill.children).forEach((e)=>{
        e.style.width=skill.dataset.progress

     
    })}
)}

}


let ourGallery=document.querySelectorAll(".images-box img");

ourGallery.forEach(img=>{

    img.addEventListener("click",(e)=>{

        let overlay=document.createElement("div");
        overlay.className="popup-overlay";

        document.body.appendChild(overlay);

        let popupBox=document.createElement("div");
        popupBox.className="popup-box"
        if(img.alt !== null){

            let title=document.createElement("h3");
            let titleText=document.createTextNode(img.alt);
            title.appendChild(titleText);

            popupBox.appendChild(title)

        }

        let popupImg=document.createElement("img");

        popupImg.src=img.src

        popupBox.appendChild(popupImg);

        document.body.appendChild(popupBox);

        let closeSpan=document.createElement("span");
        closeSpan.textContent="X";
        closeSpan.className="close-button"
        popupBox.appendChild(closeSpan)
       
    })
})

document.addEventListener("click",function(e){
    if(e.target.className=="close-button"){
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove()
    }
})

let allBull=document.querySelectorAll(".nav-bullets .bullet")

scrollToSection(allBull);
let allLinks=document.querySelectorAll(".links li a")
scrollToSection(allLinks)

function scrollToSection(array){
    array.forEach(index=>{
        index.addEventListener("click",(e)=>{
            e.preventDefault()
            document.querySelector(index.dataset.section).scrollIntoView({
                behavior:'smooth'
            });
        });
    })
}

function handleActive(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach((el)=>{
        el.classList.remove('active')
    })
    ev.target.classList.add("active");}


let bulletSapn=document.querySelectorAll(".bullets-opt span");
let bulletsEle=document.querySelector(".nav-bullets");

let bulletLSitem=localStorage.getItem("bullets_opt");
if(bulletLSitem !== null){
    bulletSapn.forEach(span=>{
        span.classList.remove("active")
    });
    if(bulletLSitem==="block"){
        bulletsEle.style.display="block";
        document.querySelector(".bullets-opt .yes").classList.add("active")

    }else{
        bulletsEle.style.display="none";
        document.querySelector(".bullets-opt .no").classList.add("active")


    }

}    
bulletSapn.forEach(span=>{
    span.addEventListener("click",(e)=>{
        if(span.dataset.display ==="show"){
            bulletsEle.style.display="block";
            localStorage.setItem("bullets_opt","block")
        }else{
            bulletsEle.style.display="none";
            localStorage.setItem("bullets_opt","none")


        }
        handleActive(e)
    })
})

document.querySelector(".reset-options").onclick=function(){
    localStorage.clear();
    window.location.reload()
}


document.querySelector(".header .toggle-menu").onclick=function(e){
    e.stopPropagation()
    document.querySelector(".header ul").classList.toggle("open")
    if(document.querySelector(".header ul").classList.contains("open")
    ){
        document.querySelector(".header .toggle-menu").classList.add("menu-active")
    }else{
        document.querySelector(".header .toggle-menu").classList.remove("menu-active")

    }
   
}
document.addEventListener("click",(e)=>{
    if(e.target !== document.querySelector(".toggle-menu") && e.target !== document.querySelector(".header ul")){
        if(document.querySelector(".header ul").classList.contains("open")){
        
        document.querySelector(".header .toggle-menu").classList.remove("menu-active")
        document.querySelector(".header ul").classList.remove("open")
    }

    }

})

document.querySelector(".header ul").onclick=function(e){
    e.stopPropagation()
}