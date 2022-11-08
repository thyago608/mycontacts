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
  async findAll(orderBy = "asc") {
    const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";

    const rows = await db.query(
      `SELECT * FROM contacts ORDER BY name ${direction}`
    );

    return rows;
  }

  async findById(id) {
    const [row] = await db.query("SELECT * FROM contacts WHERE id = $1", [id]);

    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query("SELECT * FROM contacts WHERE email = $1", [
      email,
    ]);

    return row;
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
    const { name, email, phone, category_id } = user;

    const [row] = await db.query(
      `
      UPDATE contacts 
      SET name = $1, email = $2, phone = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `,
      [name, email, phone, category_id, id]
    );

    return row;
  }

  async delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((item) => item.id !== id);

      resolve();
    });
  }
}

module.exports = new ContactRepository();
