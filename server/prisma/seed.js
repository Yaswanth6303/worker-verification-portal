import prisma from '../src/utils/db.js';
import bcrypt from 'bcryptjs';

async function main() {
    console.log('🌱 Starting seed...');

    // Helper to create worker
    const createWorker = async ({ name, email, phone, service, price, city, experience, rating, reviews, image }) => {
        const password = await bcrypt.hash('password123', 10);

        try {
            const user = await prisma.user.upsert({
                where: { email },
                update: {},
                create: {
                    fullName: name,
                    email,
                    phone,
                    password,
                    role: 'WORKER',
                    city,
                    profilePicture: image,
                    isEmailVerified: true,
                    isPhoneVerified: true,
                    workerProfile: {
                        create: {
                            skills: [service], // Primary skill
                            experience: experience,
                            hourlyRate: price,
                            verificationStatus: 'VERIFIED',
                            rating: rating,
                            totalReviews: reviews,
                            isAvailable: true,
                            bio: `Expert ${service} with ${experience} of experience in ${city}.`,
                        },
                    },
                },
            });
            console.log(`✅ Created worker: ${name}`);
        } catch (e) {
            console.error(`❌ Failed to create ${name}: ${e.message}`);
        }
    };

    // Dummy Data
    const workers = [
        {
            name: 'Ramesh Kumar',
            email: 'ramesh@example.com',
            phone: '9876543210',
            service: 'plumbing',
            price: 299,
            city: 'Mumbai',
            experience: '5 Years',
            rating: 4.8,
            reviews: 124,
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            name: 'Amit Sharma',
            email: 'amit@example.com',
            phone: '9876543211',
            service: 'electrical',
            price: 199,
            city: 'Delhi',
            experience: '3 Years',
            rating: 4.6,
            reviews: 89,
            image: 'https://randomuser.me/api/portraits/men/45.jpg'
        },
        {
            name: 'Sunita Devi',
            email: 'sunita@example.com',
            phone: '9876543212',
            service: 'cleaning',
            price: 499,
            city: 'Bangalore',
            experience: '4 Years',
            rating: 4.9,
            reviews: 210,
            image: 'https://randomuser.me/api/portraits/women/65.jpg'
        },
        {
            name: 'Vikram Singh',
            email: 'vikram@example.com',
            phone: '9876543213',
            service: 'painting',
            price: 5,
            city: 'Hyderabad',
            experience: '10 Years',
            rating: 4.7,
            reviews: 156,
            image: 'https://randomuser.me/api/portraits/men/22.jpg'
        },
        {
            name: 'Priya Patel',
            email: 'priya@example.com',
            phone: '9876543214',
            service: 'cleaning',
            price: 350,
            city: 'Mumbai',
            experience: '2 Years',
            rating: 4.5,
            reviews: 45,
            image: 'https://randomuser.me/api/portraits/women/42.jpg'
        },
        {
            name: 'Rahul Verma',
            email: 'rahul@example.com',
            phone: '9876543215',
            service: 'plumbing',
            price: 250,
            city: 'Pune',
            experience: '4 Years',
            rating: 4.3,
            reviews: 28,
            image: 'https://randomuser.me/api/portraits/men/15.jpg'
        }
    ];

    for (const worker of workers) {
        await createWorker(worker);
    }

    console.log('✅ Seeding completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
