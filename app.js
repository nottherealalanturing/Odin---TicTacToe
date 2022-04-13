const GameBoard = (function () {
  const board = [[], [], []];

  const mark = (cell, token) => {
    switch (cell) {
      case 'cell-1':
        if (board[0][0] !== null) {
          board[0][0] = token;
          document.getElementById(
            cell
          ).innerHTML = `<div class=${token}></div>`;
        }
        break;
      case 'cell-2':
        if (board[0][1] !== null) {
          board[0][1] = token;
          document.getElementById(
            cell
          ).innerHTML = `<div class=${token}></div>`;
        }
        break;
      case 'cell-3':
        if (board[0][2] !== null) {
          board[0][2] = token;
          document.getElementById(
            cell
          ).innerHTML = `<div class=${token}></div>`;
        }
        break;
      case 'cell-4':
        if (board[1][0] !== null) {
          board[1][0] = token;
          document.getElementById(
            cell
          ).innerHTML = `<div class=${token}></div>`;
        }
        break;
      case 'cell-5':
        if (board[1][1] !== null) {
          board[1][1] = token;
          document.getElementById(
            cell
          ).innerHTML = `<div class=${token}></div>`;
        }
        break;
      case 'cell-6':
        if (board[1][2] !== null) {
          board[1][2] = token;
          document.getElementById(
            cell
          ).innerHTML = `<div class=${token}></div>`;
        }
        break;
      case 'cell-7':
        if (board[2][0] !== null) {
          board[2][0] = token;
          document.getElementById(
            cell
          ).innerHTML = `<div class=${token}></div>`;
        }
        break;
      case 'cell-8':
        if (board[2][1] !== null) {
          board[2][1] = token;
          document.getElementById(
            cell
          ).innerHTML = `<div class=${token}></div>`;
        }
        break;
      case 'cell-9':
        if (board[2][2] !== null) {
          board[2][2] = token;
          document.getElementById(
            cell
          ).innerHTML = `<div class=${token}></div>`;
        }
        break;
      default:
        break;
    }
  };

  const checkWin = (token) => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === token &&
        board[i][1] === token &&
        board[i][2] === token
      ) {
        return true;
      }
    }

    for (let j = 0; j < 3; j++) {
      if (
        board[0][j] === token &&
        board[1][j] === token &&
        board[2][j] === token
      ) {
        return true;
      }
    }

    if (
      board[0][0] === token &&
      board[1][1] === token &&
      board[2][2] === token
    ) {
      return true;
    }

    if (
      board[0][2] === token &&
      board[1][1] === token &&
      board[2][0] === token
    ) {
      return true;
    }
    return false;
  };

  const initBoard = () => {
    document.querySelectorAll('.cell').forEach((cell) => {
      cell.addEventListener('click', () => {
        mark(cell.id, 'x');
      });
    });
  };
  return { board, mark, checkWin, initBoard };
})();

GameBoard.initBoard();

function Player() {
  const name = name;
  const score = 0;

  return { name, score };
}
