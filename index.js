let devb = document.getElementById("dev");
let devm = document.getElementById("devmode");
let ac = false;
devb.onclick = function(){
    if(!ac){
    devm.style = "top: 0;"
    devb.style = "opacity: 0.5;"
    devb.innerHTML="X";
    ac=true;
    }else{
        devb.style = "opacity: 1;"
        devb.innerHTML="DEV";
        devm.style = "top: -120px;"
        ac=false;
    }
}


window.addEventListener('beforeunload', function (e) {
    console.log("bye");
});

window.addEventListener('load', function (e) {
    for(let i = 0; i<420; i++)
    console.log("%cDONT HACK ME PLS I HAVE A FAMILY", "color: red; font-family: sans-serif; font-size: 22px; font-weight: bolder; text-shadow: #000 1px 1px;");
    document.getElementById("header").style = "height: 10%;";
});



let devin = document.getElementById('devin');
let devc = document.getElementById('devc');
let welcome = new Audio("./files/welcome.mp3");

devc.onclick = function(){
    if(devin.value=="69420"){
        welcome.play();
        devin.setAttribute("placeholder","ACTIVATED");
        let devcont = document.body.querySelector("#devonly");
        while(devcont!=null){
            devcont.removeAttribute("id");
            devcont = document.body.querySelector("#devonly");
        }

        devb.style = "opacity: 1;"
        devb.innerHTML="DEV";
        devm.style = "top: -120px;"
        ac=false;
    }

    devin.value="";
}

/*let x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 50;

function setup() {
  let canv  = createCanvas(document.body.clientWidth, document.querySelector("html").clientHeight);
  strokeWeight(20.0);
  stroke(255, 100);
}

function draw() {
    background('rgba(0,0,0,0)');
  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - cos(angle1) * segLength;
  y = mouseY - sin(angle1) * segLength;

  segment(x, y, angle1);
  ellipse(x, y, 20, 20);
  background('rgba(0,0,0,0)');
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}*/

