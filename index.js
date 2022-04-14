let page = 1;
let stop = false;
let array = new Array();

document.body.onload = load()

function load(){
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.github.com/users/twoten-eq/repos?page="+page)
    request.send()
    request.onload = () => {
        let parsed = JSON.parse(request.responseText);
        st = request.status
        page++
        for(let i = 0; i<parsed.length; i++){
            array.push(parsed[i]);
        }
        
        if(JSON.parse(request.responseText).length==0){
            for(let i = 0; i<array.length; i++){
                createRepoDiv(array[i].name, array[i].html_url, array[i].description)
            }
            
            return;
        }

        load()
    }
}

function createRepoDiv(title, link, description){
    let el = document.createElement("div")
    el.classList.add("repo")
    let h1 = document.createElement("a")
    h1.innerText=title
    h1.href=link;
    el.appendChild(h1)
    if(description!=""&&description!=null){
        let a = document.createElement("p")
        a.innerText=description
        el.appendChild(a)
    }

    document.getElementById("repos").appendChild(el)
}