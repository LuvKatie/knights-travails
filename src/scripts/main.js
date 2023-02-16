import '../styles/main.css'
class Knight {

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
            pos[`move${i}`] = new createMoves(moves[i], pos.position);

            if(pos[`move${i}`].move0 == undefined) {
                this.appendMoves(pos[`move${i}`], counter);
            }
        }
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
    

    makeTree(node, moves, counter = -1) {
        if (node == undefined) {
            return;
        }

        moves = this.possibleMoves(node.position).length;
        
        if (node.moves0 == undefined) {
            this.appendMoves(node);
        }
        
        for (let i = 0; i < moves; i++) {
            this.childMoves(node);
        }

        counter++
        return this.makeTree(node = test[`move${counter}`], moves, counter);
    }
}

class createMoves {
    constructor(position, previous, move0, move1, move2, move3, move4, move5, move6, move7) {
        this.position = position;
        this.previous= previous;
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

let test = new Knight([7, 1]);
let test2 = new Knight([3, 3]);

test.makeTree(test);
test2.makeTree(test2);
console.log(test)
console.log(test2)

