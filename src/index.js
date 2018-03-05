// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        enumerable: true,
        configurable: true,
        writable: true
    })
    return propertyName;
};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        enumerable: false,
        configurable: true,
        get() {return propertyName;},
        set(newValue) {propertyName = newValue;} 
    })
    return propertyName;
};
const createProtoMagicObject = () => {
    const MagicObject = class {};
    Object.setPrototypeOf(MagicObject, MagicObject.prototype);
    return MagicObject;
};
const incrementor = () => {
    if (!this.count) this.count = 0;
    this.count++;
    incrementor.valueOf = () => this.count;
    return incrementor;
};
const asyncIncrementor = () => {
    if (!this.asyncCount) this.asyncCount = 0;
    this.asyncCount++;
    return new Promise(resolve => resolve(this.asyncCount));
};
const createIncrementer = function*() {
    let count = 0;
    while (true) {
    yield ++count;
    }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param);
        }, 1000);
        setTimeout(() => {
            reject(param);
        }, 2000);
    });
};
const getDeepPropertiesCount = (obj, count = 0) => {
    for (let key in obj) {
        count = 1 + getDeepPropertiesCount(obj[key], count);
    }
    return count;
};
const createSerializedObject = () => {
    const obj = new Number();
    return obj;
};
const toBuffer = () => {
};
const sortByProto = (arr) => {
    const sortArr = arr.sort((a, b) => a.__proto__ - b.__proto__);
    return sortArr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;