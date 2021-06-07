import {AssertionError, default as assert} from './assert.js';

/*
* Ensure can be configured to work like Assert, or to return default values when a test failes.
* The default is to throw exceptions when an assertion fails. 
* Use setPrototypeMode(true) to enable default values rather than exceptions.
*/

export class EnsureError extends AssertionError {
    constructor(message) {
        super(message);
    }
}

export class Ensure {
    constructor() {
        this.prototypeMode = false;
    }

    setPrototypeMode(isDemo = true) {
        this.prototypeMode = isDemo;
    }


    equal(val1,val2,defaultValue, message=null) {
        try {
            assert.equal(val1,val2,message);
            return val1;
        } catch(err) {
            if (this.prototypeMode) {
                return defaultValue;
            }
            throw err;
        }
        
    }

    notEqual(val1,val2,defaultValue,message=null) {
        try {
            assert.notEqual(val1,val2,message);
            return val1;
        } catch(err) {
            if (this.prototypeMode) {
                return defaultValue;
            }
            throw err;
        }
    }

    null(val1,defaultValue=null,message=null) {
        try {
            assert.null(val1,message);
            return val1;
        } catch(err) {
            if (this.prototypeMode) {
                return defaultValue;
            }
            throw err;
        }

    }

    notNull(val1,defaultValue,message=null) {
        try {
            assert.notNull(val1,message);
            return val1;
        } catch(err) {
            if (this.prototypeMode) {
                return defaultValue;
            }
            throw err;
        }
    }

    range(val,minValue,maxValue,defaultValue,message) {
        try {
            assert.range(val,minValue,maxValue,message);
            return val;
        } catch(err) {
            if (this.prototypeMode) {
                return defaultValue;
            }
            throw err;
        }
    }

    notRange(val,minValue,maxValue,defaultValue,message) {
        try {
            assert.notRange(val,minValue,maxValue,message);
            return val;
        } catch(err) {
            if (this.prototypeMode) {
                return defaultValue;
            }
            throw err;
        }
    }

}

export default new Ensure();