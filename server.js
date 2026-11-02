const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(express.json());

app.use("/api/feedback", require("./routes/feedbackRoutes"));

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB connected successfully");

    app.listen(process.env.PORT, () => {
        console.log("Server running on port " + process.env.PORT);
    });
})
.catch((error) => {
    console.log(error);
});