var btnMore = document.getElementById('btnMore')
var btnX = document.getElementById('btnX')
var btnRight = document.getElementById('btnRight')
var btnLeft = document.getElementById('btnLeft')
var btnTickable = document.getElementById('btnTickable')
var obscureDiv = document.getElementById('unavailableBtnsObscureDiv');
var ticked = false;
var stopSlideshow = false;    //if time is changed this will help reset the timer
var loop = true;
var time = 1000;
var lightboxImage = document.getElementById('largeImg')
var slideShowOptions = document.getElementById('slideshowOptions');


//when slideshow is toggled, this div will obscure the buttons and make them unavailable
var obscureDiv = document.getElementById('unavailableBtnsObscureDiv');

var imgList = document.querySelectorAll('#container img')
var imgSourceList = []
for(let i=0; i<imgList.length; i++){
    imgSourceList.push(imgList[i].src)
}
var description = document.getElementById('description')
var descList = document.querySelectorAll('#descList li')
var descTxtList = []
for(let i=0; i<descList.length; i++){
    descTxtList.push(descList[i].innerHTML)
}
var currentSource = lightboxImage.src


function startSlideshow(currSrc, l){
    var currentCell = imgSourceList.indexOf(currSrc)
    let lastCell = imgSourceList.length-1;
    let changePhoto = function(){
        if(ticked==false || stopSlideshow==true) {
            clearInterval(timer)
            stopSlideshow = false;
        }
        else if(currentCell==lastCell-1 && l==false){
            clearInterval(timer);
            ticked = false;
            btnX.src = './assets/buttons/x.png';
            btnRight.src = './assets/buttons/right.png';
            btnLeft.src = './assets/buttons/left.png';
            btnTickable.src = './assets/buttons/btnNotTicked.png';
            obscureDiv.style.display = 'none';
            //l = loop-> if we want to loop through the pictures it is set to true
        }
        else if(currentCell==lastCell){
            //l = loop-> if we want to loop through the pictures it is set to true
            if(l==true) currentCell = -1;
        }
        lightboxImage.src = imgSourceList[currentCell+1]
        description.innerHTML = descTxtList[currentCell+1]
        currentCell++
    }
    var timer = setInterval(changePhoto, time)
}

btnTickable.addEventListener('click', function(){
    if(ticked == false){
        btnX.src = './assets/buttons/xUnavailable.png';
        btnRight.src = './assets/buttons/rightUnavailable.png';
        btnLeft.src = './assets/buttons/leftUnavailable.png';
        btnTickable.src = './assets/buttons/btnTicked.png';
        slideShowOptions.style.display = "none";
        obscureDiv.style.display = 'block';
        ticked = true;
        startSlideshow(currentSource, loop);
    }
    else if(ticked == true){
        btnX.src = './assets/buttons/x.png';
        btnRight.src = './assets/buttons/right.png';
        btnLeft.src = './assets/buttons/left.png';
        btnTickable.src = './assets/buttons/btnNotTicked.png';
        slideShowOptions.style.display = "block";
        obscureDiv.style.display = 'none';
        ticked = false;    
    }
})

btnMore.addEventListener('click', function(event){
    let src =  event.target.src
    if(src === 'file:///D:/VS%20solutions/Javascript-Photo-Gallery/assets/buttons/moreDown.png'){
        btnMore.src = './assets/buttons/moreUp.png'
    }
    else if(src === 'file:///D:/VS%20solutions/Javascript-Photo-Gallery/assets/buttons/moreUp.png'){
        btnMore.src = './assets/buttons/moreDown.png'
    }
})
btnX.addEventListener('click', function(){
    btnTickable.src = './assets/buttons/btnNotTicked.png'
    ticked = false;
})
addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
        btnTickable.src = './assets/buttons/btnNotTicked.png'
        ticked = false;
    }
})

var buttonSeconds = document.getElementsByClassName('smallButtonSeconds')
for(let i = 0; i< buttonSeconds.length; i++){
    if(i==0){
        buttonSeconds[i].addEventListener('click', function(){
            time = 1000;
            buttonSeconds[i].src = './assets/buttons/btnTicked.png'
            buttonSeconds[1].src = './assets/buttons/btnNotTicked.png'
            buttonSeconds[2].src = './assets/buttons/btnNotTicked.png'
            buttonSeconds[3].src = './assets/buttons/btnNotTicked.png'
        })
    }
    else if(i==1){
        buttonSeconds[i].addEventListener('click', function(){
            time = 2000;
            buttonSeconds[i].src = './assets/buttons/btnTicked.png'
            buttonSeconds[0].src = './assets/buttons/btnNotTicked.png'
            buttonSeconds[2].src = './assets/buttons/btnNotTicked.png'
            buttonSeconds[3].src = './assets/buttons/btnNotTicked.png'
        })
    }
    else if(i==2){
        buttonSeconds[i].addEventListener('click', function(){
            time = 5000;
            buttonSeconds[i].src = './assets/buttons/btnTicked.png'
            buttonSeconds[0].src = './assets/buttons/btnNotTicked.png'
            buttonSeconds[1].src = './assets/buttons/btnNotTicked.png'
            buttonSeconds[3].src = './assets/buttons/btnNotTicked.png'
        })
    }
    else if(i==3){
        buttonSeconds[i].addEventListener('click', function(){
            time = 10000;
            buttonSeconds[i].src = './assets/buttons/btnTicked.png'
            buttonSeconds[0].src = './assets/buttons/btnNotTicked.png'
            buttonSeconds[1].src = './assets/buttons/btnNotTicked.png'
            buttonSeconds[2].src = './assets/buttons/btnNotTicked.png'
        })
    }
    else if(i==4){
        buttonSeconds[i].addEventListener('click', function(){
            buttonSeconds[i].src = './assets/buttons/btnTicked.png'
            buttonSeconds[5].src = './assets/buttons/btnNotTicked.png'
            loop = true
        })
    }
    else if(i==5){
        buttonSeconds[i].addEventListener('click', function(){
            buttonSeconds[i].src = './assets/buttons/btnTicked.png'
            buttonSeconds[4].src = './assets/buttons/btnNotTicked.png'
            loop = false
        })
    }
}



addEventListener('keydown', function(event){
    if(event.key === 'a'){
        console.log(currentCell);
        console.log(lightboxImage.src);
    }
})