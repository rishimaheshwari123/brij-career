const express = require("express")
const { contactCtrl, submitApplication, getAllApplications } = require("../controllers/contactCtrl")
const router = express.Router()


router.post("/send", contactCtrl)
router.post("/career", submitApplication)
router.get("/all", getAllApplications)




module.exports = router