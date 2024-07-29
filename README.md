# E-commerce Back End

## Description

This project is a back-end application for an e-commerce site built using Express.js and Sequelize. It provides a RESTful API for managing categories, products, and tags in a PostgreSQL database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Categories](#categories)
  - [Products](#products)
  - [Tags](#tags)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)
- [Links](#links)

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/e-commerce-back-end.git
   ```
2. Navigate to the project directory:
   ```bash
   cd e-commerce-back-end
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your PostgreSQL database credentials:
   ```bash
   DB_NAME=your_database_name
   DB_USER=your_database_username
   DB_PASSWORD=your_database_password
   ```
## Usage

1. Create and seed the database:
   ```bash
   npm run schema
   npm run seed
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Use an API client like Insomnia or Postman to test the API endpoints.

## API Endpoints

### Categories

- **GET /api/categories**
  - Retrieve all categories along with their associated products.

- **GET /api/categories/:id**
  - Retrieve a single category by its `id` along with its associated products.

- **POST /api/categories**
  - Create a new category.
  - Request Body:
    ```json
    {
      "category_name": "New Category"
    }
    ```

- **PUT /api/categories/:id**
  - Update a category by its `id`.
  - Request Body:
    ```json
    {
      "category_name": "Updated Category"
    }
    ```

- **DELETE /api/categories/:id**
  - Delete a category by its `id`.

### Products

- **GET /api/products**
  - Retrieve all products along with their associated categories and tags.

- **GET /api/products/:id**
  - Retrieve a single product by its `id` along with its associated categories and tags.

- **POST /api/products**
  - Create a new product.
  - Request Body:
    ```json
    {
      "product_name": "New Product",
      "price": 100.00,
      "stock": 10,
      "tagIds": [1, 2]
    }
    ```

- **PUT /api/products/:id**
  - Update a product by its `id`.
  - Request Body:
    ```json
    {
      "product_name": "Updated Product",
      "price": 150.00,
      "stock": 5,
      "tagIds": [3, 4]
    }
    ```

- **DELETE /api/products/:id**
  - Delete a product by its `id`.

### Tags

- **GET /api/tags**
  - Retrieve all tags along with their associated products.

- **GET /api/tags/:id**
  - Retrieve a single tag by its `id` along with its associated products.

- **POST /api/tags**
  - Create a new tag.
  - Request Body:
    ```json
    {
      "tag_name": "New Tag"
    }
    ```

- **PUT /api/tags/:id**
  - Update a tag by its `id`.
  - Request Body:
    ```json
    {
      "tag_name": "Updated Tag"
    }
    ```

- **DELETE /api/tags/:id**
  - Delete a tag by its `id`.

## Screenshots

- [Demo Video](https://www.loom.com/share/dcb6042619304589a96c06c8b2f9d315?sid=34917f5c-1205-486b-b032-824fef624037)
  
## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## GitHub

- [GitHub Repository](https://github.com/yourusername/e-commerce-back-end)


