const API_KEY = "ae5b95fd-8a90-4466-9d75-f51d91ab475a";
let ACCOUNT_UUID;
let ACCOUNT;
let profile;

function sendNOTMojangAPIRequest(username){
    //MOjang api is fucking broken so yes
    if(username=="") return
    let request = new XMLHttpRequest()
    request.onreadystatechange = function(){
        if(this.readyState ==4 && this.status==200){
            ACCOUNT = JSON.parse(request.response)
            ACCOUNT_UUID = ACCOUNT.uuid
            sendHypixelAPIRequest()
        }else{}
    }

    request.open("GET","https://api.ashcon.app/mojang/v2/user/"+username)
    request.send()
}


function sendHypixelAPIRequest(){
    let request = new XMLHttpRequest()
    request.onreadystatechange = function(){
        if(this.readyState ==4 && this.status==200){
            profile = JSON.parse(request.response)
            console.log(profile)
        }
    }

    request.open("GET","https://api.hypixel.net/skyblock/profiles?key="+API_KEY+"&uuid="+ACCOUNT_UUID)
    request.send()
}

