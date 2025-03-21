const express = require("express")
const { createJobCtrl, getAllJobCtrl, deleteJobCtrl, updateJobCtrl } = require("../controllers/jobCtrl")
const router = express.Router()


router.post("/create", createJobCtrl)
router.get("/getAll", getAllJobCtrl)
router.delete("/delete/:id", deleteJobCtrl)
router.put("/update/:id", updateJobCtrl)



module.exports = router