//import fs from 'fs';
import fs from 'fs/promises';
// readfile() - async / callback version
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// // readFileSync() - synchronous version
// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data);

//  readfile() Promise version .then();
// fs.readFile('./test.txt', 'utf-8')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf-8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Hellow I am writing to this file');
    console.log('file written to...');
  } catch (error) {
    console.log(error);
  }
};

const appendFile = async () => {
  try {
    await fs.appendFile('./test.txt', '\nThis is appended text');
    console.log('file appended to...');
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
