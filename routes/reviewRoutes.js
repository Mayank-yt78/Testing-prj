import express from 'express';
import { getAllReviews, getReviewById, createReview, updateReview, deleteReview } from '../controllers/reviewController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').get(getAllReviews).post(protect, createReview);
router.route('/:id').get(getReviewById).put(protect, updateReview).delete(protect, deleteReview);

export default router;