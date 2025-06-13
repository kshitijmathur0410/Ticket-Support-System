export default class ProductModel {
  constructor(id, name, subject, desc, price, imageUrl) {
    this.id = id;
    this.name = name;
    this.subject = subject
    this.desc = desc;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  static getAll() {
    return products;
  }

  static update(productObj) {
    const index = products.findIndex(
      (p) => p.id == productObj.id
    );
    products[index] = productObj;
  }

  static delete(id) {
    const index = products.findIndex(
      (p) => p.id == id
    );
    products.splice(index, 1);
  }

  static add(name, subject, desc, price, imageUrl) {
    let newProduct = new ProductModel(
      products.length + 1,
      name,
      subject,
      desc,
      price,
      imageUrl
    );
    products.push(newProduct);
  }

  static getById(id) {
    return products.find((p) => p.id == id);
  }
}

var products = [
  new ProductModel(
    1,
    'Ticket 1',
    'Subject 1',
    'Description for ticket 1',
    'pending',
    'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
  ),
  new ProductModel(
    2,
    'Ticket 2',
    'Subject 2',
    'Description for ticket 2',
    'pending',
    'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg'
  ),
  new ProductModel(
    3,
    'Ticket 3',
    'Subject 3',
    'Description for ticket 3',
    'pending',
    'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg'
  ),
];
