const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
console.log('Setting up associations: Product belongsTo Category');
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL',
});

// Categories have many Products
console.log('Setting up associations: Category hasMany Products');
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
console.log('Setting up associations: Product belongsToMany Tags');
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
console.log('Setting up associations: Tag belongsToMany Products');
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

console.log('Associations setup completed');

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
