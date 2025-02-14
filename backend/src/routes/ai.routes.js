const express = require("express");
const aiController = require("../controllers/ai.controller"); // Ensure correct path

const router = express.Router();

// ✅ Fix the method call (make sure it's a POST request, not GET)
router.post("/get-review", aiController.getReview);

module.exports = router;
