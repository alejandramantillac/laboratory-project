const express = require("express");
const AgendaController = require("../controllers/agenda");

const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/add-agenda", [md_auth.ensureAuth], AgendaController.addAgenda);
api.get("/get-agendas", AgendaController.getAgendas);
api.put("/update-agenda/:id", [md_auth.ensureAuth], AgendaController.updateAgenda);
api.delete("/delete-agenda/:id", [md_auth.ensureAuth], AgendaController.deleteAgenda);
api.get("/get-agenda/:url", AgendaController.getAgenda);

module.exports = api;