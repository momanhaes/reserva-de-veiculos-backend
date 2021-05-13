import * as http from 'http';
import { app } from './app';

const server = http.createServer(app);
server.listen(3000, () => { console.log(`🚀 Server ready at http://localhost:3000`) });

export default server;