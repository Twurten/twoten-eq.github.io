let storage = document.getElementById("pixels")

document.body.addEventListener("mousemove", (e)=>{
    let x = e.x-(e.x%10)
    let y = e.y - (e.y%10)
    for(let i = -1; i<2; i++){
        for(let j = -1; j<2; j++){
            createPixel(x+(i*10),y+(j*10))
        }
    }
})

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