import express from 'express'
import trabajosRoutes from './src/routes/routes.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware CORS
app.use(cors({
    origin: '*'
}));

// Middleware para manejar datos JSON
app.use(express.json());

app.use(trabajosRoutes);

// Función principal para iniciar la aplicación
async function main() {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
}

main();

export default app;