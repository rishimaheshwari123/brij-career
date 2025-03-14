const jobModel = require("../models/jobModle")


const createJobCtrl = async (req, res) => {
    try {
        const { title, desc, contact, experience, salary } = req.body;

        if (!title || !desc || !contact || !experience || !salary) {
            return res.status(400).json({
                success: false,
                message: "Please Provide All Fields"
            });
        }

        const job = await jobModel.create({
            title, desc, contact, experience, salary
        });

        return res.status(201).json({
            success: true,
            message: "Job created successfully!",
            job
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in creating job"
        });
    }
}




const getAllJobCtrl = async (req, res) => {
    try {
        const jobs = await jobModel.find({});

        return res.status(200).json({
            success: true,
            jobs,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in getting all jobs"
        })
    }
}
const deleteJobCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        await jobModel.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: "Job Deleted successfully!"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in deleting Job"
        })
    }
}
module.exports = { createJobCtrl, getAllJobCtrl, deleteJobCtrl }