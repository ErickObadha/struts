function matrix(n) {
  const results = [];

for (let i = 0; i < n; i++) {
    results.push([]);
  }
  
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
      // results[1][0] = 12
      // results[1][1] = 13
      // results[1][2] = 14
    }
    startRow++;
    // results[0][0] = 1
    // results[0][1] = 2
    // results[0][2] = 3
    // results[0][3] = 4

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    // results[1][3] = 5
    // results[2][3] = 6
    // results[3][3] = 7

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    // results[3][2] = 8
    // results[3][1] = 9
    // results[3][0] = 10

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
    // results[2][0] = 11
    // results[1][0] = 12

    // results[0][2] = 15
    // results[0][3] = 16
    // results[0][4] = 17

  }
return results;
}
console.log(matrix(100))

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function generateSpiralMatrix(row, col) {
  let rows = row;
  let cols = col;

  let matrix = [];
  for (let row = 0; row < rows; row++) {
      matrix[row] = [];
      for (let col = 0; col < cols; col++) {
          matrix[row][col] = 0;
      }
  }

  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;

  let index = 1;
  let direction = 0;
  while (top <= bottom && left <= right) {
      switch (direction % 4) {
          case 0:
              for (let col = left; col <= right; col++) {
                  matrix[top][col] = index++;
              }
              top++;
              direction++;
              break;
          case 1:
              for (let row = top; row <= bottom; row++) {
                  matrix[row][right] = index++;
              }
              right--;
              direction++;
              break;
          case 2:
              for (let col = right; col >= left; col--) {
                  matrix[bottom][col] = index++;
              }
              bottom--;
              direction++;
              break;
          default:
              for (let row = bottom; row >= top; row--) {
                  matrix[row][left] = index++;
              }
              left++;
              direction++;
              break;
      }
  }

  console.log(matrix.map(r => r.join(' ')).join('\n'));
}
generateSpiralMatrix(3,3)

//////////////////////////////////////////////////////////////////////////////////////////////////////
