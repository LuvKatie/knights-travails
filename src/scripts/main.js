import '../styles/main.css'

// Calculate possible moves of a position on our chessboard with a given array of 2 positions ex. [3, 3]
function possibleMoves(pos) {
    // The spaces between each possible move for a Knight
    let ones = [-1, 1];
    let twos = [-2, 2];
    let moves = [];
    
    // Calculate half of the possible moves involving -1 and 1 for x in [x, y]
    // This also accounts for the 4 possible variations of -2 and 2 in y of [x, y]
    ones.forEach(num => {
        for (let i = 0; i < 2; i++) {
            let newMove = [num + pos[0], twos[i] + pos[1]];
            moves.push(newMove);
        }
    });
    // Calculate remaining half of moves involving -2 and 2 for x in [x, y]
    // plus -1 and 1 in y of [x, y]
    twos.forEach(num => {
        for (let i = 0; i < 2; i++) {
            let newMove = [num + pos[0], ones[i] + pos[1]];
            moves.push(newMove);
        }
    });

    return moves;
}

let test = possibleMoves([3, 3]);

console.log(test)
