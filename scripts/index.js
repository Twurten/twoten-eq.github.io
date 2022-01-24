function redirect(href, timeout) {
  let loc = location.toString().split("/");
  let newloc = "";
  for (let i = 0; i < loc.length - 1; i++) {
    newloc += loc[i] + "/";
  }
  setTimeout(function () {
    location = newloc + href /*+".html"*/;
  }, timeout);
}

function seticon(href) {
  document.head.querySelector("link").href = href;
}
let selected = null;
function select(id){
  if(selected!=null)
    selected.classList.remove("selected")
    document.getElementById(id).classList.add("selected")
    selected = document.getElementById(id)
}

let selectedm = null;
function selectm(id){
  if(selectedm!=null)
    selectedm.classList.remove("selected")
    document.getElementById(id).classList.add("selected")
    selectedm = document.getElementById(id)
}

function downloadpc(){
  if(selected==null){
    popup("Select an OS")
    setTimeout(function(){popdown()}, 1000, false)
  }
}

function downloadmb(){
  if(selectedm==null){
    popup("Select an OS")
    setTimeout(function(){popdown()}, 1000, false)
  }
}

function popup(txt){
  let popup = document.getElementById("popup");
  popup.style.opacity=1
  popup.style.bottom="4em"
  popup.innerText=txt
}
function popdown(){
  let popup = document.getElementById("popup");
  popup.style.opacity=0
  popup.style.bottom="-4em"
}