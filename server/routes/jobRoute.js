const express = require("express")
const { createJobCtrl, getAllJobCtrl, deleteJobCtrl } = require("../controllers/jobCtrl")
const router = express.Router()


router.post("/create", createJobCtrl)
router.get("/getAll", getAllJobCtrl)
router.delete("/delete/:id", deleteJobCtrl)



module.exports = router