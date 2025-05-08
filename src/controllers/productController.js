class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    async createProduct(req, res) {
        try {
            const productData = req.body;
            const newProduct = await this.productService.createProduct(productData);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getProducts(req, res) {
        try {
            const products = await this.productService.getProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const productData = req.body;
            const updatedProduct = await this.productService.updateProduct(id, productData);
            if (updatedProduct) {
                res.status(200).json(updatedProduct);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const deletedProduct = await this.productService.deleteProduct(id);
            if (deletedProduct) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default ProductController;