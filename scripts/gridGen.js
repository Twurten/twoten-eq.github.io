function generate(cwidth, cheight, rows, collumns) {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    canvas.width=cwidth;
    canvas.height=cheight;
    ctx.fillStyle="white"
    ctx.fillRect(0,0,cwidth,cheight);
    ctx.fillStyle="black"
    for(let i = 0; i<collumns; i++){
        for(let j = 0; j<rows; j++){
            ctx.beginPath();
            ctx.rect(i*cwidth/collumns,j*cheight/rows,cwidth/collumns,cheight/rows)
            ctx.stroke()
        }
    }

    
}
