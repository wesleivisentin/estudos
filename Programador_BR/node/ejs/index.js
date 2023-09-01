const express = require('express');
const fs = require('fs');
const path = require('path')
const app = express()


let users = [
{ 
    id: 0,
    name: "Weslei",
    phone: "(054)3227-2437"
},
{ 
    id: 1,
    name: "aaaa",
    phone: "(054)3227-2437"
},
{ 
    id: 2,
    name: "bbbbb",
    phone: "(054)3227-2437"
},
{ 
    id: 3,
    name: "cccc",
    phone: "(054)3227-2437"
},

]

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs");


app.get('/', (req,res) => {

    res.render('user', {users})

})

app.listen(3000, () =>{
    console.log("server na porta 3k");
})