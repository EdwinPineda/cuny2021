const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const imageController = require("../controllers/image.js");
const upload = require("../middleware/image.js");
const validatorErrors = require("../middleware/validatorErrors.js");

router.post("/upload/:userID",
    [
        check('file'),
        validatorErrors, upload.single("file")
    ], imageController.uploadFiles);
router.get("/get/:userID", [validatorErrors], imageController.getUserImages);


module.exports = router;