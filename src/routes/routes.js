import {Router} from 'express'
import { funciona } from '../controllers/trabajosControllers.js'

const router = Router()

router.get("/", (req, res) => {
    const htmlResponse = `
    <html>
    <head>
    <title>NodeJs y express en vercel</title>
    </head>
    <body>
    <h1>Soy un proyecto back en vercel</h1>
    </body>
    </html>`;
    res.send(htmlResponse)
})

router.get('/trabajos', funciona)

export default router