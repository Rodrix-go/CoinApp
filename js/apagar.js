function clear_gasto(id) {

    console.log("Excluindo o id:" + id);
    document.querySelector('#' + id).classList.add('apagando')
    document.querySelector('#' + id).addEventListener("animationend", () =>
        document.querySelector('#' + id).remove()
    )

    const gastos = JSON.parse(localStorage.getItem("gastos")) || [];
    const gastosAtt = gastos.filter((t) => t.id !== id)
    localStorage.setItem("gastos", JSON.stringify(gastosAtt))

}