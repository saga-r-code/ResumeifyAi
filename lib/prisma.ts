import { PrismaClient } from "@prisma/client";

// Singleton to ensure that only one instance of Prisma Client is created
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Use globalThis to store the Prisma Client instance
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

// Create the Prisma Client instance
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

// In development mode, assign the Prisma Client instance to globalThis to make it accessible
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

