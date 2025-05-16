import express from 'express';
import { loginAdmin, logoutAdmin, getAdminProfile } from '../controllers/adminController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', loginAdmin);
router.post('/logout', logoutAdmin);
router.get('/profile', protect, getAdminProfile);

export default router;