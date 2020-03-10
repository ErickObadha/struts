// Write a function that accepts a positive number N.
// The function should console log a pyramid shape with N levels with the # character
// Make sure the pyramid has space on  both the left and right side
// --- Examples
//   pyramid(1)       
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
/*
function pyramid(n, row = 0, level = '') {
  if (row === n) return;
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}
pyramid(1000)
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = '';
    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' '
      }
    }
    console.log(level)
  }
}
pyramid(5)

// 2-0 <= 0 && 2+0 >= 0 ( )
// 2-0 <= 1 && 2+0 >= 1 ( )
// 2-0 <= 2 && 2+0 >= 2 (#)
// 2-0 <= 3 && 2+0 >= 3 ( )
// 2-0 <= 4 && 2+0 >= 4 ( )

// 2-1 <= 0 && 2+1 >= 0 ( )
// 2-1 <= 1 && 2+1 >= 1 (#)
// 2-1 <= 2 && 2+1 >= 2 (#)
// 2-1 <= 3 && 2+1 >= 3 (#)
// 2-1 <= 4 && 2+1 >= 4 ( )

// 2-2 <= 0 && 2+2 >= 0 (#)
// 2-2 <= 1 && 2+2 >= 1 (#)
// 2-2 <= 2 && 2+2 >= 2 (#)
// 2-2 <= 3 && 2+2 >= 3 (#)
// 2-2 <= 4 && 2+2 >= 4 (#)
