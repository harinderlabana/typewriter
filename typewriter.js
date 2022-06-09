//input
const sentence = 'hello there from lighthouse labs';

//delay count increase by 50ms each iteration of the loop
let delay = 0;
//scan through the sentence and print each character with a delay that increase by 50ms for each letter
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, (delay += 50));
}
//when all letters are printed start a new line
setTimeout(() => {
  process.stdout.write('\n');
}, delay);
