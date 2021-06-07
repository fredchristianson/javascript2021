import {logWriters} from './log-writer.js';
import { LOG_LEVEL as IMPORTED_LOG_LEVEL,LogMessage} from './log-message.js';

export  const LOG_LEVEL = IMPORTED_LOG_LEVEL;

export class Logger {

    constructor(moduleName, level = null) {
        this.moduleName = moduleName;
        this.level = level ??  LOG_LEVEL.DEBUG;
    }

    setLevel(level) {
        this.level = level;
    }
    write(level,message) {
        if (level > this.level) {
            return;
        }
        const logMessage = new LogMessage(this.moduleName,level,message);
       logWriters.write(logMessage);
    }

    debug(...message) {
        this.write(LOG_LEVEL.DEBUG,message);
    }
    info(...message) {
        this.write(LOG_LEVEL.INFO,message);
    }
    warn(...message) {
        this.write(LOG_LEVEL.WARN,message);
    }
    error(...message) {
        this.write(LOG_LEVEL.ERROR,message);
    }

}

Logger.create=function(moduleName,level=null) {
    return new Logger(moduleName,level);
}

export default Logger;