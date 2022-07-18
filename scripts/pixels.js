let storage = document.getElementById("pixels")
const size = 10
let prevX = 0, prevY = 0
let x = 0, y = 0

document.body.addEventListener("mousemove", (e)=>{
    prevX = x
    prevY = y
    x = e.x-(e.x%size)
    y = e.y - (e.y%size)
    
    pixel3x3(x,y)
})

function pixel3x3(x, y){
    for(let i = -1; i<2; i++){
        for(let j = -1; j<2; j++){
            createPixel(x+(i*size),y+(j*size))
        }
    }
}

function createPixel(x, y){
    let s = document.getElementsByClassName("pixel")
    for(let i = 0; i<s.length; i++){
        let p = s[i]
        if(x+"px"==p.style.left&&y+"px"==p.style.top)
            p.remove()
    }

    let p = document.createElement("div")
    p.style.top=y+"px"
    p.style.left=x+"px"
    p.classList.add("pixel")
    p.style.opacity = 0.5
    p.style.backgroundColor = "rgb("+Math.random()*256+","+Math.random()*256+","+Math.random()*256+")"

    storage.appendChild(p)

    let time = (Math.random()+5)*100
    setTimeout(function(){
        p.style.opacity = 0
        setTimeout(function(){
            p.remove()
        },300)
    }, time)
}