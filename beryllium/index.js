function more(){
    let more = document.getElementById("more");
    if(more.classList.contains("more-active")){
        more.classList.replace("more-active","more");
        document.getElementById("popmore").style.display = "none";
    }else{
        more.classList.replace("more","more-active");
        document.getElementById("popmore").style.display = "";
    }
}

function redirect(address){
    let oldLoc = location.toString().split("/");
    console.log(oldLoc)
    let newLoc = "";
    for(let i = 0; i<oldLoc.length-1; i++){
        newLoc+=oldLoc[i];
        newLoc+="/";
    }
    console.log(newLoc)
    newLoc+=address+".html"
    location=newLoc;
}
function highlight(id){
    document.getElementById(id).style.color="var(--color-a)";
    document.getElementById(id).style.opacity="1";
    document.getElementById(id).style.backgroundColor="var(--color-d)";
}
function unhighlight(id){
    document.getElementById(id).style.color="";
    document.getElementById(id).style.opacity="";
    document.getElementById(id).style.backgroundColor="";
}

function popup(text){
    document.getElementById("popup").innerText=text;
    document.getElementById("popup").style.bottom="6rem"
    setTimeout(function(){
        document.getElementById("popup").style.bottom="-10rem"
    }, 2000)
}