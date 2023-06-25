const key = "1e65b3c545da10f021609e4d5a6e04f9";

async function buscarCidade (cidade) {
    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    dadosEmTela (dados);
}

function botao () {
    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade (cidade);
}

function dadosEmTela (dados) {
    document.querySelector(".cidade").innerHTML = `tempo em ${dados.name}`;
    document.querySelector(".temp").innerHTML =`${Math.floor (dados.main.temp)}°C`;
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = `umidade em: ${dados.main.humidity}%`;
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    console.log(dados)
}