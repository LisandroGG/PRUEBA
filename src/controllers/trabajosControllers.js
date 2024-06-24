export const funciona = (req, res) => {

    const htmlResponse = `
    <html>
    <head>
    <title>fuciono</title>
    </head>
    <body>
    <h1>funciono</h1>
    </body>
    </html>`

    res.rend(htmlResponse)
}