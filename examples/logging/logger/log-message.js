export const LOG_LEVEL = {
    DEBUG: 100,
    INFO: 80,
    WARN: 60,
    ERROR: 40
};

export class LogMessage {

    constructor(moduleName, level, parts) {
        this.moduleName = moduleName;
        this.level = level;
        this.parts = parts;
        this.time = new Date();
    }

    getLevel() {
        return this.level;
    }

    getModuleName() {
        return this.moduleName;
    }

    getParts() {
        return this.parts;
    }

    // if the writer doesn't have a formatter, use a simple format
    getMessageText() {
        return this.parts.join(' ');
    }

    getLogLevelDescription() {
        if (this.level < LOG_LEVEL.WARN){
            return "ERROR";
        } else if (this.level < LOG_LEVEL.INFO) {
            return "WARN";
        } else if (this.level < LOG_LEVEL.DEBUG) {
            return "INFO";
        } else {
            return "DEBUG";
        }
    }
}



export default LogMessage;