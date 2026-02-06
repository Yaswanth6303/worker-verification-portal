import { PrismaClient } from '../../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { config } from './config.js';

const adapter = new PrismaPg({
  connectionString: config.databaseUrl,
});

const prismaClientSingleton = () => {
  return new PrismaClient({
    adapter,
  });
};

// Reuse Prisma client in development to avoid exhausting connections
const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}
