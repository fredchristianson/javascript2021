export class SimpleLogger {

    constructor(level = null) {
        this.level = level ??  SimpleLogger.DEBUG;
    }

    setLevel(level) {
        this.level = level;
    }
    write(level,message) {
        if (level > this.level) {
            return;
        }
        var messageClass = 'log-message';
        
        if (level > SimpleLogger.INFO) {
            console.log(message);
            messageClass += ' debug';
        } else if (level > SimpleLogger.WARN) {
            console.log(message);
            messageClass += ' info';
        } else if (level > SimpleLogger.ERROR) {
            console.warn(message);
            messageClass += ' warn';
        } else {
            console.error(message);
            messageClass += ' error';
        }
        const logElement = document.getElementById("log-messages");
        if (logElement) {
            const messageElement = document.createElement("div");
            messageElement.setAttribute("class",messageClass);
            messageElement.innerHTML = message;
            logElement.appendChild(messageElement);
        }
    }

    debug(message) {
        this.write(SimpleLogger.DEBUG,message);
    }
    info(message) {
        this.write(SimpleLogger.INFO,message);
    }
    warn(message) {
        this.write(SimpleLogger.WARN,message);
    }
    error(message) {
        this.write(SimpleLogger.ERROR,message);
    }

}

SimpleLogger.DEBUG=100;
SimpleLogger.INFO=80;
SimpleLogger.WARN=60;
SimpleLogger.ERROR=40;


export default new SimpleLogger();