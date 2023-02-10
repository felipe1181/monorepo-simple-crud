const database = require("../../database");

const crypto = require("crypto");

const controller = {
  index(req, res) {
    return res.json({
      data: database,
    });
  },
  indexById(req, res) {
    const id = req.params.id;

    if (id) {
      return res.json({
        data: database.find((data) => String(data.id) === id),
      });
    }

    return res.status(404).json({
      message: "Erro ao listar pelo id",
    });
  },
  create(req, res) {
    const { message } = req.body;

    if (message) {
      const id = crypto.randomBytes(16).toString("hex");

      database.push({ id, message });

      return res.status(201).json({
        data: { id, message },
        message: "Novo todo foi criado",
      });
    }
    return res.status(403).json({
      message: "Erro ao criar",
    });
  },
  update(req, res) {
    const { message } = req.body;
    const id = req.params.id;

    const indexDatabase = database.findIndex((data) => String(data.id) === id);
    database[indexDatabase].message = message;

    return res.status(201).json({
      data: { id, message },
      message: "todo foi alterado",
    });
  },
  delete(req, res) {
    const id = req.params.id;
    const indexDatabase = database.findIndex((data) => String(data.id) === id);

    if (indexDatabase >= 0) {
      database.splice(indexDatabase, 1);

      return res.status(201).json({
        message: "todo foi removido",
      });
    }
    return res.status(404).json({
      message: "Erro ao deletar todo",
    });
  },
};

module.exports = controller;
