const express = require('express');
const Product = require('../models/productModel');

const router = express.Router();

// GET: Obter todos os produtos
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Erro ao obter produtos:', error.message);
    res.status(500).json({ message: 'Erro ao obter produtos', error: error.message });
  }
});

// GET: Obter um produto por ID
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Erro ao obter produto:', error.message);
    res.status(500).json({ message: 'Erro ao obter produto', error: error.message });
  }
});

// POST: Criar um novo produto
router.post('/products', async (req, res) => {
  try {
    const { ID_Produto, Nome_Produto, Descricao, Preco, Estoque, Imagens, SKU } = req.body;
    const newProduct = new Product({ ID_Produto, Nome_Produto, Descricao, Preco, Estoque, Imagens, SKU });
    await newProduct.save();
    res.status(201).json({ message: 'Produto adicionado com sucesso!', product: newProduct });
  } catch (error) {
    console.error('Erro ao adicionar produto:', error.message);
    res.status(500).json({ message: 'Erro ao adicionar produto', error: error.message });
  }
});

// PUT: Atualizar um produto por ID
router.put('/products/:id', async (req, res) => {
    try {
      const { ID_Produto, Nome_Produto, Descricao, Preco, Estoque, Imagens, SKU } = req.body;
  
      // Atualiza o produto com base no campo ID_Produto
      const updatedProduct = await Product.findOneAndUpdate(
        { ID_Produto: req.params.id },
        { ID_Produto, Nome_Produto, Descricao, Preco, Estoque, Imagens, SKU },
        { new: true, runValidators: true }
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }
  
      res.status(200).json({ message: 'Produto atualizado com sucesso!', product: updatedProduct });
    } catch (error) {
      console.error('Erro ao atualizar produto:', error.message);
      res.status(500).json({ message: 'Erro ao atualizar produto', error: error.message });
    }
  });

// DELETE: Excluir um produto por ID
router.delete('/products/:id', async (req, res) => {
    try {
      const deletedProduct = await Product.findOneAndDelete({ ID_Produto: req.params.id });
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Produto não encontrado' });
      }
      res.status(200).json({ message: 'Produto excluído com sucesso!' });
    } catch (error) {
      console.error('Erro ao excluir produto:', error.message);
      res.status(500).json({ message: 'Erro ao excluir produto', error: error.message });
    }
  });

module.exports = router;