import assert from './assert.js';

function log(message){
    console.log(message);
}

function testAssertGood(testFunction,message) {
    try {
        testFunction();
        log(`success: ${message}`);
    } catch(err) {
        log(`failed: ${message}`);
    }
};

function testAssertBad(testFunction,message='') {
    try {
        testFunction();
        log(`failed: ${message}`);
    } catch(err) {
        log(`success: ${message} - ${err}`);
    }
};

var notDefined;

testAssertGood(()=> assert.equal(1,1), "equal - expect OK");
testAssertBad(()=> assert.equal(1,2), "equal - expect exception");

testAssertGood(()=> assert.notEqual(1,2), "notEqual - expect OK");
testAssertBad(()=> assert.notEqual(1,1), "notEqual - expect exception");

testAssertGood(()=> assert.null(null), "null - expect OK");
testAssertGood(()=> assert.null(notDefined), "null - expect OK");
testAssertBad(()=> assert.null(1), "null - expect exception");

testAssertBad(()=> assert.notNull(null), "notNull - expect exception");
testAssertBad(()=> assert.notNull(notDefined), "null - expect exception");
testAssertGood(()=> assert.notNull(1), "null - expect exception");

testAssertGood(()=> assert.range(50,1,100),"range - expect OK");
testAssertGood(()=> assert.range(1,1,100),"range min val - expect OK");
testAssertGood(()=> assert.range(100,1,100),"range max val - expect OK");
testAssertBad(()=> assert.range(-1,1,100),"range below min - expect exception");
testAssertBad(()=> assert.range(101,1,100),"range above max - expect exception");

testAssertBad(()=> assert.notRange(50,1,100),"range - expect exception");
testAssertBad(()=> assert.notRange(1,1,100),"range min val - expect exception");
testAssertBad(()=> assert.notRange(100,1,100),"range max val - expect exception");
testAssertGood(()=> assert.notRange(-1,1,100),"range below min - expect OK");
testAssertGood(()=> assert.notRange(101,1,100),"range above max - expect OK");

testAssertGood(() => assert.equal("abc","abc"),"equal strings");

const obj1 = {
    "a":1,
    "b":2
};

const obj2 = obj1;

testAssertGood(() => assert.equal(obj1,obj2),"equal objects");

testAssertBad(()=>{
    assert.equal(1,2,"expected error - custom message for assert.equal(1,2) failed.");
});