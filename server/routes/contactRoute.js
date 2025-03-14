const express = require("express")
const { contactCtrl, submitApplication, getAllContact, } = require("../controllers/contactCtrl")
const router = express.Router()


router.post("/send", contactCtrl)
router.post("/career", submitApplication)
router.get("/getAll", getAllContact)




module.exports = router