// function steps(n, i = 1) {
//   if (i > n) return;
//   console.log('#'.repeat(i) + ' '.repeat(n - i));
//   steps(n, i + 1);
// }
// (steps(20))

function steps(n) {
  let step = ''
  for (i = 0; i < n; i++) {
    console.log(step+= 'ace')
  }
}
steps(100)

