let meme

function fetchUnfunnyMeme(){
    const href = "https://meme-api.herokuapp.com/gimme/animemes/1"
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
    const c = document.getElementById("f")
    const ctx = c.getContext("2d")
    c.width = c.clientWidth
    c.height = c.clientHeight
    const w = c.width
    const h = c.height
    ctx.drawImage(document.getElementById("uf"), 0,0,w,h)
    ohWellidkHowToDoTheActualImageReplacing(ctx, w, h)
}

function redo(){
    drawFunny()
}

function ohWellidkHowToDoTheActualImageReplacing(ctx, w, h){
    switch(Math.floor(Math.random()*11)){
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
            //FULL
            ctx.drawImage(randomFunny(),0,0,w,h)
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
    }
}

function randomFunny(){
    return document.getElementById(Math.floor(Math.random()*5))
}

main()