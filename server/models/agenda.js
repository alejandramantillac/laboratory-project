const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const Schema = mongoose.Schema;

const AgendaSchema = Schema({
  title: String,
  url: {
    type: String,
    unique: false,
  },
  user: String,
  date: Date
});
AgendaSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Agenda", AgendaSchema);