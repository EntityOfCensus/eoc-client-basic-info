const { PrismaClient } = require('@prisma/client');

async function seed() {
  const prisma = new PrismaClient();

  try {
    const existingClient = await prisma.clientProfile.findUnique({ where: { id: 1 } });

    if (!existingClient) {
      const newClient = await prisma.clientProfile.create({
        data: {
          id: 1,
          name: "John",
          email: "john@example.com",
          address: "123 Meow St."
        }
      });
      console.log("Seed data added:", newClient);
    } else {
      console.log("Seed data already exists:", existingClient);
    }
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
