const GameBoard = (function () {
  const board = [[], [], []];

  const mark = (pos, value) => {};

  const check = () => {
    for (let i = 0; i < board.length; i++) {}
  };
  return { board, mark, check };
})();

utils.GameBoard;

function Player() {
  const name = name;
  const score = 0;

  return { name, score };
}
