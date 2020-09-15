var width = window.innerWidth;
var height = window.innerHeight;
var alert = document.getElementById('windowAlert');

console.log(`width: ${width} ,height: ${height}`);

if(width != 2400 && height != 1171){
    alert.style.display = "flex";
}

var btn = document.getElementById('closeAlertBtn')
btn.addEventListener('click', function(){
    alert.style.display = "none";
})

addEventListener('resize', function(){
    if(width != 2400 && height != 1171){
        alert.style.display = "flex";
    }
})