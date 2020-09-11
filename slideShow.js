var btnX = document.getElementById('btnX')
var btnTickable = document.getElementById('btnTickable')
var ticked = false;
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


function startSlideshow(t, currSrc){
    currentCell = imgSourceList.indexOf(currSrc)
    let lastCell = imgSourceList.length-1;
    let changePhoto = function(){
        lightboxImage.src = imgSourceList[currentCell+1]
        description.innerHTML = descTxtList[currentCell+1]
        currentCell++
        if(ticked==false) clearInterval(timer)
        else if(currentCell==lastCell){
            currentCell = -1
        }
    }
    let timer = setInterval(changePhoto,t)
}

btnTickable.addEventListener('click', function(){
    if(ticked == false){
        btnTickable.src = './assets/buttons/btnTicked.png';
        ticked = true;
        startSlideshow(time, currentSource);
    }
    else if(ticked == true){
        btnTickable.src = './assets/buttons/btnNotTicked.png';
        ticked = false;    
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