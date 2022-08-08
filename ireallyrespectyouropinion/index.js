const background = document.getElementById("background")
const fields = document.getElementById("list")
const params = new URLSearchParams(window.location.search)

function main(){
    genBackground()
    let s = new Audio("./intro.mp3")
    s.volume = 0.1
    if(params.has("vol"))
        s.volume = params.get("vol")
    s.play()
    gatherData()
}

function genBackground(){
    background.width = background.clientWidth
    background.height = background.clientHeight
    const context = background.getContext('2d')
    context.fillStyle = "rgba(0,0,0,255)"
    context.fillRect(0,0,background.width, background.height)
    context.fillStyle = "rgba(105,105,105,255)"
    for(let i = 0; i<500; i++){
        context.fillRect(Math.floor(Math.random()*background.width),Math.floor(Math.random()*background.height),1,1)
    }

}

function gatherData(){
    const req = new XMLHttpRequest();
    let json
    req.open("GET", "https://ipapi.co/json/");
    req.send()
    req.onload = () => {
        console.log(req.responseText)
        json = JSON.parse(req.responseText)
        fields.innerText = fields.innerText.replace("IP:", "IP: "+json.ip)
        fields.innerText = fields.innerText.replace("LATITUDE:", "LATITUDE: "+json.latitude)
        fields.innerText = fields.innerText.replace("LONGITUDE:", "LONGITUDE: "+json.longitude)
        fields.innerText = fields.innerText.replace("COUNTRY:", "COUNTRY: "+json.country)
    }
}

document.body.onload = main