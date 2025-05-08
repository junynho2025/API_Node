require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/productModel');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // 30 segundos
  socketTimeoutMS: 45000, // 45 segundos
})
  .then(async () => {
    console.log('Conectado ao banco de dados com sucesso!');
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Coleções disponíveis:', collections);

    // Chama a função seedProducts após a conexão
    await seedProducts();
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error.message);
    process.exit(1);
  });

const seedProducts = async () => {
  try {
    // Remove índices antigos
    await Product.collection.dropIndexes();
    console.log('Índices antigos removidos.');

    const products = [
      {
        ID_Produto: 1,
        Nome_Produto: 'Coca-Cola',
        Descricao: 'Refrigerante de cola, 350ml',
        Preco: 5.99,
        Estoque: 100,
        Imagens: ['https://example.com/coca-cola.jpg'],
        SKU: 'COCA-350ML',
      },
      {
        ID_Produto: 2,
        Nome_Produto: 'Arroz',
        Descricao: 'Arroz branco tipo 1, pacote de 5kg',
        Preco: 20.0,
        Estoque: 50,
        Imagens: ['https://example.com/arroz.jpg'],
        SKU: 'ARROZ-5KG',
      },
      {
        ID_Produto: 3,
        Nome_Produto: 'Leite',
        Descricao: 'Leite integral, 1 litro',
        Preco: 4.5,
        Estoque: 200,
        Imagens: ['https://example.com/leite.jpg'],
        SKU: 'LEITE-1L',
      },
    ];

    // Limpa a coleção antes de adicionar
    await Product.deleteMany({});
    console.log('Coleção de produtos limpa.');

    // Insere os produtos
    for (const product of products) {
      try {
        console.log(`Tentando adicionar o produto: ${JSON.stringify(product)}`);
        await Product.create(product);
        console.log(`Produto ${product.Nome_Produto} adicionado com sucesso!`);
      } catch (error) {
        console.error(`Erro ao adicionar o produto ${product.Nome_Produto}:`, error.message);
      }
    }

    console.log('Processo de seed finalizado!');
    process.exit();
  } catch (error) {
    console.error('Erro geral ao adicionar produtos de exemplo:', error);
    process.exit(1);
  }
};