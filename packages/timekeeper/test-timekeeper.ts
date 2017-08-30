import * as timekeeper from 'timekeeper';

const time = new Date(1330688329321);

timekeeper.freeze(time);
console.log(timekeeper.isKeepingTime(), 'should be true');

timekeeper.reset();
console.log(timekeeper.isKeepingTime(), 'should be false');
