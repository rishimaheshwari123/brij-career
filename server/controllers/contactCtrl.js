const mailSender = require("../utils/mailSender");
const { eventContactEmail } = require("../templates/contactFormRes");
const resumeSender = require("../utils/resumeSender");
const fs = require('fs');



const contactCtrl = async (req, res) => {
    const { name, email, contact, message, } = req.body;

    try {

        if (!email || !name || !contact || !message) {
            return res.status(500).send({
                message: "Plase provide all fields",
                success: false
            })
        }
        const emailRes = await mailSender(
            "rishimaheshwari040@gmail.com",
            "Your Data send successfully",
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
    const { name, email, contact, message, applicationFor } = req.body;
    const resume = req.files?.resume;

    if (!resume) {
        return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    try {
        const filePath = resume.tempFilePath;
        const fileData = await fs.promises.readFile(filePath);

        const attachments = [{
            filename: resume.name,
            content: fileData.toString('base64'),
            encoding: 'base64',
        }];

        const title = `Career Application from ${name}`;
        const body = `
        <h2>Application Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Application For:</strong> ${applicationFor}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;

        console.log('Attachments:', attachments);

        // Example call to resumeSender function
        await resumeSender(email, title, body, attachments);

        res.status(200).json({ success: true, message: 'Application submitted successfully' });
    } catch (error) {
        console.error('Error handling application:', error);
        res.status(500).json({ success: false, message: 'Failed to submit application' });
    }
};
module.exports = { contactCtrl, submitApplication };
