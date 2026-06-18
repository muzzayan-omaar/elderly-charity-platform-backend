import Role from "../models/Role.js";

const roles = [
  {
    name: "Super Admin",
    description: "Full system access",
  },
  {
    name: "Admin",
    description: "General administration",
  },
  {
    name: "Editor",
    description: "Content management",
  },
  {
    name: "Finance Officer",
    description: "Donation management",
  },
  {
    name: "Volunteer Manager",
    description: "Volunteer operations",
  },
];

const seedRoles = async () => {
  try {
    for (const role of roles) {
      const exists = await Role.findOne({
        name: role.name,
      });

      if (!exists) {
        await Role.create(role);
      }
    }

    console.log("✅ Roles seeded");
  } catch (error) {
    console.error(error);
  }
};

export default seedRoles;