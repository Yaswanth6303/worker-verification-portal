import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import authRoutes from './routes/auth.routes.js';
import workerRoutes from './routes/worker.routes.js';
import bookingRoutes from './routes/booking.routes.js';

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: '*', // Allow all origins for testing
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
    },
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/workers', workerRoutes);
app.use('/api/bookings', bookingRoutes);

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
