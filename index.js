const express = require('express');
const config = require('./configs/configuracoes.json')
const routes = require("./configs/routes")
const app = express()

app.use('/css', express.static(__dirname + '/configs/public/css'))
app.use('/img', express.static(__dirname + '/configs/public/img'))
app.use(routes)
app.set('views', 'views')
app.set('view engine', 'ejs')

app.listen(config.PORT, config.IP, () => {
    
    console.clear()
    console.log('•-----------------------------------•')
    console.log(" MCarAPI - Inicializada com sucesso ")
    console.log(`     IP : ${config.IP} - PORTA : ${config.PORT}`)
    console.log('•-----------------------------------•')

})