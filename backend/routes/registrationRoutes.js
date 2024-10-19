const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

router.post('/register', registrationController.createRegistration);
router.get('/register', registrationController.getAllRegistrations);
router.put('/register/:ID', registrationController.updateRegistration);
router.delete('/register/:ID', registrationController.deleteRegistration);

module.exports = router;