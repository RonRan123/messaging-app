var express = require('express');
const cors = require("cors");
var router = express.Router();
const db = require("./firebase");


router.get("/", function(req, res, next) {
    res.send("Messages API is working!");
});

router.get("/messages", async (req, res) => {
    
})


module.exports = router;