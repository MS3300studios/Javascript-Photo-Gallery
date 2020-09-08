var lightbox = document.getElementById('lightbox')
var imgList = document.querySelectorAll('#container img')
var lightboxImage = document.getElementById('largeImg')
var description = document.getElementById('description')
//buttons
var left = document.getElementById('btnLeft')
var right = document.getElementById('btnRight')
var x = document.getElementById('btnX')

var imgSourceList = []
for(let i=0; i<imgList.length; i++){
    imgSourceList.push(imgList[i].src)
}

// list of li elements that contain descriptions
var descList = document.querySelectorAll('#descList li')
// list of innerHTML extracted from li elements above
var descTxtList = []
for(let i=0; i<descList.length; i++){
    descTxtList.push(descList[i].innerHTML)
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

        currentSource = lightboxImage.src
        let descSource = imgSourceList.indexOf(currentSource)
        description.innerHTML = descTxtList[descSource]
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
            description.innerHTML = descTxtList[newCell]
            currentSource = imgSourceList[newCell]
        }
    }
    else if(currentCell==firstCell){
        if(dir == true){
            newCell = currentCell+1
            lightboxImage.src = imgSourceList[newCell]
            description.innerHTML = descTxtList[newCell]
            currentSource = imgSourceList[newCell]
        }
    }
    else{
        if(dir == true) newCell = currentCell+1
        else newCell = currentCell-1

        lightboxImage.src = imgSourceList[newCell]
        description.innerHTML = descTxtList[newCell]
        currentSource = imgSourceList[newCell]
    }
}

addEventListener('click', function(event){
    if(event.target == right){
        direction = true
        changeImage(currentSource, direction)
    }
    else if(event.target == left){
        direction = false
        changeImage(currentSource, direction)
    }
})

