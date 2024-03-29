const initialMemoryUsage = process.memoryUsage().heapUsed; 
// TODO 1 Isi dengan nilai heapUsed dari instance process.memoryUsage.

const yourName = "Anthony Sigid"; 
// TODO 2 Isi dengan nilai index ke-2 dari process.argv.

const environment = process.env.NODE_ENV; 
// TODO 3 Isi dengan nilai NODE_ENV dari process.env.
 
for(let i = 0; i <= 10000; i++) {
    // Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = process.memoryUsage().heapUsed; 
// TODO 4 Isi dengan nilai heapUsed dari instance process.memoryUsage.
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

// jalankan dengan SET NODE_ENV=development && node ./process-object/index.js <Nama Anda> 