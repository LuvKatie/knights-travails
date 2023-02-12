import '../styles/main.css'
class Knight {

    constructor(start, end, position, move0, move1, move2, move3, move4, move5, move6, move7) {
        this.start = start;
        this.end = end;
        this.position = position;
        this.move0 = move0;
        this.move1 = move1;
        this.move2 = move2;
        this.move3 = move3;
        this.move4 = move4;
        this.move5 = move5;
        this.move6 = move6;
        this.move7 = move7;
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

                console.log(x)
                console.log(y)
    
                // Prevents Knight from moving outside of our 8x8 board
                if(x > 7 || y > 7 || x < 0 || y < 0) {
                    continue;
                } else {
                    let newMove = [x, y];
                    moves.push(newMove);
                }
            }
        });

        return moves;
    }

    appendMoves(pos, node = this, counter = 0) {
        console.log(test);
        if(counter >= 3 || pos == undefined) {
            return;
        }

        let moves = this.possibleMoves(pos);

        for (let i = 0; i < moves.length; i++) {
            node[`move${i}`] = new createMoves(moves[i]);
        }

        counter++
        console.log(pos)
        console.log(node)

        return this.appendMoves(pos = node[`move${counter + 1}`].position, node = node[`move${counter + 1}`], counter);

    }
}

class createMoves {
    constructor(position, move0, move1, move2, move3, move4, move5, move6, move7) {
        this.position = position;
        this.move0 = move0;
        this.move1 = move1;
        this.move2 = move2;
        this.move3 = move3;
        this.move4 = move4;
        this.move5 = move5;
        this.move6 = move6;
        this.move7 = move7;
    }
}
// Calculate possible moves of a position on our chessboard with a given array of 2 positions ex. [3, 3]

let test = new Knight([0, 0], [3, 3], [0, 0]);
let test2 = new createMoves();

test.appendMoves([7, 1]);
console.log(test);
