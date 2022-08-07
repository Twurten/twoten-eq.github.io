const background = document.getElementById("background")

function main(){
    console.log("setting up background...")
    genBackground()
    console.log("set up background")
}

function genBackground(){
    background.width = background.clientWidth
    background.height = background.clientHeight
    const context = background.getContext('2d')
    context.fillStyle = "rgba(0,0,0,255)"
    context.fillRect(0,0,background.width, background.height)
    context.fillStyle = "rgba(105,105,105,255)"
    for(let i = 0; i<500; i++){
        context.fillRect(Math.floor(Math.random()*background.width),Math.floor(Math.random()*background.height),1,1)
    }

}

document.body.onload = main