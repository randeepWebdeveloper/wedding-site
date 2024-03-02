
let navbar = document.querySelector(".navbar");
let logo = document.querySelector('.logo');
let logoImg = document.getElementById('logoImg')
let lit = document.querySelector('.lit');
let lite = document.querySelectorAll('#lite')

let lit1 = document.querySelector('.lit1');
let lit2 = document.querySelector('.lit2');
let lit3 = document.querySelector('.lit3');
let lit4 = document.querySelector('.lit4');
let lit5 = document.querySelector('.lit5');

let slide1 = document.querySelector('.slider1');
let slide2= document.querySelector('.slider2');
let slide3 = document.querySelector('.slider3');
let btn = document.querySelector('.left>i');
let btn2 = document.querySelector('.right>i');
let x,y,z;



function myclass(v){

        v.style.color="goldenrod";

        
}


function myclassout(a){
        a.style.color = 'black';
            
}


let facebook = () => {
    window.open('https://www.facebook.com' , "MsgWindow", "width=800,height=400");
    
}

let insta = ()=>{
    window.open('https://www.instagram.com' , "MsgWindow", "width=800,height=400")
}

let twitter = () =>{
    window.open('https://www.twitter.com' , "MsgWindow", "width=800,height=400")
}

let link = () =>{
    window.open('https://www.Linkedin.com' , "MsgWindow", "width=800,height=400")
}







window.addEventListener('scroll',
   () => {
    navbar.style.backgroundColor = 'white';
    logoImg.src = "images/logo-2.png";
    lit.style.color = 'Black';

    lit1.style.color = 'Black';
    lit2.style.color = 'Black';
    lit3.style.color = 'Black';
    lit4.style.color = 'Black';
    lit5.style.color = 'Black';
    }
)








btn.addEventListener('click',
    () =>{
    
    x = slide1.innerHTML;
    y = slide2.innerHTML;
    z = slide3.innerHTML;

    slide1.innerHTML = z;
    slide2.innerHTML = x;
    slide3.innerHTML = y;

    return(x,y,z)
    }
    
)


btn2.addEventListener('click',
    () =>{
    
    x = slide1.innerHTML;
    y = slide2.innerHTML;
    z = slide3.innerHTML;

    slide1.innerHTML = z;
    slide2.innerHTML = x;
    slide3.innerHTML = y;

    return(x,y,z)
    }
    
)


lit.addEventListener("click",

    ()  =>{
        window.scrollTo(0 , 0);
        
        
    }
)


lit1.addEventListener("click",

    ()  =>{
        window.scrollTo(0 , 1000);
        
    }
)

lit2.addEventListener("click",

    ()  =>{
        window.scrollTo(0 , 2350);
        
    }
)


lit3.addEventListener("click",

    ()  =>{
        window.scrollTo(0 , 3670);
        
    }
)

lit4.addEventListener("click",

    ()  =>{
        window.scrollTo(0 , 4350);
        
    }
)

lit5.addEventListener("click",

    ()  =>{
        window.scrollTo(0 , 5875);
        
    }
)


// ======================section4  ================

let days = document.querySelector('.days>h1')
let Hours = document.querySelector('.Hours>h1');
let min = document.querySelector('.minits>h1');
let sec= document.querySelector('.seconds>h1');
let day
setInterval(
    () =>{
        let day = days.innerText;
        day++
        if(day<19){
        days.innerText = day
        }
       

    },100
)

setInterval(
    () =>{
        let Hour = Hours.innerText;
        Hour++
        if(Hour>99){
            Hour = 0
        }
        Hours.innerText = Hour

    },10000
)

setInterval(
    () =>{
        let Hour = min.innerText;
        Hour++
        if(Hour>99){
            Hour = 0
        }
        min.innerText = Hour

    },1000
)

setInterval(
    () =>{
        let Hour = sec.innerText;
        Hour++
        if(Hour>100){
            Hour = 0
        }
        sec.innerText = Hour
       

    },100
)











