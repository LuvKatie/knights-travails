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

    appendMoves(pos) {
        let moves = this.possibleMoves(pos.position);
        
        for (let i = moves.length - 1; i >= 0; i--) {
            pos[`move${i}`] = new createMoves(moves[i]);
        }
    }

    // Takes given position and appends all moves to its children
    childMoves(node) {
        console.log(node);

        for(let i = 0; i < 8; i++) {
            if(node[`move${i}`] !== undefined) {
                this.appendMoves(node[`move${i}`]);
            } else {
                return;
            }
        }
    }

    // Use this function in conjunction with appendMoves and childMoves to create 3-4 level depth of moves
    moveTree() {
        this.appendMoves(this);
        this.childMoves(this);

        // this.move0.move0 will look like
        // this.move0 = [6,3], this.move0.move0 = [5,1]
        // and appendMoves made [5,1] or this.move0.move0 discover its moves
        // childMoves gave [5,1]'s children or this.move0.move0's moves their moves as well!
        // It is definitely working review this pseudo code and come back tomorrow to push more
        this.appendMoves(this.move0.move0);
        this.childMoves(this.move0.move0);

        console.log(this.move0)

        // Figure out how to recursively call these methods to create a 4-5 depth of moves
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

let test = new Knight([7, 1], [3, 3], [7, 1]);
let test2 = new createMoves();

test.moveTree();

