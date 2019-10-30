const { Router } = require("express");
const upload = require("multer")({ dest: "/licenses" });

const router = Router();

const payments = io => {
  router.get("/pay", (req, res, next) => {
    // Receive Geolocation Data -> (req.geolocation, req.platenumber)
    // Get file for License -> req.file
    // Save to DB 
    // Broadcast to /eta/pending
    
  });

  return router;
};

module.exports = payments;
