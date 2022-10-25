const { v4 } = require("uuid");

let contacts = [
  {
    id: v4(),
    name: "Thyago Ribeiro",
    email: "thyago@example.com",
    phone: "982323289",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Rafael Ribeiro",
    email: "rafa@example.com",
    phone: "982433289",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Angela Tayla",
    email: "tayla@example.com",
    phone: "92313289",
    category_id: v4(),
  },
];

class ContactRepository {
  async findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  async findById(id) {
    return new Promise((resolve) => {
      const contact = contacts.find((item) => item.id === id);

      resolve(contact);
    });
  }

  async delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((item) => item.id !== id);

      resolve();
    });
  }
}

module.exports = new ContactRepository();
