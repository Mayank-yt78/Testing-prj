// utils/seedAdmin.js
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";

export const seedAdmin = async () => {
  const existingAdmin = await Admin.findOne({ email: "admin@example.com" });
  if (existingAdmin) {
    console.log("👤 Admin already exists.");
  } else {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await Admin.create({
      email: "admin@example.com",
      password: hashedPassword,
    });
    console.log("✅ Default admin created (admin@example.com / admin123)");
  }
};
