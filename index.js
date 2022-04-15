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
            document.getElementById("loading").innerText="twoten-eq/"
            for(let i = 0; i<array.length; i++){
                createRepoDiv(array[i].name, array[i].html_url, array[i].description, array[i].stargazers_count)
            }
            
            return;
        }

        load()
    }
}

function createRepoDiv(title, link, description, stars){
    let el = document.createElement("div")
    el.classList.add("repo")
    if(stars!=0){
        let star = document.createElement("div")
        star.innerHTML='<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star-fill starred-button-icon d-inline-block mr-2"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path></svg>'
        star.classList.add("star")
        let amount = document.createElement("div")
        amount.innerText=stars
        amount.classList.add("amount")
        star.appendChild(amount)
        el.appendChild(star)
    }
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