const express = require('express');
const PORT = 3000
const apiRoute = require('./routes/api');;
const path = require("path")


const app = express();


app.use('/api', apiRoute)
app.use('/', express.static(path.join(__dirname, "public")))










app.listen(PORT, () => {
    console.log(`Server aberto na porta: ${PORT}`);
})



