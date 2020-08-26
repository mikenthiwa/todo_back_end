import http from 'http';
import app from "./app";
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const server = http.createServer(app());
server.listen(port, () => console.log(`Listening to port ${port}`))