const sequelize = require('../config/connection');
const Product = require('../models/Product');
const Category = require('../models/Category');

let categoryId;

beforeAll(async () => {
    await sequelize.sync({ force: true });
    //create a category for testing
    const category = await Category.create({ category_name: 'Test Category '});
    categoryId = category.id;
    console.log('Category created with ID:', categoryId)
});

afterAll(async () => {
    await sequelize.close();
});

describe('Product Model', () => {
    it('should create a new product', async () => {
        const product = await Product.create({
            product_name: 'Test Product',
            price: 19.99,
            stock: 50,
            category_id: 1,
        });
        expect(product.product_name).toBe('Test Product');
        expect(product.price).toBe(19.99);
        expect(product.stock).toBe(50);
        expect(product.category_id).toBe(1);
    });

    it('should retreive all products', async () => {
        const products = await Product.findAll();
        expect(products).toBeInstanceOf(Array);
        expect(products.length).toBeGreaterThan(0);
    });

    it('should retreive a product by ID', async () => {
        const product = await Product.findByPk(1);
        expect(product).toBeDefined();
        expect(product.product_name).toBe('Test Product');
    });
});