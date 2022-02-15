const spin = ['|','/','-','\\','|','/','-','\\','|'];
let delay = 100;
for (const line of spin) {
  setTimeout(() => {
    process.stdout.write('\r' + line);

  }, delay += 200);
}