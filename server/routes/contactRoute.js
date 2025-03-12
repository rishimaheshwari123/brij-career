const express = require("express")
const { contactCtrl, submitApplication } = require("../controllers/contactCtrl")
const router = express.Router()


router.post("/send", contactCtrl)
router.post("/career", submitApplication)




module.exports = router