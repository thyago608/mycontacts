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

  async findByEmail(email) {
    return new Promise((resolve) => {
      const contact = contacts.find((item) => item.email === email);

      resolve(contact);
    });
  }

  async create(user) {
    return new Promise((resolve) => {
      const { name, email, phone, category_id } = user;

      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);

      resolve(newContact);
    });
  }
}

module.exports = new ContactRepository();
