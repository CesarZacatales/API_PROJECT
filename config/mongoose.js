const Mongoose = require("mongoose");
const debug = require("debug")("app:mongoose");

const dburi = process.env.DBURI || `mongodb+srv://drodriguez22:wSNtlodv9Pe7pNwc@clusterelevenpage.2vfjs1z.mongodb.net/dbElevenPage?retryWrites=true&w=majority`;

const connect = async () => {
  debug(dburi);
  try {
    await Mongoose.connect(dburi);
    debug("Conexión a la base exitosa");
  } catch (error) {
    debug("Error en la conexión de la base");
    process.exit(1);
  }
}

module.exports = {
  connect
}