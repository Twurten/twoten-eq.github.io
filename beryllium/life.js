const canvas = document.getElementById('life');
const ctx = canvas.getContext('2d');
const cellsize = 5;
const size = canvas.width/cellsize;

let arr = new Array(size);
for(let i = 0; i<size; i++){
    arr[i] = new Array(size);
}
for(let i = 0; i<size; i++){
    for(let j = 0; j<size; j++){
        arr[i][j] = Math.floor(Math.random()*2);
    }
}


let aliveC;

function repaint() {
    let output = "";
    for(let i = 0; i<size; i++){
        for(let j = 0; j<size; j++){
            output+=arr[i][j];
            if(arr[i][j]==0){
                ctx.fillStyle="rgba(0,0,0,0)";
                ctx.fillRect(i*cellsize,j*cellsize,cellsize,cellsize);
            }else{
                ctx.fillStyle="black"
                ctx.fillRect(i*cellsize,j*cellsize,cellsize,cellsize);
            }
        }
        output+="\n";
    }
}

function step() {
    let temp = new Array(size);
    for(let i = 0; i<size; i++){
        temp[i] = new Array(size);
    }

    for(let i = 0; i<size; i++){
        for(let j = 0; j<size; j++){
            aliveC=0;

            for(let io = -1; io<2; io++){
                for(let jo = -1; jo<2; jo++){
                    if((i==0&&j==0)==false){
                        if(arr[(i+io+size)%size][(j+jo+size)%size])
                            aliveC++;
                    }
                }
            }

            switch(aliveC){
                case 2:
                    temp[i][j]=arr[i][j];
                    break;
                case 3:
                    temp[i][j]=1;
                    break;
                default:
                    temp[i][j]=0;
                    break;
            }
        }
    }

    for(let i = 0; i<size; i++){
        for(let j = 0; j<size; j++){
            arr[i][j]=temp[i][j];
        }
    }
}

window.requestAnimationFrame(loop);

function loop() {
    step();
    repaint();
    setTimeout(function(){window.requestAnimationFrame(loop)},200);
}
