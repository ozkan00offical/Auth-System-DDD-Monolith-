import type { CorsOptions } from 'cors';

const AllowedHeaders = [
  'Content-Type',
  'Authorization'
];

const AllowedOrigins = [
  'http://localhost:3000'
];

const corsOptions: CorsOptions = {
  origin: AllowedOrigins,
  allowedHeaders: AllowedHeaders,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true
};

export default corsOptions;
