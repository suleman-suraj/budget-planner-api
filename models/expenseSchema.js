const mongoose = require("mongoose")

const expenseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    }
     

}, {
    timestamps: true,
});


const Expense = mongoose.model("Expense", expenseSchema)
module.exports = Expense
