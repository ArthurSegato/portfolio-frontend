import { PrismaClient } from "@prisma/client/edge";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();

  return await prisma.project.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      card: true,
    },
  });
});
