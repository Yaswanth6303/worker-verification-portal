
import prisma from './src/utils/db.js';

async function main() {
    try {
        const workers = await prisma.workerProfile.findMany({
            select: {
                id: true,
                skills: true,
                user: { select: { fullName: true } }
            }
        });
        console.log('Worker Skills in DB:');
        console.log(JSON.stringify(workers, null, 2));
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
