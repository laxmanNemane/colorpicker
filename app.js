let colors = [ "white", "gray", "silver", "maroon", "red", "purple", "fushsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"]


var color =  document.querySelector(".color")
var btn = document.querySelector(".btn")

btn.addEventListener("click" , function(){
    let randomNumber =  getRandomNumber() ;

 
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML=colors[randomNumber]
})


function getRandomNumber(){
    
    return Math.floor(Math.random()*colors.length)
}