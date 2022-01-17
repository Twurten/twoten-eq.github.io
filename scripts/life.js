let canvas
let ctx
let generation
let w, h

function init(){
    cs=10
    w=100
    h=100
    generation = new Array(w)
    for(let i = 0; i<generation.length; i++){
        generation[i] = new Array(h)
    }
    fill(generation)
    canvas=document.getElementById("life")
    ctx = canvas.getContext("2d")
    canvas.width=w*10
    canvas.height=h*10
   
    repaint() 
}

let fill = (array) => {
    for(let i = 0; i<array.length; i++){
        for(let j = 0; j<array[0].length; j++){
            array[i][j] = Math.round(Math.random())
        }
    }

    return array;
}

function repaint(){
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,w*10,h*10)
    ctx.fillStyle = "black"
    for(let i = 0; i<generation.length; i++){
        for(let j = 0; j<generation[0].length; j++){
            if(generation[i][j]==0)
                ctx.fillRect(i*10,j*10,cs,cs)

        }
    }
}

let nextstep = (array) => {
    for(let i = 0; i<array.length; i++){
        for(let j = 0; j<array[0].length; j++){
            
        }
    }

}