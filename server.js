const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const connectDB = require("./config/connectDB")
const budgetsRoute = require("./routes/budgetsRoute")
const usersRoute = require("./routes/usersRoute")
const cors = require("cors")

dotenv.config()

const app = express()

//connection
connectDB();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

//routes
app.use("/api/v1/budgets", budgetsRoute);
app.use("/api/v1/users", usersRoute);

//home route
app.get("/", (req,res)=> {
    res.send("<h1>welcome to our budgets api</h1>")
})

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`server started on port ${port}`))