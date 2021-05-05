const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const connectDB = require("./config/connectDB")
const expensesRoute = require("./routes/expensesRoute")
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
app.use("/api/v1/expenses", expensesRoute);
app.use("/api/v1/users", usersRoute);

//home route
app.get("/", (req,res)=> {
    res.send("<h1>welcome to our budget-planner-api</h1>")
})

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`server started on port ${port}`))