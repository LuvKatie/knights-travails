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
            let x = num + pos[0];
            let y = twos[i] + pos[1];

            if(x > 7 || y > 7) {
                return;
            } else {
                let newMove = [x, y];
                moves.push(newMove);
            }
        }
    });

    twos.forEach(num => {
        for (let i = 0; i < 2; i++) {
            let x = num + pos[0];
            let y = ones[i] + pos[1];

            if(x > 7 || y > 7) {
                return;
            } else {
                let newMove = [x, y];
                moves.push(newMove);
            }
        }
    });

    return moves;
}

let test = possibleMoves([6, 3]);

console.log(test)
