let v = true;
let an;
let id = null;
let trans = 100;
window.addEventListener("load", function () {});

function redir(href) {
  let loc = location.toString().split("/");
  let newloc = "";
  for (let i = 0; i < loc.length - 1; i++) {
    newloc += loc[i] + "/";
  }
  location = newloc + href /*+".html"*/;
}
function toggle() {
  let buttons = document.querySelectorAll("[id='BTN']");
  let bar = document.getElementById("sidebar");
  if (v) {
    v = !v;
    window.clearInterval(id);
    an = buttons.length - 1;
    id = window.setInterval(function () {
      animate(true);
    }, trans);
    bar.style.display = "";
    bar.style.height = "5em";
  } else {
    v = !v;
    window.clearInterval(id);
    an = 0;
    bar.style.display = "table";
    bar.style.height = "";
    id = window.setInterval(function () {
      animate(false);
    }, trans);
  }
}

function animate(w) {
  let buttons = document.querySelectorAll("[id='BTN']");
  if (w) {
    if (an >= 0) {
      buttons[an].style.transform = "translateX(-10em)";
      buttons[an].style.opacity = "0";
      an--;
    } else {
      an = buttons.length;
      window.clearInterval(id);
    }
  } else {
    if (an != buttons.length) {
      buttons[an].style.transform = "";
      buttons[an].style.opacity = "1";
      an++;
    } else {
      an = 0;
      window.clearInterval(id);
    }
  }
}

function togglePwrdVis() {
  let x = document.getElementById("tglpwrd");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
