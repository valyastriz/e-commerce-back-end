const sequelize = require('../config/connection');
const Product = require('../models/Product');
const Tag = require('../models/Tag');
const ProductTag = require('../models/ProductTag');
const Category = require('../models/Category');

beforeAll(async () => {
  await sequelize.sync({ force: true });

  // Create a category for products
  const category = await Category.create({ category_name: 'Test Category' });

  // Create products
  const product1 = await Product.create({
    product_name: 'Test Product 1',
    price: 19.99,
    stock: 50,
    category_id: category.id,
  });

  const product2 = await Product.create({
    product_name: 'Test Product 2',
    price: 29.99,
    stock: 30,
    category_id: category.id,
  });

  // Create tags
  const tag1 = await Tag.create({ tag_name: 'Test Tag 1' });
  const tag2 = await Tag.create({ tag_name: 'Test Tag 2' });

  // Associate products with tags
  await ProductTag.create({ product_id: product1.id, tag_id: tag1.id });
  await ProductTag.create({ product_id: product1.id, tag_id: tag2.id });
  await ProductTag.create({ product_id: product2.id, tag_id: tag1.id });

  // Logging for debugging
  console.log(`Category ID: ${category.id}`);
  console.log(`Product 1 ID: ${product1.id}`);
  console.log(`Product 2 ID: ${product2.id}`);
  console.log(`Tag 1 ID: ${tag1.id}`);
  console.log(`Tag 2 ID: ${tag2.id}`);
});

afterAll(async () => {
  await sequelize.close();
});

describe('ProductTag Model', () => {
  it('should create associations between products and tags', async () => {
    const productTag = await ProductTag.findOne({
      where: { product_id: 1, tag_id: 1 },
    });
    expect(productTag).toBeDefined();
    expect(productTag.product_id).toBe(1);
    expect(productTag.tag_id).toBe(1);
  });

  it('should retrieve products with their associated tags', async () => {
    const product = await Product.findByPk(1, {
      include: [{ model: Tag, through: { attributes: [] } }],
    });

    expect(product).toBeDefined();
    expect(product.Tags).toBeInstanceOf(Array);
    expect(product.Tags.length).toBeGreaterThan(0);
  });

  it('should retrieve tags with their associated products', async () => {
    const tag = await Tag.findByPk(1, {
      include: [{ model: Product, through: { attributes: [] } }],
    });

    expect(tag).toBeDefined();
    expect(tag.Products).toBeInstanceOf(Array);
    expect(tag.Products.length).toBeGreaterThan(0);
  });
});
