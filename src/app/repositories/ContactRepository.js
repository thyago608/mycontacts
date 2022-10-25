const { uuid } = require("uuidv4");

const contacts = [
  {
    id: uuid(),
    name: "Thyago Ribeiro",
    email: "thyago@example.com",
    phone: "982323289",
    category_id: uuid(),
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
