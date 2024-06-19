const mongoose = require("mongoose");
const { daftarSchema } = require(".");

module.exports = mongoose.model("Daftar", daftarSchema);
