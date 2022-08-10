const background = document.getElementById("background")
const fields = document.getElementById("list")
const params = new URLSearchParams(window.location.search)

function main(){
    console.log("test")
    document.getElementById("a").onanimationend = (e) => {
        document.getElementById("end").style.display = "flex"
        document.getElementById("end").style.animation = "fadeIn 0.8s linear"
    }
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
    add("SS NUMBER", (Math.random()+"").replace("0.", ""))
    add("IPv6", crypto.randomUUID().replaceAll("-", "::"))
    add("UPNP", "ENABLED")
    add("DMZ", Math.floor(Math.random()*10+10)+"."+Math.floor(Math.random()*10+10)+"."+Math.floor(Math.random()*10+10)+"."+Math.floor(Math.random()*10+10))
    add("MAC", mac())
    add("DNS", "8.8.8.8")
    add("ALT DNS", "1.1.1.8.1")
    add("WAN", ip())
    add("GATEWAY", ip())
    add("SUBNET MASK", "255.255.0.255")
    add("UDP OPEN PORTS", "8080, 80")
    add("TCP OPEN PORTS", "443")
    add("CONNECTION TYPE", "Ethernet")
    add("ICMP HOPS", ip()+"\n"+ip()+"\n"+ip()+"\n"+ip()+"\n"+ip())
    add("TOTAL HOPS", "5")
    const servIp = ip()
    add("ACTIVE SERVICES", "[HTTP]"+servIp+":"+Math.floor(Math.random()*500)+"=>"+ip()+"\n"+"[HTTP]"+servIp+":"+Math.floor(Math.random()*500)+"=>"+ip()+"\n"+"[TCP]"+servIp+":"+Math.floor(Math.random()*500)+"=>"+ip()+"\n"+"[UDP]"+servIp+":"+Math.floor(Math.random()*500)+"=>"+ip()+"\n"+"[HTTP]"+servIp+":"+Math.floor(Math.random()*500)+"=>"+ip()+"\n"+"[HTTP]"+servIp+":"+Math.floor(Math.random()*500)+"=>"+ip()+"\n"+"[HTTP]"+servIp+":"+Math.floor(Math.random()*500)+"=>"+ip())
    add("MODEM JUMPS", "64")
    add("EXTERNAL MAC", mac())
    req.onload = () => {
        json = JSON.parse(req.responseText)
        add("LATITUDE", json.latitude)
        add("LONGITUDE", json.longitude)
        add("LOCATION",json.country_name+", "+json.region)
        add("IP", json.ip)
    }
}

function mac(){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return (chars.charAt(Math.random()*chars.length)+(Math.floor(Math.random()*10)))+":"+(chars.charAt(Math.random()*chars.length)+(Math.floor(Math.random()*10)))+":"+(chars.charAt(Math.random()*chars.length)+(Math.floor(Math.random()*10)))+":"+(chars.charAt(Math.random()*chars.length)+(Math.floor(Math.random()*10)))+":"+Math.floor(Math.random()*80+10)
}

function ip(){
    return Math.floor(Math.random()*256)+"."+Math.floor(Math.random()*256)+"."+Math.floor(Math.random()*256)+"."+Math.floor(Math.random()*256)
}

function add(field, value){
    fields.innerText += field+": "+value+"\n"
}

document.body.onload = main