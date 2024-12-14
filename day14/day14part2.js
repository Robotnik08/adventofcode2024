const fs = require('fs');
const { createCanvas } = require('canvas');

const input = fs.readFileSync("input.txt", "utf8");
const instructions = input.split("\n");

const width = 101, height = 103;

class Robot {
    constructor(robot_string) {
        const parts = robot_string.split(" ");
        const position_str = parts[0].substring(2);
        const velocity_str = parts[1].substring(2);
        const p = position_str.split(",");
        const v = velocity_str.split(",");
        this.x = parseInt(p[0]);
        this.y = parseInt(p[1]);
        this.vx = parseInt(v[0]);
        this.vy = parseInt(v[1]);
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x += width;
        if (this.y < 0) this.y += height;

        this.x %= width;
        this.y %= height;
    }
}

const robots = [];

for (let i of instructions) {
    robots.push(new Robot(i));
}

for (let i = 0; i < 10000; i++) {
    for (let r of robots) {
        r.move();   
    }
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);

    for (let robot of robots) {
        ctx.fillStyle = 'black';
        ctx.fillRect(robot.x, robot.y, 1, 1);
    }

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(`out/frame${i}.png`, buffer);
}

let q1 = 0, q2 = 0, q3 = 0, q4 = 0;

for (let r of robots) {
    let x = r.x, y = r.y;
    if (x < Math.floor(width / 2) && y < Math.floor(height / 2)) q1++;
    if (x > Math.floor(width / 2) && y < Math.floor(height / 2)) q2++;
    if (x < Math.floor(width / 2) && y > Math.floor(height / 2)) q3++;
    if (x > Math.floor(width / 2) && y > Math.floor(height / 2)) q4++;
}

console.log(`Part 1: ${q1 * q2 * q3 * q4}`);