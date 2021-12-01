let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let jumps1, jumps2, jumps3, jumps4;
let sound;
let initd = false;

document.addEventListener("click", function(){
    window.requestAnimationFrame(step);
});

function init(){
    jumps1 = document.getElementById('j1');
    jumps2 = document.getElementById("j2");
    jumps3 = document.getElementById("j3");
    jumps4 = document.getElementById("j4");
    sound = new Audio("./aaugh.mp3");
    ctx.fillStyle = 'black';
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    initd = true;
}


function rand(max){
    return Math.floor(Math.random()*max);
}

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
});



function step(){
    if(initd){
        sound.play();
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(jumps1,rand(canvas.width), rand(canvas.height), 150, 100);
        ctx.drawImage(jumps2,rand(canvas.width), rand(canvas.height), 150, 100);
        ctx.drawImage(jumps3,rand(canvas.width), rand(canvas.height), 150, 100);
        ctx.drawImage(jumps4,rand(canvas.width), rand(canvas.height), 150, 100);
    }

    window.requestAnimationFrame(step);
}

