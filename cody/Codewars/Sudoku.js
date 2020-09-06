let validSolution = (board) => {
    const isSudokuArrayValid = (array) => {
      const row = array.slice(0).sort().join(''),
            passingRow = [1,2,3,4,5,6,7,8,9].join('');
  
      return (row === passingRow);
    };
  
    const testRows = (board) => board.every(row => isSudokuArrayValid(row));
  
    const testColumns = (board) => {
      const gatherColumn = (board, columnNum) => board.reduce((total, row) => [...total, row[columnNum]], []);
      return [0,1,2,3,4,5,6,7,8].every(i => isSudokuArrayValid(gatherColumn(board, i)));
    }
  
    const testSquares = (board) => {
      const getSquareIndexes = (num) => {
        if (num === 1) {
          return [0,1,2];
        } else if (num === 2) {
          return [3,4,5];
        } else {
          return [6,7,8];
        }
      }
  
      const getSquareValues = (x, y, board) => {
        let values = [],
            rows = getSquareIndexes(x),
            columns = getSquareIndexes(y);
  
        rows.forEach(row => {
          columns.forEach(column => {
            values.push(board[row][column]);
          });
        });
  
        return values;
      };
  
      const squareSections = [1,2,3];
      return squareSections.every(squareX => {
        return squareSections.every(squareY => isSudokuArrayValid(getSquareValues(squareX, squareY, board)));
      });
    };
  
    return (testRows(board) && testColumns(board) && testSquares(board)) ? true : false;
  }
  