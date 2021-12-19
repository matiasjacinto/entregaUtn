var express = require("express");
const { getMaxListeners } = require("../app");
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/index", async function (req, res, next) {
  var nombre = req.body.nombre;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var mensaje = req.body.comentario;

  var obj = {
    to: "matymdq@getMaxListeners.com",
    subject: "contacto de pagina Food.",
    html:
      nombre +
      " se contacto desde el sitio Food. para obtener asesoramiento, nos podemos contatar a su correo electronico:" +
      email +
      ".<br> O telefonicamente a su numero de telefono:" +
      telefono +
      ".<br> y su comentario es:" +
      mensaje,
  };
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  var info = await transport.sendMail(obj);
  res.render("index", {
    message: "El mensaje fue enviado con exito",
  });
});

module.exports = router;
