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

    // stopper parameter allows us to control the depth
    appendMoves(pos, stopper, depth = 0) {
        if (depth >= 6 || depth == stopper) {
            return;
        }

        let moves = this.possibleMoves(pos.position);

        depth++

        for (let i = 0; i < moves.length; i++) {
            pos[`move${i}`] = new createMoves(moves[i], pos);

            if(pos[`move${i}`].move0 == undefined) {
                this.appendMoves(pos[`move${i}`], stopper, depth);
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

    findShortest(start, end, depth, counter = 0, stepCompare) {
        if (counter >= depth) {
            return;
        }
        
        
        let moveString = this.possibleMoves(end.position).join(' ');
        let newMoves = moveString.split(" ");
        if (newMoves.includes(start.position[0] + ',' + start.position[1])) {
            console.log(start.position[0] + ',' + start.position[1]);
            stepCompare = this.checkSteps(start);
            if (stepCompare !== undefined) {
                console.log("Step 1: ", stepCompare)
                console.log("Step 2: ", this.checkSteps(start))
            }
        }

        
        counter++
        
        for (let i = 0; i < 8; i++) {
            if (start[`move${i}`] !== undefined) {
                this.findShortest(start[`move${i}`], end, depth, counter, stepCompare);
            } else {
                return;
            }
        }
    }

    checkSteps(start, end, stepArr = []) {
        if (start.previous == null || start.previous == undefined) {
            return stepArr;
        }

        stepArr.push(start.position);
        
        return this.checkSteps(start = start.previous, end, stepArr)
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
let test2 = new Knight([1, 2]);

test.makeTree(test);
test2.appendMoves(test2, 1);

console.log(test)
console.log(test2.possibleMoves(test2.position));
test2.findShortest(test, test2, 5)

