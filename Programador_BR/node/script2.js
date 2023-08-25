let fs = require('fs')

fs.writeFile('teste.txt', "hellow world", function(error){
    if(error){throw error};
    console.log("arquivo criado com sucess");
})

fs.appendFile('teste.txt', " incremento", function(error){
    if(error){throw error};
    console.log("arquivo criado com sucess");
})
fs.unlink('teste.txt',  function(error){
    if(error){throw error};
    console.log("arquivo apagado com sucess");
})