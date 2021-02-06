/**
 * game
 */
type Movename = 'up' | 'down' | 'left' | 'right';

type Point = {
    x: number;
    y: number;
}

const position:Point = {
    x : 0,
    y : 0,
}

/**
 * 
 * @param name only 'up' | 'down' | 'left' | 'right';
 * 
 */

function move(name:Movename):void | never{
    switch(name) {
        case 'up' : 
            position.y += 1;
            break;
        case 'down' : 
            position.y -= 1;
            break;
        case 'left' : 
            position.x -= 1;
            break;
        case 'right' : 
            position.x += 1;
            break;
        default:
            throw new Error(`unknown: ${name}`)
    }
}


move('up')
console.log(position);
move('down')
console.log(position);
move('left')
console.log(position);
move('right')
console.log(position);

