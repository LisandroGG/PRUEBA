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

app.get("/trabajos")

app.listen(port, () => {
    console.log(`port runing in ${port}`)
})