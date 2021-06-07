import {LogWriter} from './log-writer.js';
import {LOG_LEVEL, LogMessage} from './log-message.js';

export class ConsoleLogWriter extends LogWriter {
    constructor(formatter=null,filter=null) {
        super(formatter,filter);
    }

    write(text,logMessage) {
        const level = logMessage.getLevel();
        if (level > LOG_LEVEL.INFO) {
            console.log(text);
        } else if (level > LOG_LEVEL.WARN) {
            console.log(text);
        } else if (level > LOG_LEVEL.ERROR) {
            console.warn(text);
        } else {
            console.error(text);
        }

    }
}

export default ConsoleLogWriter;