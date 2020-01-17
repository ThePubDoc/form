const express = require('express');
const mainController = require('../controller/mainController');
const formController = require('../controller/formController')
const router = express.Router();
const app = express();

router.route('/').get(mainController.homepage)

router.route("/submited").get(mainController.submited)
router.route("/submited").post(formController.form)



module.exports = router