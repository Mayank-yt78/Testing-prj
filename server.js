import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

import connectDB from './config/db.js';
import projectRoutes from './routes/projectRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import careerRoutes from './routes/careerRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import { seedAdmin } from './utils/seedAdmin.js'; // 👈 Import admin seeder

dotenv.config();

const startServer = async () => {
  try {
    await connectDB();        // Connect DB
    await seedAdmin();        // 👈 Seed default admin if not exists

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(morgan('dev'));

    app.use('/api/projects', projectRoutes);
    app.use('/api/reviews', reviewRoutes);
    app.use('/api/contact', contactRoutes);
    app.use('/api/careers', careerRoutes);
    app.use('/api/admin', adminRoutes);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server startup error:", error);
    process.exit(1);
  }
};

startServer(); // 👈 Start everything
 