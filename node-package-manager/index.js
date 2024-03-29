// npm install lodash

const _ = require ('lodash'); 
// TODO 
// Pasang package lodash pada proyek nodejs-basic.
// Gunakan package lodash pada TODO sehingga index.js dapat dieksekusi dengan baik.
 
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
 
console.log(myOddEvenArray);
