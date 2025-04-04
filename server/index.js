const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")
const cors = require("cors")
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const connectDB = require("./config/db");
const path = require('path');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


dotenv.config();
connectDB();

const PORT = process.env.PORT || 8080


app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "*",
    credentials: true,
}))

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp"
    })
)
// cloudinaryConnect();



app.use("/api/v1/contact", require("./routes/contactRoute"))
app.use("/api/v1/auth", require("./routes/authRoute"))
app.use("/api/v1/job", require("./routes/jobRoute"))
app.use("/api/v1/application", require("./routes/applicationRouete"))





app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is up and running ..."
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`)
})
