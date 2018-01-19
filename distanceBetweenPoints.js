// function Point(x, y) {
//     this.x = x
//     this.y = y
// }

// Point.prototype.moveX = function moveX(x) {
//     this.x += x
// }

// Point.prototype.moveY = function moveY(y) {
//     this.y += y
// }

// Point.prototype.distance = function distance(p) {
//     const x = this.x - p.x
//     const y = this.y - p.y

//     return Math.sqrt( x * x + y * y)
// }

const Point = {
    init: function(x, y) {
        this.x = x
        this.y = y
    },
    moveX: function moveX(x) {
        this.x += x
    },
    moveY: function moveY(y) {
        this.y += y
    },
    distance: function distance(p) {
        const x = this.x - p.x
        const y = this.y - p.y

        return Math.sqrt( x * x + y * y)
    }
}

//const p1 = new Point(0, 4)
const p1 = Object.create(Point)
p1.init(0, 4)

//const p2 = new Point(3, 0)
const p2 = Object.create(Point)
p2.init(3, 0)

console.log(p1.distance(p2))
p1.moveX(10)
console.log(p1.distance(p2))
p2.moveY(-4)
console.log(p1.distance(p2))
