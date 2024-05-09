const gastos = JSON.parse(localStorage.getItem("gastos")) || []

gastos.forEach(gasto => card(gasto))

function card(gasto) {

    icon = defineIcon(gasto)

    const cardGasto = `
    <div class="card horizontal">
        <div class="card-content">
            <span class="card-title">${gasto.title}</span>
            <p>
                R$ ${gasto.number} <br>
                <br>
                <a onclick="clear_gasto('${gasto.id}')" class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">delete</i></a>
                <a href="#modal1" class="btn-floating btn-small waves-effect waves-light blue modal-trigger"><i class="material-icons">edit</i></a>
                </p>
                </div>
                <div class="card-content">
                <i class="material-icons medium">${icon}</i> <br>
                </div>
                </div>
                </div>
                `
    const card = document.createElement("div")
    card.classList = "col s6 m6 l3"
    card.id = gasto.id
    card.innerHTML = cardGasto
    document.querySelector("#dia1").appendChild(card)
}


function defineIcon(gasto) {

    const gastoCategory = gasto.category
    var icon_temp = null
    switch (gastoCategory) {
        case "Alimentos":
            icon_temp = 'cake'
            break;

        case "Roupas":
            icon_temp = 'wc'
            break;

        case "Saúde":
            icon_temp = 'sentiment_very_satisfied'
            break;

        case "Diversão":
            icon_temp = 'beach_access'
            break;
    }
    return icon_temp;


}