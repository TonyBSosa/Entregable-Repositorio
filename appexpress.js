const express = require('express')
var bodyParser = require('body-parser')

const app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/producto', (req, res) => {


    let bd = {
        codigo: 2530,
        producto: 'Computadora',
        cantidad: 150
    }
    res.json(bd)
})

app.post('/producto', (req, res) => {

    let nuevo_registro = req.body;
    res.json(nuevo_registro)
})
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;

    res.send(id);


})


app.listen(3000, () => {
    console.log('utlizadon el puerto 3000');
})