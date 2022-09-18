let meme
const c = document.getElementById("f")
const ctx = c.getContext("2d")
let w = c.width
let h = c.height
const params = new URLSearchParams(window.location.search)
let r = "animemes"
if(params.has("r"))
    r = params.get("r")
    
let s = new Audio("./audio.mp3")
s.volume = 0.1
s.loop = true
if(params.has("vol"))
    s.volume = params.get("vol")
s.play()

let play = !params.has("pause")

setInterval(()=>{
    if(!play) return
    main()
}, 3000)

function playPause(){
    play = !play
    document.getElementById("playpause").innerText = play ? "PAUSE" : "PLAY"
}

function updateCanvas(){
    c.width = document.getElementById("uf").clientWidth
    c.height = document.getElementById("uf").clientHeight
    w = c.width
    h = c.height
}

function fetchUnfunnyMeme(){
    const href = `https://meme-api.herokuapp.com/gimme/${r}/1`
    let request = new XMLHttpRequest()
    request.open("GET", href)
    request.send()
    request.onload = ()=>{
        meme = JSON.parse(request.responseText)
        console.log(meme)
        setDisplays()
    }
}

function main(){
    fetchUnfunnyMeme()
}

function setDisplays(){
    document.getElementById("uf").src = meme.memes[0].url
    document.getElementById("src").href = meme.memes[0].postLink
    document.getElementById("uf").onload = drawFunny
}

function drawFunny(){
    updateCanvas()
    ctx.drawImage(document.getElementById("uf"), 0,0,w,h)
    ohWellidkHowToDoTheActualImageReplacing(Math.floor(Math.random()*13))
}
function drawFunnyManual(i){
    updateCanvas()
    ctx.drawImage(document.getElementById("uf"), 0,0,w,h)
    ohWellidkHowToDoTheActualImageReplacing(i)
}

function redo(){
    drawFunny()
}

function ohWellidkHowToDoTheActualImageReplacing(i){
    switch(i){
        case 0: {
            //TOP HALF
            ctx.drawImage(randomFunny(),0,0,w,h/2)
            break;
        }
        case 1: {
            //BOTTOM HALF
            ctx.drawImage(randomFunny(),0,h/2,w,h/2)
            break;
        }
        case 2: {
            //TOP LEFT QUARTER
            ctx.drawImage(randomFunny(),0,0,w/2,h/2)
            break;
        }
        case 3: {
            //BOTTOM LEFT QUARTER
            ctx.drawImage(randomFunny(),0,h/2,w/2,h/2)
            break;
        }
        case 6: {
            //TOP RIGHT QUARTER
            ctx.drawImage(randomFunny(),w/2,0,w/2,h/2)
            break;
        }
        case 7: {
            //BOTTOM RIGHT QUARTER
            ctx.drawImage(randomFunny(),w/2,h/2,w/2,h/2)
            break;
        }
        case 4: {
            //BOTTOM QUARTERS
            ctx.drawImage(randomFunny(),w/2,h/2,w/2,h/2)
            ctx.drawImage(randomFunny(),0,h/2,w/2,h/2)
            break;
        }
        case 5:{
            //LEFT SIDE
            ctx.drawImage(randomFunny(),0,0,w/2,h/2)
            ctx.drawImage(randomFunny(),0,h/2,w/2,h/2)
            break;
        }
        case 8:{
            //FULL LEFT SIDE
            ctx.drawImage(randomFunny(),0,0,w/2,h)
            break;
        }
        case 9:{
            //RIGHT SIDE
            ctx.drawImage(randomFunny(),w/2,0,w/2,h/2)
            ctx.drawImage(randomFunny(),w/2,h/2,w/2,h/2)
            break;
        }
        case 10:{
            //FULL RIGHT SIDE
            ctx.drawImage(randomFunny(),w/2,0,w/2,h)
            break;
        }
        case 11:{
            //FULL TOP PADDING
            ctx.drawImage(randomFunny(),0,h/6,w,h)
            break;
        }
        case 12: {
            //TOP QUARTERS
            ctx.drawImage(randomFunny(),w/2,0,w/2,h/2)
            ctx.drawImage(randomFunny(),0,0,w/2,h/2)
            break;
        }
    }
}

function randomFunny(){
    return document.getElementById(Math.floor(Math.random()*9))
}

main()