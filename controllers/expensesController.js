const Expense = require("../models/expenseSchema")

//adding new expenses
const createExpense = async (req,res) => {
    const newExpense = new Expense({
        name: req.body.name,
        cost: req.body.cost,
    });

    await newExpense.save()
    res.status(201).json(newExpense);
}
//get all Expenses
const getAllExpenses = async (req,res) => {
    const expenses = await Expense.find()
    res.json(expenses)
}
//get an expense
const getSingleExpense = async (req,res) => {
    const expense = await Expense.findById(req.params._id)
    res.json(expense)
}
//update an expense
const updateExpense =async (req, res) =>{
    const foundExpense = await Expense.findById(req.params._id)
    if (foundExpense) {
        (foundExpense.name = req.body.name),
        (foundExpense.cost = req.body.cost)
        
        
        const updatedExpense = await foundExpense.save()
        res.json({updatedExpense})
    }
}

// delete an expense
const deleteExpense = async (req,res) => {
    const foundExpense = await Expense.findById(req.params._id)
    if (foundExpense) {
        foundExpense.remove()
        res.json((`msg: ${foundExpense.name} removed`))
    } else {
        res.status(404).json({error: "Expense not found"})
    }
}

module.exports = {createExpense, getAllExpenses, getSingleExpense, updateExpense, deleteExpense};