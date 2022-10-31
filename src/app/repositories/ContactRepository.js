const { v4 } = require("uuid");
const db = require("../../database");

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
    const rows = await db.query("SELECT * FROM contacts");

    return rows;
  }

  async findById(id) {
    const [row] = await db.query("SELECT * FROM contacts WHERE id = $1", [id]);

    return row;
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
    const { name, email, phone, category_id } = user;

    const [row] = await db.query(
      `
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
      `,
      [name, email, phone, category_id]
    );

    return row;
  }

  async update(id, user) {
    return new Promise((resolve) => {
      const { name, email, phone, category_id } = user;

      const updateContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) =>
        contact.id === id ? updateContact : contact
      );

      resolve(updateContact);
    });
  }
}

module.exports = new ContactRepository();
