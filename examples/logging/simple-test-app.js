import LOG from './simple/logger.js';

export class TestApp {
    constructor() {
        LOG.info("Created TestApp");
    }

    doSomething(text, number) {
        LOG.info("doSomething()");
        LOG.debug("params: "+text+", "+number);
        if (number > 10) {
            LOG.error("number is too large "+number); 
        }
    }
}

export default TestApp;