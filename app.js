let playerTurn = 1;

const GameBoard = (function () {
  const board = [[], [], []];

  /* const checkWin = (token) => {
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

  const gameFlow = () => {
    const player1 = Player('x', 'p1', board);
    const player2 = Player('o', 'p2', board);
    document.querySelectorAll('.cell').forEach((cell) => {
      cell.addEventListener('click', () => {
        if (playerTurn === 1 && cell.innerHTML === '') {
          player1.mark(cell.id);
          if (checkWin(player1.token)) {
            console.log(`${player1.name} wins`);
          }
          playerTurn = 2;
        } else if (playerTurn === 2 && cell.innerHTML === '') {
          player2.mark(cell.id);
          if (checkWin(player2.token)) {
            console.log(`${player2.name} wins`);
          }
          playerTurn = 1;
        } else {
          console.log('cell is already marked');
        }
      });
    });
  }; */
  return { checkWin, gameFlow };
})();

GameBoard.gameFlow();

function Player(token, name, board) {
  const score = 0;

  function mark(cell) {
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
  }

  return { name, score, mark, token };
}
