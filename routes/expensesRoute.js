const express = require("express")
const{ createExpense, getAllExpenses, getSingleExpense, updateExpense, deleteExpense } = require("../controllers/expensesController")
const protect = require("../middlewares/authMiddleware")
const router = express.Router()

router.route("/").post(createExpense).get(getAllExpenses)
router.route("/:_id").get(protect,getSingleExpense).put(protect,updateExpense).delete(protect,deleteExpense)
// router.route("/:_id").get(getSingleExpense).put(updateExpense).delete(deleteExpense)

module.exports = router;
