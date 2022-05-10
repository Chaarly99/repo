//Librerías requeridas
const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

//Imports
import { dbConnector } from './dbConector';
//Configuración de la app
const port = 3000
//Inicialización
const app = express()

//Aceptar todos los headers
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}))

//Parse app/json
app.use(bodyParser.json())


//Regist routs
app.get('/Users', async (req, res) => {
    let data = await dbConnector.findData('Users', {
        name: req.body.name, 
        passwd: req.body.passwd
    })
    res.send(data);
})

//Awake server
app.listen(port, () => {
    console.log(`Ejemplo de app escuchando por http:/localhost:${port}`)
})


/* dbConnector.findData('Users', {
    id: 103
}).then(function (e) {
    console.log(e)
}) */