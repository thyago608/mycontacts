const ContactRepository = require("../repositories/ContactRepository");

class ContactController {
  //listar todos os registros
  async index(request, response) {
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  //obter um registro
  show() {}

  //criar um registro
  store() {}

  //editar um registro
  update() {}

  //deletar um registro
  delete() {}
}

module.exports = new ContactController();
