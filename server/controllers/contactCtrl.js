const mailSender = require("../utils/mailSender");
const { eventContactEmail } = require("../templates/contactFormRes");
const resumeSender = require("../utils/resumeSender");
const fs = require('fs');
const path = require('path');
const Application = require('../models/applicationModel');
const contactModel = require("../models/contactModel")

const contactCtrl = async (req, res) => {
    const { name, email, contact, message, } = req.body;

    try {

        if (!email || !name || !contact || !message) {
            return res.status(500).send({
                message: "Plase provide all fields",
                success: false
            })
        }
        await contactModel.create({ name, email, contact, message });
        const emailRes = await mailSender(
            ["Prachitiwari2013@gmail.com", "Brij.dubai@gmail.com"], "Your Data send successfully",
            eventContactEmail(name, email, contact, message)
        )

        res.status(200).send({
            message: "Email send successfully.Our team will contact you soon!",
            emailRes,
            success: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Error in sending email",
        })
    }
}
const submitApplication = async (req, res) => {
    const { name, email, contact, message, applicationFor, jobId } = req.body;
    const resume = req.files?.resume;

    if (!resume) {
        return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    try {
        // Define upload directory
        const uploadDir = path.join(__dirname, '../uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        // Generate a unique filename
        const fileName = `${Date.now()}_${resume.name}`;
        const filePath = path.join(uploadDir, fileName);

        // Move the uploaded file to the server
        await resume.mv(filePath);

        // Save application data to MongoDB
        const newApplication = new Application({
            name,
            email,
            contact,
            message,
            applicationFor,
            resumeUrl: `/uploads/${fileName}`, // Store file path in DB
            jobId
        });

        await newApplication.save();

        // Read resume file data
        const fileData = await fs.promises.readFile(filePath);

        // Prepare email attachments
        const attachments = [{
            filename: resume.name,
            content: fileData.toString('base64'),
            encoding: 'base64',
        }];

        // Email content
        const title = `Career Application from ${name}`;
        const body = `
            <h2>Application Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Application For:</strong> ${applicationFor}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;

        // Send resume via email
        await resumeSender(["Prachitiwari2013@gmail.com", "Brij.dubai@gmail.com"], title, body, attachments);

        res.status(201).json({ success: true, message: 'Application submitted successfully', data: newApplication });

    } catch (error) {
        console.error('Error handling application:', error);
        res.status(500).json({ success: false, message: 'Failed to submit application' });
    }
};


const getAllContact = async (req, res) => {
    try {
        const applications = await contactModel.find().sort({ createdAt: -1 }); // Get all applications, latest first
        res.status(200).json({ success: true, data: applications });
    } catch (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch applications' });
    }
};
module.exports = { contactCtrl, submitApplication, getAllContact };
