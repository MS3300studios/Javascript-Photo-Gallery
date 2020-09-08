var lightbox = document.getElementById('lightbox')
var imgList = document.querySelectorAll('#container img')
var lightboxImage = document.getElementById('largeImg')
var description = document.getElementById('description')
//buttons
var left = document.getElementById('btnLeft')
var right = document.getElementById('btnRight')
var x = document.getElementById('btnX')

//an array of sources of the images 
var imgSourceList = []
for(let i=0; i<imgList.length; i++){
    imgSourceList.push(imgList[i].src)
}

//an array of li elements that contain descriptions
var descList = document.querySelectorAll('#descList li')
// list of innerHTML extracted from li elements above
var descTxtList = []
for(let i=0; i<descList.length; i++){
    descTxtList.push(descList[i].innerHTML)
}

//image changing with buttons
var currentCell = null //the index of the photo currently on the screen
var lastCell = imgList.length-1
var firstCell = 0
var direction = null //determines wether the user wants the next image (true) of previous image (false)
var currentSource = null //the current src of the image, it is used to get the currentCell (index) of the image
var newCell = null



//open lightbox
for(let i=0; i<imgList.length; i++){
    imgList[i].addEventListener('click',function(e){
        lightbox.style.display = 'flex'
        lightboxImage.src = e.target.src
        currentSource = lightboxImage.src
        //get the index of the image and use it to get the correct description for it
        let descriptionCell = imgSourceList.indexOf(currentSource)
        description.innerHTML = descTxtList[descriptionCell]
    })
}

//close the lightbox with X button
x.addEventListener('click', function(){
    lightbox.style.display = 'none'
})

function changeImage(currSrc,dir){
    currentCell = imgSourceList.indexOf(currSrc)

    if(currentCell==lastCell){ //this is the last image, the 'next image' is disable
        if(dir == false){
            newCell = currentCell-1
            lightboxImage.src = imgSourceList[newCell]   //set the correct image
            description.innerHTML = descTxtList[newCell] //set the correct description
            currentSource = imgSourceList[newCell]       //update the source (on which the index is determined)
        }
    }
    else if(currentCell==firstCell){ //this is the first image, the 'previous image' is disabled
        if(dir == true){
            newCell = currentCell+1
            lightboxImage.src = imgSourceList[newCell]
            description.innerHTML = descTxtList[newCell]
            currentSource = imgSourceList[newCell]
        }
    }
    else{ //these are the middle images, previous and next image are enabled
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

