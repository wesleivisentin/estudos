function addNewPhone() { //nao funciona
    const phoneGroup = document.querySelector("form#phones")
    const newPhone = phoneGroup.children[0].cloneNode(true)
    
    const phonePosition = phoneGroup.children.length + 1
    newPhone.querySelector("label").innerText = "telefone" + phonePosition + ": "
    phoneGroup.appendChild(newPhone)

    console.log(phoneGroup.children)
}

function printPhones() {
    let message = ""
    const phones = document.querySelectorAll("input[name='phone']")
    phones.forEach((phone, index) => {
        message += "Telefone " + (index + 1) + ": " + phone.value + "\n"
    })
    alert(message)
}