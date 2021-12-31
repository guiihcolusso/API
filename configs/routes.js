const express = require('express')
const routes = express.Router()
const axios = require('axios')
const config = require('./configuracoes.json')

routes.get('/', (req, res) => {

    res.render('inicial')

})

routes.get('/api/placa=:placa', (req, res) => {

    const { placa } = req.params
    const API = `${config.API}${placa}/${config.code}`
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

    axios.get(API).then(function (response) {

        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(response.data, null, 4));

    })

})


routes.get('/*', (req, res) => {

    res.render('404')

})

module.exports = routes