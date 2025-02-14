const aiService = require("../services/ai.service");

const getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    try {
        const response = await aiService.getReview(code); 
        res.json({ review: response });
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: "Error processing request" });
    }
};

module.exports = { getReview };
