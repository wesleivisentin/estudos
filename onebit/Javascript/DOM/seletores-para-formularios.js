function showInfo() {
    let name = document.querySelector("input[name='name']").value
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text
    let likeProgramming = document.querySelector("input[name='like-programming']:checked").value
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")
    let optionsValue = []
    developerOptions.forEach(element => { optionsValue.push(element.value) })
    console.log(developerOptions)
    let optionsChecked = developerOptions.join()

    alert(   "Nome: " + name + "\nCor primária: " + favoriteColor + "\nGosta de programar? " + likeProgramming + "\nConhecimentos em programação web: " + optionsChecked)
}