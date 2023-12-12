const express = require("express");
const router = express.Router();
const Controller = require("../controllers/index");

router.get("/", Controller.readAllProducts);
router.get("/kategori", Controller.readAllKategori);
router.get("/status", Controller.readAllStatus);
router.get("/:id", Controller.findProductById);
router.post("/", Controller.addProducts);
router.put("/:id", Controller.editProducts);
router.delete("/:id", Controller.deleteProducts);

module.exports = router;
