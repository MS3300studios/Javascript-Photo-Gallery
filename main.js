var lightbox = document.getElementById('lightbox')
var imgList = document.querySelectorAll('#container img')
var lightboxImage = document.getElementById('largeImg')
//buttons
var left = document.getElementById('btnLeft')
var right = document.getElementById('btnRight')
var x = document.getElementById('btnX')

var imgSourceList = []
for(let i=0; i<imgList.length; i++){
    imgSourceList.push(imgList[i].src)
}

//image changing with buttons
var currentCell = null
var lastCell = imgList.length-1
var firstCell = 0
var direction = null
var currentSource = null
var newCell = null



//open lightbox
for(let i=0; i<imgList.length; i++){
    imgList[i].addEventListener('click',function(e){
        lightbox.style.display = 'flex'
        lightboxImage.src = e.target.src
    })
}

//close the lightbox with X button
x.addEventListener('click', function(){
    lightbox.style.display = 'none'
})

function changeImage(currSrc,dir){
    currentCell = imgSourceList.indexOf(currSrc)

    if(currentCell==lastCell){
        if(dir == false){
            newCell = currentCell-1
            lightboxImage.src = imgSourceList[newCell]
            currentSource = imgSourceList[newCell]
        }
    }
    else if(currentCell==firstCell){
        if(dir == true){
            newCell = currentCell+1
            lightboxImage.src = imgSourceList[newCell]
            currentSource = imgSourceList[newCell]
        }
    }
    else{
        if(dir == true) newCell = currentCell+1
        else newCell = currentCell-1

        lightboxImage.src = imgSourceList[newCell]
        currentSource = imgSourceList[newCell]
    }
}

addEventListener('click', function(event){
    if(event.target == right){
        direction = true
        currentSource = lightboxImage.src
        changeImage(currentSource, direction)
    }
    else if(event.target == left){
        direction = false
        currentSource = lightboxImage.src
        changeImage(currentSource, direction)
    }
})

