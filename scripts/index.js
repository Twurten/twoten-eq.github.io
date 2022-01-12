function redirect(href, timeout){
    let loc = location.toString().split('/');
    let newloc = "";
    for(let i = 0; i<loc.length-1; i++){
        newloc+=loc[i]+"/";
    }
    setTimeout(function(){
        location = newloc+href+".html";
    },timeout);
}

function seticon(href){
    document.head.querySelector("link").href=href;
}