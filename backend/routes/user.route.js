import express from 'express';
import { signup } from '../controllers/user.controller.js';
import { login } from '../controllers/user.controller.js';

const router = express.Router(); // Initialize the router

// POST request to signup
router.post('/signup', signup);
router.post('/login', login);

export default router;
