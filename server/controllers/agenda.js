const Agenda = require("../models/agenda");

function addAgenda(req, res) {

  const body = req.body;
  const agenda = new Agenda(body);

  agenda.save((err, agendaStored) => {
    if (err) {
      res.status(500).send({ code: 500, message: "Error del servidor." });
    } else {
      if (!agendaStored) {
        res
          .status(400)
          .send({ code: 400, message: "No se ha podido crear la agenda." });
      } else {
        res
          .status(200)
          .send({ code: 200, message: "Agenda creada correctamente." });
      }
    }
  });
}

function getAgendas(req, res) {
  const { page = 1, limit = 10 } = req.query;

  const options = {
    page,
    limit: parseInt(limit),
    sort: { date: "desc" }
  };

  Agenda.paginate({}, options, (err, agendasStored) => {
    if (err) {
      res.status(500).send({ code: 500, message: "Error del servidor." });
    } else {
      if (!agendasStored) {
        res
          .status(404)
          .send({ code: 404, message: "No se ha encontrado ninguna agenda." });
      } else {
        res.status(200).send({ code: 200, agendas: agendasStored });
      }
    }
  });
}

function updateAgenda(req, res) {
  const agendaData = req.body;
  const { id } = req.params;

  Agenda.findByIdAndUpdate(id, agendaData, (err, agendaUpdate) => {
    if (err) {
      res.status(500).send({ code: 500, message: "Error del servidor." });
    } else {
      if (!agendaUpdate) {
        res
          .status(404)
          .send({ code: 404, message: "No se ha encontrado ninguna agenda." });
      } else {
        res
          .status(200)
          .send({ code: 200, message: "Agenda actualizada correctamente." });
      }
    }
  });
}

function deleteAgenda(req, res) {
  const { id } = req.params;

  Agenda.findByIdAndRemove(id, (err, agendaDeleted) => {
    if (err) {
      res.status(500).send({ code: 500, message: "Error del servidor." });
    } else {
      if (!agendaDeleted) {
        res.status(404).send({ code: 404, message: "Agendamiento no encontrado." });
      } else {
        res.status(200).send({
          code: 200,
          message: "El agendamiento ha sido eliminado correctamente."
        });
      }
    }
  });
}

function getAgenda(req, res) {
  const { url } = req.params;

  Agenda.findOne({ url }, (err, agendaStored) => {
    if (err) {
      res.status(500).send({ code: 500, message: "Error del servidor." });
    } else {
      if (!agendaStored) {
        res
          .status(404)
          .send({ code: 404, message: "No se ha encontrado ningun agendamiento." });
      } else {
        res.status(200).send({ code: 200, agenda: agendaStored });
      }
    }
  });
}

module.exports = {
addAgenda,
getAgendas,
updateAgenda,
deleteAgenda,
getAgenda
};