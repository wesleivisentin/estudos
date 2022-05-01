let tela = document.getElementById("tela")


let context = tela.getContext("2d")

context.moveTo(0,0)
context.lineTo(250,250)
context.lineTo(500,20)
context.lineWidth = 5
context.strokeStyle = "red"
context.stroke()