let UUID = "469962ac63cd4792bd013da195c1a887";
let API_KEY = "ae5b95fd-8a90-4466-9d75-f51d91ab475a";
let profile;

function sendMojangAPIRequest(username){
    if(username=="") return
    let request = new XMLHttpRequest()
    request.onreadystatechange = function(){
        if(this.readyState ==4 && this.status==200){
            console.log(request)
        }else{
            console.log("ERR")
        }
    }

    request.open("GET","https://api.mojang.com/users/profiles/minecraft/"+username)
    request.send()
}


function sendHypixelAPIRequest(){
    let request = new XMLHttpRequest()
    request.onreadystatechange = function(){
        if(this.readyState ==4 && this.status==200){
            profile = request.response;
            console.log(profile)
        }
    }

    request.open("GET","https://api.hypixel.net/skyblock/profiles?key="+API_KEY+"&uuid="+UUID)
    request.send()
}

