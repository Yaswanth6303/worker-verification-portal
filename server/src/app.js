import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import authRoutes from './routes/auth.routes.js';
import workerRoutes from './routes/worker.routes.js';
import bookingRoutes from './routes/booking.routes.js';
import reviewRoutes from './routes/review.routes.js';

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: true, // Allow all origins for local development
    credentials: true,
  }),
);

app.use(express.json({ limit: '10mb' }));

app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/api', (req, res) => {
  res.json({
    message: 'SkillVerify API is running',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      workers: '/api/workers',
      bookings: '/api/bookings',
      reviews: '/api/reviews',
    },
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/workers', workerRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/reviews', reviewRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
  });
});

export default app;
