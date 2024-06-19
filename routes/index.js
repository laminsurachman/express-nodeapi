var express = require("express");
var router = express.Router();
const Daftar = require("../models/index");

/* GET home page. */
router.post("/create", function (req, res, next) {
  const data = new Daftar({
    nama: req.body.nama,
    alamat: req.body.alamat,
    telp: req.body.telp,
  });
  data.save().then((result, err) => {
    if (result) res.send(result);
    else res.send(err);
  });
});
router.get("/read", function (req, res, next) {
  Daftar.find({}).then((result, err) => {
    if (result) res.send(result);
    else res.send(err);
  });
});
router.put("/update", function (req, res, next) {
  const data = {
    nama: req.body.nama,
    alamat: req.body.alamat,
    telp: req.body.telp,
  };
  Daftar.findByIdAndUpdate(req.body.id, data).then((result, err) => {
    if (result) res.send(data);
    else res.send(err);
  });
});
router.delete("/delete", function (req, res, next) {
  Daftar.findByIdAndDele({ _id: req.body.id }).then((result, err) => {
    if (result) res.send(data);
    else res.send(err);
  });
});
module.exports = router;
