// creating a buffer
const buffer= Buffer.alloc(4);
console.log(buffer);

// writing data to buffer
buffer.write('Hello','utf8');
console.log(buffer);

//reading data from buffer
const data= buffer.toString('utf8');
console.log(data); //output: hell (becoz memory allocation is 4)

//concatenating buffer
const buffer1 = Buffer.from('Hello','utf-8');
const buffer2 = Buffer.from(' World','utf-8');

const concatenatedBuffer = Buffer.concat([buffer1,buffer2]);
console.log(concatenatedBuffer.toString('utf-8'));
