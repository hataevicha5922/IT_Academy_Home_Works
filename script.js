// const str = '1801';
// const regexp = /19\d\d|20\d\d|2100/g;
// console.log(regexp.test(str));

// const str = '12:65';
// const regexp = /^([01]\d|2[0-3]):[0-5]\d$/g;
// console.log(regexp.test(str));

// const str = 'Hello world';
// const regexp = /\W*\w*(\w)\1\w*\W*/g;
// console.log(str.replace(regexp, ''));

const str = 'dsf xxx xxx sd';
const regexp = /\b(\w+)\s+\1/g;
console.log(str.replace(regexp, '$1'));
