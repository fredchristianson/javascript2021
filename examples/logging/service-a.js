import Logger from './logger/logger.js';

const LOG = new Logger("ServiceA");
export class ServiceA {
    constructor() {
        LOG.info("Created TestApp");
    }

    handleSomething(text, number) {
        LOG.info("doSomething()");
        LOG.info("params: ",text,number);
        if (number > 10) {
            LOG.error("number is too large "+number); 
        } 
    }
}

export default ServiceA;