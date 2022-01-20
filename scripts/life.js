let canvas
let ctx
let generation
let w, h
let paused = false

function pause(){
    paused=!paused
    if(paused){
        document.getElementById("pause").style="transform: rotate(90deg); clip-path: polygon(50% 0%, 0% 100%, 100% 100%);" 
    }else{
        document.getElementById("pause").style="transform: rotate(0deg); clip-path: none"
    }
}

function init(){
    cs=10
    w=200
    h=200
    generation = new Array(w)
    for(let i = 0; i<generation.length; i++){
        generation[i] = new Array(h)
    }
    fill(generation, "rnd")
    canvas=document.getElementById("life")
    canvas.addEventListener("click", setCell(), false)
    ctx = canvas.getContext("2d")
    canvas.width=w*cs
    canvas.height=h*cs
   
    repaint()
    window.requestAnimationFrame(step);
}

function setCell(){

}

let fill = (array, what) => {
    if(what==0){
        for(let i = 0; i<array.length; i++){
            for(let j = 0; j<array[0].length; j++){
                array[i][j] = 0
            }
        }
    }
    if(what=="rnd"){
        for(let i = 0; i<array.length; i++){
            for(let j = 0; j<array[0].length; j++){
                array[i][j] = Math.round(Math.random())
            }
        }
    }
    if(what==1){
        for(let i = 0; i<array.length; i++){
            for(let j = 0; j<array[0].length; j++){
                array[i][j] = 1
            }
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
            if(generation[i][j]==1)
                ctx.fillRect(i*10,j*10,cs,cs)
        }
    }
}

function nextstep(){
    let array = new Array(w)
    for(let i = 0; i<array.length; i++){
        array[i] = new Array(h)
    }

    for(let ic = 0; ic<generation.length; ic++){
        for(let jc = 0; jc<generation[0].length; jc++){
            let aliveCells = 0;
            
            for(let i = -1; i<2; i++){
                for(let j = -1; j<2; j++){
                    if(!(i==0&&j==0)){
                        if(generation[(ic+i+w)%w][(jc+j+h)%h]==1)
                        aliveCells++
                    }
                }
            }

            if(generation[ic][jc]==1){
                if(aliveCells==2||aliveCells==3){
                    array[ic][jc]=1
                }else{
                    array[ic][jc]=0
                }
            }else{
                if(aliveCells==3){
                    array[ic][jc]=1
                }
            }
            
        }
    }
    generation=array
}
let stepc = 0;
let speed = 10;

function step(timestamp) {
    if(!paused){
        stepc++
        if(stepc==speed){
            nextstep()
            repaint()
            stepc=0
        }
    }   
    window.requestAnimationFrame(step);
}