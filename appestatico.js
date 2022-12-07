const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/Partials')

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')

})

app.listen(3000, () => {
    console.log('puerto 3000 arriba');

})