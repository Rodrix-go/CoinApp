document.querySelector("#button_cadastrar").addEventListener("click", () => {

    const form = document.querySelector("form")

    // Criar um objeto para armazenar as informações do gasto
    const gasto = {
        id: "id" + new Date().getTime(),
        title: form.elements['first_name'].value,
        description: form.elements['description'].value,
        number: form.elements['number'].value,
        category: form.elements['category'].value
    };

    // Exibir os valores para teste (pode remover isso depois)
    console.log('Informações do Gasto:', gasto);

    salvar(gasto)

})

function salvar(gasto) {
    const gastos = JSON.parse(localStorage.getItem("gastos")) || [];
    gastos.push(gasto)
    localStorage.setItem("gastos", JSON.stringify(gastos))
    window.location.href = "index.html"
}


function clear_storage() {
    console.log("limpando o storage");
    localStorage.clear()

}