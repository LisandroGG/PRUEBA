import express from 'express'
import trabajosRoutes from './src/routes/routes.js';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = process.cwd();
const app = express();
const port = process.env.PORT || 3000;

// Middleware CORS
app.use(cors({
    origin: '*'
}));

// Middleware para manejar datos JSON
app.use(express.json());

// Directorio de uploads
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Middleware para servir archivos estáticos desde /uploads
app.use('/uploads', express.static(uploadDir));

// Rutas de la aplicación
app.use(trabajosRoutes);

// Función principal para iniciar la aplicación
async function main() {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
}

main();

export default app;