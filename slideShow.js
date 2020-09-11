var btnMore = document.getElementById('btnMore')
var btnX = document.getElementById('btnX')
var btnTickable = document.getElementById('btnTickable')
var ticked = false;
var loop = true;
var time = 500;
var lightboxImage = document.getElementById('largeImg')
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

function startSlideshow(t, currSrc, l){
    currentCell = imgSourceList.indexOf(currSrc)
    let lastCell = imgSourceList.length-1;
    let changePhoto = function(){
        lightboxImage.src = imgSourceList[currentCell+1]
        description.innerHTML = descTxtList[currentCell+1]
        currentCell++
        if(ticked==false) clearInterval(timer)
        else if(currentCell==lastCell){
            //l = loop
            if(l==true) currentCell = -1
            else if(l==false) clearInterval(timer)
        }
    }
    let timer = setInterval(changePhoto,t)
}

btnTickable.addEventListener('click', function(){
    if(ticked == false){
        btnTickable.src = './assets/buttons/btnTicked.png';
        ticked = true;
        startSlideshow(time, currentSource, loop);
    }
    else if(ticked == true){
        btnTickable.src = './assets/buttons/btnNotTicked.png';
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
            time = 500;
            buttonSeconds[i].src = './assets/buttons/btnTicked.png'
            buttonSeconds[1].src = './assets/buttons/btnNotTicked.png'
            buttonSeconds[2].src = './assets/buttons/btnNotTicked.png'
            buttonSeconds[3].src = './assets/buttons/btnNotTicked.png'
        })
    }
    else if(i==1){
        buttonSeconds[i].addEventListener('click', function(){
            time = 1000;
            buttonSeconds[i].src = './assets/buttons/btnTicked.png'
            buttonSeconds[0].src = './assets/buttons/btnNotTicked.png'
            buttonSeconds[2].src = './assets/buttons/btnNotTicked.png'
            buttonSeconds[3].src = './assets/buttons/btnNotTicked.png'
        })
    }
    else if(i==2){
        buttonSeconds[i].addEventListener('click', function(){
            time = 2000;
            buttonSeconds[i].src = './assets/buttons/btnTicked.png'
            buttonSeconds[0].src = './assets/buttons/btnNotTicked.png'
            buttonSeconds[1].src = './assets/buttons/btnNotTicked.png'
            buttonSeconds[3].src = './assets/buttons/btnNotTicked.png'
        })
    }
    else if(i==3){
        buttonSeconds[i].addEventListener('click', function(){
            time = 3000;
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
