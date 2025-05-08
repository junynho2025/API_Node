
# Node.js Product API

Uma API simples desenvolvida em Node.js para gerenciar produtos. Esta API permite realizar operações CRUD (Create, Read, Update, Delete) em um banco de dados MongoDB.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação de APIs REST.
- **Mongoose**: ODM para interagir com o MongoDB.
- **MongoDB Atlas**: Banco de dados na nuvem.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Nodemon**: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.

---

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nodejs-product-api.git
   cd nodejs-product-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo .env:
   Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:
   ```properties
   DATABASE_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
   PORT=3000
   NODE_ENV=development
   ```

   Substitua `<username>`, `<password>`, `<cluster>` e `<database>` pelas informações do seu MongoDB Atlas.

---

## Scripts Disponíveis

- **Iniciar o servidor**:
  ```bash
  npm start
  ```
  Inicia o servidor na porta especificada no arquivo .env (padrão: 3000).

- **Modo de desenvolvimento**:
  ```bash
  npm run dev
  ```
  Inicia o servidor com o `nodemon`, reiniciando automaticamente em caso de alterações no código.

- **Popular o banco de dados**:
  ```bash
  npm run seed
  ```
  Executa o script `seed.js` para popular o banco de dados com produtos de exemplo.

---

## Endpoints da API

### **Base URL**
```
http://localhost:3000/api
```

### **1. Obter todos os produtos**
- **GET** `/products`
- **Resposta**:
  ```json
  [
    {
      "_id": "64a7f9e2b5d3c2a1b1234567",
      "ID_Produto": 1,
      "Nome_Produto": "Coca-Cola",
      "Descricao": "Refrigerante de cola, 350ml",
      "Preco": 5.99,
      "Estoque": 100,
      "Imagens": ["https://example.com/coca-cola.jpg"],
      "SKU": "COCA-350ML"
    }
  ]
  ```

---

### **2. Obter um produto por ID**
- **GET** `/products/:id`
- **Parâmetro**: `:id` (ID do produto no banco de dados ou `ID_Produto`).
- **Resposta**:
  ```json
  {
    "_id": "64a7f9e2b5d3c2a1b1234567",
    "ID_Produto": 1,
    "Nome_Produto": "Coca-Cola",
    "Descricao": "Refrigerante de cola, 350ml",
    "Preco": 5.99,
    "Estoque": 100,
    "Imagens": ["https://example.com/coca-cola.jpg"],
    "SKU": "COCA-350ML"
  }
  ```

---

### **3. Criar um novo produto**
- **POST** `/products`
- **Corpo da requisição**:
  ```json
  {
    "ID_Produto": 4,
    "Nome_Produto": "Pepsi",
    "Descricao": "Refrigerante de cola, 350ml",
    "Preco": 6.99,
    "Estoque": 150,
    "Imagens": ["https://example.com/pepsi.jpg"],
    "SKU": "PEPSI-350ML"
  }
  ```
- **Resposta**:
  ```json
  {
    "message": "Produto adicionado com sucesso!",
    "product": {
      "_id": "64a7f9e2b5d3c2a1b1234567",
      "ID_Produto": 4,
      "Nome_Produto": "Pepsi",
      "Descricao": "Refrigerante de cola, 350ml",
      "Preco": 6.99,
      "Estoque": 150,
      "Imagens": ["https://example.com/pepsi.jpg"],
      "SKU": "PEPSI-350ML"
    }
  }
  ```

---

### **4. Atualizar um produto**
- **PUT** `/products/:id`
- **Parâmetro**: `:id` (ID do produto no banco de dados ou `ID_Produto`).
- **Corpo da requisição**:
  ```json
  {
    "ID_Produto": 4,
    "Nome_Produto": "Pepsi Atualizado",
    "Descricao": "Refrigerante de cola, 350ml - Atualizado",
    "Preco": 7.50,
    "Estoque": 120,
    "Imagens": ["https://example.com/pepsi-atualizado.jpg"],
    "SKU": "PEPSI-350ML-ATUALIZADO"
  }
  ```
- **Resposta**:
  ```json
  {
    "message": "Produto atualizado com sucesso!",
    "product": {
      "_id": "64a7f9e2b5d3c2a1b1234567",
      "ID_Produto": 4,
      "Nome_Produto": "Pepsi Atualizado",
      "Descricao": "Refrigerante de cola, 350ml - Atualizado",
      "Preco": 7.50,
      "Estoque": 120,
      "Imagens": ["https://example.com/pepsi-atualizado.jpg"],
      "SKU": "PEPSI-350ML-ATUALIZADO"
    }
  }
  ```

---

### **5. Excluir um produto**
- **DELETE** `/products/:id`
- **Parâmetro**: `:id` (ID do produto no banco de dados ou `ID_Produto`).
- **Resposta**:
  ```json
  {
    "message": "Produto excluído com sucesso!"
  }
  ```

---

## Estrutura do Projeto

```
nodejs-product-api/
├── src/
│   ├── models/
│   │   └── productModel.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── app.js
│   └── seed.js
├── .env
├── package.json
└── README.md
```

---

## Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias.

---

## Licença

Este projeto está licenciado sob a licença MIT.

---
