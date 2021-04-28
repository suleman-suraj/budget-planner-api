const mongoose = require("mongoose")

const budgetSchema = mongoose.Schema({
    year: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    }
    

}, {
    timestamps: true,
});


const Budget = mongoose.model("Budget", budgetSchema)
module.exports = Budget
