class ProductService {
    constructor() {
        this.products = [];
        this.currentId = 1;
    }

    createProduct(cod_prod, nome_prod, preco_pro, medida) {
        const newProduct = { cod_prod, nome_prod, preco_pro, medida, id: this.currentId++ };
        this.products.push(newProduct);
        return newProduct;
    }

    getProducts() {
        return this.products;
    }

    updateProduct(id, updatedData) {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex === -1) {
            return null;
        }
        const updatedProduct = { ...this.products[productIndex], ...updatedData };
        this.products[productIndex] = updatedProduct;
        return updatedProduct;
    }

    deleteProduct(id) {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex === -1) {
            return null;
        }
        const deletedProduct = this.products.splice(productIndex, 1);
        return deletedProduct[0];
    }
}

module.exports = ProductService;