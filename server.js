import path from 'path';
import server from './http-server/index.js';

server.init(path.join(path.resolve('.'), 'examples'),2021);