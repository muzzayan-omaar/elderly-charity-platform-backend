import Admin from "../models/Admin.js";
import Role from "../models/Role.js";

const seedSuperAdmin = async () => {
  try {
    const superRole = await Role.findOne({
      name: "Super Admin",
    });

    if (!superRole) {
      console.log("❌ Super Admin role missing");
      return;
    }

    const existingAdmin =
      await Admin.findOne({
        email:
          process.env.SUPER_ADMIN_EMAIL,
      });

    if (existingAdmin) {
      console.log(
        "ℹ️ Super Admin already exists"
      );
      return;
    }

    await Admin.create({
      firstName: "System",
      lastName: "Administrator",
      email:
        process.env.SUPER_ADMIN_EMAIL,
      password:
        process.env.SUPER_ADMIN_PASSWORD,
      role: superRole._id,
    });

    console.log(
      "✅ Super Admin created"
    );
  } catch (error) {
    console.error(error);
  }
};

export default seedSuperAdmin;