function setBlueBackground() {
    let element = document.getElementById("style-text")
    element.style.backgroundColor = "cyan"

}

function setTransparentBackground() {
    document.getElementById("style-text").style.backgroundColor = "transparent"

}

function setRedColor() {
    let element = document.getElementById("style-text")
    element.classList.add("red-color")
}

function removeRedColor() {
    let element = document.getElementById("style-text")
    element.classList.remove("red-color")
}    