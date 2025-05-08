const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  ID_Produto: { type: Number, required: true, unique: true },
  Nome_Produto: { type: String, required: true },
  Descricao: { type: String, required: true },
  Preco: { type: Number, required: true },
  Estoque: { type: Number, required: true },
  Imagens: { type: [String], required: true },
  SKU: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Product', productSchema);