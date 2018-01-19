class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    moveX(x) {
        this.x += x
    }

    moveY(y) {
        this.y += y
    }

    distance(p) {
        const x = this.x - p.x
        const y = this.y - p.y
    
        return Math.sqrt( x * x + y * y)
    }
}

const p1 = new Point(0, 4)

const p2 = new Point(3, 0)

console.log(p1.distance(p2))
p1.moveX(10)
console.log(p1.distance(p2))
p2.moveY(-4)
console.log(p1.distance(p2))
