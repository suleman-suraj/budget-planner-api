const Budget = require("../models/budgetSchema")

//adding new budget
const createBudget = async (req,res) => {
    const newBudget = new Budget({
        year: req.body.year,
        month: req.body.month,
        day: req.body.day,
    });

    await newBudget.save()
    res.status(201).json(newBudget);
}
//get all budgets
const getAllBudgets = async (req,res) => {
    const budgets = await Budget.find()
    res.json(budgets)
}
//get a budget
const getSingleBudget = async (req,res) => {
    const budget = await Budget.findById(req.params._id)
    res.json(budget)
}
//update a budget
const updateBudget =async (req, res) =>{
    const foundBudget = await Budget.findById(req.params._id)
    if (foundBudget) {
        (foundBudget.year = req.body.year),
        (foundBudget.month = req.body.month),
        (foundBudget.day = req.body.day)
        
        
        const updatedBudget = await foundBudget.save()
        res.json({updatedBudget})
    }
}

// delete a budget
const deleteBudget = async (req,res) => {
    const foundBudget = await Budget.findById(req.params._id)
    if (foundBudget) {
        foundBudget.remove()
        res.json((`msg: ${foundBudget.year} removed`))
    } else {
        res.status(404).json({error: "Budget not found"})
    }
}

module.exports = {createBudget, getAllBudgets, getSingleBudget, updateBudget, deleteBudget};