import 'dotenv/config';
import app from './app.js';
import { config } from './config/config.js';

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API Docs: http://localhost:${PORT}/api`);
});
