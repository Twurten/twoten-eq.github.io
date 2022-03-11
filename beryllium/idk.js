let state = 0;
changestate(0)
function changestate(number){
    if(state+number<2&&state+number>-2)
        state+=number;
    document.getElementById("left").classList.remove("cube-side-selected");
    document.getElementById("right").classList.remove("cube-side-selected");
    switch(state){
        case 1:
            document.getElementById("cube").style="transform: rotateY(90deg) translateY(4rem);";
            document.getElementById("left").classList.add("cube-side-selected");
        break;
        case 0:
            document.getElementById("cube").style="transform: rotateY(0deg) translateY(4rem);";
        break;
        case -1:
            document.getElementById("cube").style="transform: rotateY(-90deg) translateY(4rem);";
            document.getElementById("right").classList.add("cube-side-selected");
        break;
    }
}