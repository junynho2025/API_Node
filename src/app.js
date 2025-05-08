const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

const app = express();

// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  serverSelectionTimeoutMS: 30000, // 30 segundos
  socketTimeoutMS: 45000, // 45 segundos
})
  .then(() => console.log('Conectado ao banco de dados com sucesso!'))
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error.message);
    process.exit(1);
  });

// Rotas
app.use('/api', productRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));