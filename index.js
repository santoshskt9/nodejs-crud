require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT;
const userRouter = require("./api/users/user.router");

app.use(cors());

app.use(express.json());

app.use("/api/users", userRouter);

app.get('/', (req, res) => {
    res.json({
        success: 1,
        message: "This is REST APIs working." 
    });
});

app.listen(PORT, () => {
    console.log("Server is listening to 8000 \nVisit : http://localhost:8000");
})