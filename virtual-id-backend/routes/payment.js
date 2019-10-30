const { Router } = require("express");
const upload = require("multer")({ dest: "/licenses" });

const router = Router();

const payments = io => {
  router.get("/pay", (req, res, next) => {
    // Receive Geolocation Data
    //
  });

  return router;
};

module.exports = payments;
