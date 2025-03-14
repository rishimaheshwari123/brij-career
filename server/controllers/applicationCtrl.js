const applicationModel = require("../models/applicationModel")






const getAllAplicationWithJobIDCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        const applications = await applicationModel.find({ jobId: id });

        return res.status(200).json({
            success: true,
            applications,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in getting all Application with job id"
        })
    }
}

module.exports = { getAllAplicationWithJobIDCtrl }