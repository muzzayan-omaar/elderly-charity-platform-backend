import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

import seedRoles from "./seeders/roleSeeder.js";
import seedSuperAdmin from "./seeders/superAdminSeeder.js";

dotenv.config();

const startServer = async () => {
  try {
    await connectDB();

    await seedRoles();

    await seedSuperAdmin();

    const PORT =
      process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(
        `🚀 Server running on port ${PORT}`
      );
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();