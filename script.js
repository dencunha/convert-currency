const USD = 5.57
const EUR = 6.44
const GBP = 7.43
const CNY = 0.78


const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
    const hasOnlyNumber = /\D+/g

    amount.value = amount.value.replace(hasOnlyNumber, " ")
})

form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP": 
            convertCurrency(amount.value, GBP, "£")
            break
        case "CNY":
            convertCurrency(amount.value, CNY, "¥")
        break
    }
}

function convertCurrency(amount, price, symbol){
    try {
        
        let total = amount * price
        result.textContent = `${formatCurrencyBRL(total).replace("R$", "")} Reais`


        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        if (isNaN(total)) {
            return alert("Por favor, digite o valor corretamente para converter")
        }

        footer.classList.add("show-result")

    }
    catch {
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}

