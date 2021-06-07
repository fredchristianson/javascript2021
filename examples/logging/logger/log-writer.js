import {defaultFilter} from './log-filter.js';
import {defaultFormatter} from './log-formatter.js';



export var logWriters;

export class LogWriter {
    constructor(formatter,filter) {
        this.formatter = formatter || defaultFormatter;
        this.filter = filter || defaultFilter;
        logWriters.addWriter(this);
    }

    process(logMessage) {
        if (this.filter === null || this.filter.match(logMessage)){
            const messageText = (this.formatter) ? this.formatter.format(logMessage) : logMessage.getMessageText();
            this.write(messageText,logMessage);
        }
    }

    write(messageText, logMessage) {
        throw new Error("derived class needs to implement write()");
    }
}



class LogWriters {
    constructor() {
        this.writers  = [];
    }

    addWriter(writer) {
        this.writers.push(writer);
    }

    write(logMessage) {
        if (this.writers.length>0) {
            this.writers.forEach(writer=>{
                writer.process(logMessage);
            });
        } else {
            console.log(logMessage.getParts().join(' '));
        }
    }
}

logWriters = new LogWriters();


export default logWriters;