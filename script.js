const buttonConvert = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert') 
    const currencyValueConverted = document.querySelector('.currency-value') 

    const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    console.log(data)
    
    if (currencySelect.value == "dolar") { 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") { 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: 'currency',
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-image')

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImage.src  = 'img/dolar.png'
    }
    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './img/euro.png'
    }
    convertValues()
}
currencySelect.addEventListener('change', changeCurrency)

buttonConvert.addEventListener('click', convertValues)