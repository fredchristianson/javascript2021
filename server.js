import path from 'path';
import server from './minimal-http-server/index.js';

server.init(path.join(path.resolve('.'), 'examples'),2021);