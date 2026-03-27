import 'dotenv/config';
import server from './src/server';

const PORT = process.env.PORT;

if (!PORT) {
  throw new Error("PORT tanımlı değil");
}

server(Number(PORT))