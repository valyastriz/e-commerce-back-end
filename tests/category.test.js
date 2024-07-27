const sequelize = require('../config/connection');
const Category = require('../models/Category');

beforeAll(async () => {
    await sequelize.sync({ force: true});
});

afterAll(async () => {
    await sequelize.close();
});

describe('Category Model', () => {
    it('should create a new category', async () => {
        const category = await Category.create({ category_name: 'Test Category'});
        expect(category.category_name).toBe('Test Category');
    });

    it('should retrieve all categories', async () => {
        const categories = await Category.findAll();
        expect(categories).toBeInstanceOf(Array);
    });
});