var listChampions = new Array()

addEventListener("load", function() {
    getAPI(URL_API_CHAMPIONS, ListChampions)
})

const ListChampions = (data) => {
    let main = getElement("main>div.row")
    console.log("consume api: ", data)
    listChampions = new Array()

    Object.keys(data.data).forEach((champions) => {
        let html = document.createElement("div")
            // html.classlist.add("card");

        html.addEventListener("click", () =>
            showDetailsChampions(data.data[champions]))


        html.classList.add("col-4", "col-sm-3", "col-md-2", "col-lg-1")
        let content = `
            <a href="#anchor" class="link_content_card">
                <div class="border my-2 text-center content_card">
                    <div>
                        <img src="http://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${data.data[champions].image.full}" alt="${data.data[champions].image.full}" title="${data.data[champions].name}" class="w-100">
                    </div>
                    <p class="pt-3 text-white">${data.data[champions].name}</p>
                </div>
            </a>
        `

        html.innerHTML = content
        main.appendChild(html)
        listChampions.push(data.data[champions])
    })

    getElement("div#preview").style.display = "block"

    if (getElement("div#preview").style.display == "block") {
        getElement("div#preview").innerHTML = `
            <div class="d-flex justify-content-center align-items-center h-100">
                <h2 class="p-2 text-center text-white">Click on a champion below to display its characteristics!</h2>
            </div>
            `
    }
}

const showDetailsChampions = (data) => {
    // getDataApi(data)
    let div = document.createElement("div")
    let cardBody = `
        <div class="d-flex justify-content-center align-items-start h-100">
            <section>
                <div class="text-center">
                <h2>${data.name}</h2>
                    <img src="http://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${data.image.full}" alt="${data.image.full}" title="${data.name}">
                    <br>
                    <p><b><i>${data.title}</i></b></p>
                </div>
            
                <section>
                    <p class="text-center"><b>Sinopse</b></p>
                    <p class="text-justify"><i>"${data.blurb}"</i></p>
                    <br>
                    <div class="content_tag">
                        <p class="text-center"><b class="text-white">Tag</b></p>
                        <p class="text-center"><i>${data.tags}</i></p>
                    </div>

                    <!-- <p><b>Atack: </b>${data.info.attack}<br> 
                    <b>Defense: </b>${data.info.defense}<br>
                    <b>Magic: </b>${data.info.magic}<br>
                    <b>Difficulty: </b>${data.info.difficulty}</p> -->
                </section>
            </section>
        </div>
    `

    div.innerHTML = cardBody
    getElement("div#preview").style.display = "block"
    getElement("div#preview").innerHTML = cardBody
}