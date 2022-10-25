const { v4 } = require("uuid");

const contacts = [
  {
    id: v4(),
    name: "Thyago Ribeiro",
    email: "thyago@example.com",
    phone: "982323289",
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();
