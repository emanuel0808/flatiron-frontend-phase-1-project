// Chessboard representation
let board = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    // ... Fill other rows with pieces
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
  ];
  
  // Generate the chessboard HTML
  function generateBoard() {
    const boardElement = document.querySelector('.board');
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.id = String.fromCharCode(97 + col) + (8 - row);
        const piece = board[row][col];
        if (piece !== '') {
          const pieceElement = document.createElement('span');
          pieceElement.classList.add('piece');
          pieceElement.textContent = piece;
          square.appendChild(pieceElement);
        }
        boardElement.appendChild(square);
      }
    }
  }
  
  // Add event listener for square clicks
  function addSquareClickListeners() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
      square.addEventListener('click', handleSquareClick);
    });
  }
  
  // Handle square click event
  function handleSquareClick(event) {
    const square = event.target;
    const squareId = square.id;
    // Handle the logic for moving the piece and updating the board
  
    // Refresh the board display
    clearBoard();
    generateBoard();
    addSquareClickListeners();
  }
  
  // Clear the board display
  function clearBoard() {
    const boardElement = document.querySelector('.board');
    while (boardElement.firstChild) {
      boardElement.firstChild.remove();
    }
  }
  
  // Generate and initialize the chessboard
  generateBoard();
  addSquareClickListeners();
  