import type { Prisma } from "@prisma/client";
import PrismaClientPkg from "@prisma/client";

const PrismaClient = PrismaClientPkg.PrismaClient;

export const prisma = new PrismaClient();
