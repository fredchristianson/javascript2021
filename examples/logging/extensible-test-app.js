import Logger from './logger/logger.js';
import ServiceA from './service-a.js';
import ServiceB from './service-b.js';

const LOG = new Logger("TestApp");
export class TestApp {
    constructor() {
        LOG.info("Created TestApp");
        this.serviceA = new ServiceA();
        this.serviceB = new ServiceB();
    }

    doSomething(text, number) {
        LOG.info("doSomething()");
        LOG.debug("params: "+text+", "+number);
        if (number > 10) {
            LOG.error("number is too large "+number); 
        } else {
            this.serviceA.handleSomething(text,number);
            this.serviceB.handleSomething(text,number);
        }
    }
}

export default TestApp;