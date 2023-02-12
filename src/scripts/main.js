import '../styles/main.css'
class Knight {

    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    possibleMoves(pos) {
        // The spaces between each possible move for a Knight
        let ones = [-1, 1];
        let twos = [-2, 2];
        
        let oneMoves = this.calculateMoves(pos, ones, twos);
        let twoMoves = this.calculateMoves(pos, twos, ones);
    
        return oneMoves.concat(twoMoves);
    }

    calculateMoves(pos, firstArr, secondArr) {
        let moves = [];
        // Calculate half of the possible moves involving -1 and 1 for x in [x, y]
        // This also accounts for the 4 possible variations of -2 and 2 in y of [x, y]
        firstArr.forEach(num => {
            for (let i = 0; i < 2; i++) {
                let x = num + pos[0];
                let y = secondArr[i] + pos[1];
    
                // Prevents Knight from moving outside of our 8x8 board
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
}
// Calculate possible moves of a position on our chessboard with a given array of 2 positions ex. [3, 3]

let test = new Knight();

console.log(test.possibleMoves([6, 3]));
