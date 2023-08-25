const express = require("express")
const path = require("path")

const app = express();

app.use("/meusite", express.static(path.join(__dirname, 'client')))

app.get("/", (req,res)=> {
    //res.set("Content-Type", "text/plain")//nao funcionou
    //res.type('json') // nao funciona
    
    res.send("<h1>Hello word get</h1>")

})

app.post("/", (req,res)=> {
    //res.set("Content-Type", "text/plain")//nao funcionou
    //res.type('json') // nao funciona
    
    res.send("<h1>Hello word POST</h1>")
})

app.put("/", (req,res)=> {
    //res.set("Content-Type", "text/plain")//nao funcionou
    //res.type('json') // nao funciona
    
    res.send("<h1>Hello word put</h1>")
})


app.delete("/", (req,res)=> {
    //res.set("Content-Type", "text/plain")//nao funcionou
    //res.type('json') // nao funciona
    
    res.send("<h1>Hello word delete</h1>")
})


const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})
