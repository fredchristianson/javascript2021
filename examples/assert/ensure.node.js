import ensure from './ensure.js';

function log(message){
    console.log(message);
}


// default ensure mode acts like assert.
// set to demo mode to allow defaultValue returns
ensure.setPrototypeMode(true);

const output = document.getElementById('output');

function addOutput(message){
    const child = document.createElement('div');
    child.innerText = message;
    output.appendChild(child);
}

function testEnsure(testFunction,message) {
    try {
        const result = testFunction();
        addOutput(`success: ${message}=${result}`);
    } catch(err) {
        addOutput(`failed: ${message}`);
    }
};

var notDefined;

testEnsure(()=> ensure.equal(1,1), "equal - expect 1");
testEnsure(()=> ensure.equal(1,2,3), "equal - expect 3");

testEnsure(()=> ensure.notEqual(1,2,4), "notEqual - expect 1");
testEnsure(()=> ensure.notEqual(1,1,5), "notEqual - expect 5");

testEnsure(()=> ensure.null(null), "null - expect null");
testEnsure(()=> ensure.null(notDefined), "null - expect undefined");
testEnsure(()=> ensure.null(1), "null - expect null");

testEnsure(()=> ensure.notNull(null,6), "notNull - expect 6");
testEnsure(()=> ensure.notNull(notDefined,7), "null - expect 7");
testEnsure(()=> ensure.notNull(1,8), "null - expect 1");

testEnsure(()=> ensure.range(50,1,100,9),"range - expect 50");
testEnsure(()=> ensure.range(1,1,100,10),"range min val - expect 1");
testEnsure(()=> ensure.range(100,1,100,11),"range max val - expect 100");
testEnsure(()=> ensure.range(-1,1,100,12),"range below min - expect 12");
testEnsure(()=> ensure.range(101,1,100,13),"range above max - expect 13");

testEnsure(()=> ensure.notRange(50,1,100,114),"range - expect 114");
testEnsure(()=> ensure.notRange(1,1,100,115),"range min val - expect 115");
testEnsure(()=> ensure.notRange(100,1,100,116),"range max val - expect 116");
testEnsure(()=> ensure.notRange(-1,1,100,117),"range below min - expect -1");
testEnsure(()=> ensure.notRange(101,1,100,118),"range above max - expect 101");
