const URL_API_CHAMPIONS= 'https://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json'

function getElement(q) {
    return document.querySelector(q)
}

const getAPI = (url, functionCallback) => {
    fetch(url).then(
        (response) => response.json(),
        (error) => console.error(error)
    ).then(
        dataJson => functionCallback(dataJson),
        erro => console.error(erro)
    )
}