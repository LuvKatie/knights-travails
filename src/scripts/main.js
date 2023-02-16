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

    appendMoves(pos, counter = 0) {
        if (counter >= 3) {
            return;
        }

        let moves = this.possibleMoves(pos.position);

        counter++

        for (let i = 0; i < moves.length; i++) {
            pos[`move${i}`] = new createMoves(moves[i]);

            if(pos[`move${i}`].move0 == undefined) {
                this.appendMoves(pos[`move${i}`], counter);
            }
        }

        // This is the last of the line and pos[`move${i}`] is basically the end of our tree
        // We need to find a way to continue this side of things to add onto our tree
    }

    // Takes given position and appends all moves to its children
    childMoves(node) {
        for(let i = 0; i < 8; i++) {
            if(node[`move${i}`] !== undefined) {
                this.appendMoves(node[`move${i}`]);
            } else {
                return;
            }
        }

    }
    
    // Use this function in conjunction with appendMoves and childMoves to create 3-4 level depth of moves
    makeTree(node, depth, counter = -1, moves) {
        

        moves = this.possibleMoves(node.position).length;
        
        // Moves become reassigned a length value for our for loop to
        // discover the correct amount of moves within our ' node ' variable
        if (counter < depth) {
            this.appendMoves(node);
            this.childMoves(node);
        }
        
        for (let i = 0; i < moves; i++) {
            this.childMoves(node[`move${i}`]);
        }

        counter++

        if (counter < depth) {
            // Recursively calls on each move of our initial start position.
            return this.makeTree(node = test[`move${counter}`], depth, counter, moves);
        }
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

let depth = test.possibleMoves(test.position).length;
test.makeTree(test, depth);
console.log(test)

