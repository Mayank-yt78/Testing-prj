import express from "express";
import {
  getAllCareers,
  getCareerById,
  createCareer,
  updateCareer,
  deleteCareer,
} from "../controllers/careerController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(getAllCareers).post(protect, createCareer);
router
  .route("/:id")
  .get(getCareerById)
  .put(protect, updateCareer)
  .delete(protect, deleteCareer);

export default router;
