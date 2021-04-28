const express = require("express")
const{ createBudget, getAllBudgets, getSingleBudget, updateBudget, deleteBudget } = require("../controllers/budgetsController")
const protect = require("../middlewares/authMiddleware")
const router = express.Router()

router.route("/").post(createBudget).get(getAllBudgets)
router.route("/:_id").get(protect,getSingleBudget).put(protect,updateBudget).delete(protect,deleteBudget)

module.exports = router;
