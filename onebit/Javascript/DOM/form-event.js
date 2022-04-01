function save() {
    event.preventDefault()//n precisa..professor burro que errou na sintaxe
    let name = document.querySelector("input[name='name']").value
    let programmingLang = document.querySelector("select[name='programming-lang']").value
    alert("Nome: " + name + "\nLinguagem de programação: " + programmingLang)
}