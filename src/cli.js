import readLineSync from 'readline-sync';

export default (setUserName) => {
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};
