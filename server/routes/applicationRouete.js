const express = require("express")
const { getAllAplicationWithJobIDCtrl } = require("../controllers/applicationCtrl")
const router = express.Router()


router.get("/getAll/:id", getAllAplicationWithJobIDCtrl)



module.exports = router