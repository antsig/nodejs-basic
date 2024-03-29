/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */
const fs = require('fs');

const readableStream = fs.createReadStream('./stream/input.txt', {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream('./stream/output.txt');

readableStream.on('data', (chunk) => {
    try {
        writableStream.write(chunk + '\n'); // Menambahkan '\n' setelah setiap bagian teks
    } catch(error) {
        console.error('Terjadi kesalahan saat menulis data:', error);
    }
});

readableStream.on('end', () => {
    console.log('Pemindahan data selesai.');
    writableStream.end(); // Akhiri writable stream setelah semua data ditulis
});

writableStream.on('finish', () => {
    console.log('Penulisan data selesai.');
});

writableStream.on('error', (error) => {
    console.error('Terjadi kesalahan saat menulis data:', error);
});
