const spinnerChar = [
  '\r|.',
  '\r/..',
  '\r-...',
  '\r\\....',
  '\r|.....',
	'\r/......',
  '\r-.....',
  '\r\\....',
  '\r|...',
  '\r/..',
  '\r-.',
  '\r',
  '       \n',
];

let timer = 100;
for (let i in spinnerChar) {
	timer += 200;
	setTimeout(() => process.stdout.write(spinnerChar[i]), timer)
};