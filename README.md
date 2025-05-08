# Node.js Product API

This project is a simple RESTful API for managing products. It allows you to create, list, edit, and delete products with the following fields:

- `cod_prod`: Product code
- `nome_prod`: Product name
- `preco_pro`: Product price
- `medida`: Measurement unit (e.g., ml, kg, etc.)

## Project Structure

```
nodejs-product-api
├── src
│   ├── controllers
│   │   └── productController.js
│   ├── models
│   │   └── productModel.js
│   ├── routes
│   │   └── productRoutes.js
│   ├── services
│   │   └── productService.js
│   └── app.js
├── package.json
├── .env
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd nodejs-product-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Set up your environment variables in the `.env` file.
2. Start the application:
   ```
   npm start
   ```
3. The API will be running on `http://localhost:3000`.

## API Endpoints

- `POST /products`: Create a new product
- `GET /products`: Retrieve all products
- `PUT /products/:id`: Update a product by ID
- `DELETE /products/:id`: Delete a product by ID

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.