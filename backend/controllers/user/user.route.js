const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

router.post("/register", userController.register);

router.post('/login', userController.login);

router.get('/user-details/:id', userController.getUserDetails);

router.put('/update-profile/:id', userController.updateUserProfile);

router.delete('/delete-user/:id', userController.deleteUser);

router.post('/change-password', userController.changePassword);

module.exports = router;