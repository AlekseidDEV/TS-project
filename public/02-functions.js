"use strict";
const sumFunc = (a, b) => {
    return a + b;
};
sumFunc(5, 5);
const logger = (name, userId) => {
    console.log(`hello, my name is ${name}`);
};
logger('Alex');
const crashFunc = () => {
    throw new Error('crash');
};
crashFunc();
const sumService = (...services) => {
    const sumServices = services.reduce((current, total) => current + total, 0);
    return sumServices / 10;
};
