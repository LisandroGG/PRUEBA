const express = require("express");

const app = express();

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    const htmlResponse = `
    <html>
    <head>
    <title>PELOTUDO</title>
    </head>
    <body>
    <h1>fracasado</h1>
    </body>
    </html>`
    res.send(htmlResponse)
})

app.get("/trabajos", (req, res) => {
    const htmlHola = `
    <html>
    <head>
    <title>Trabajos</title>
    </head>
    <body>
    <h1>Entraste a trabajos</h1>
    </body>
    </html>`
    res.send(htmlHola)
})

app.listen(port, () => {
    console.log(`port runing in ${port}`)
})