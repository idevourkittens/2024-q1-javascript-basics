//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");

/** @type {CanvasRenderingContext2D} */
//@ts-ignore canvas is an HTMLCanvasElement
const ctx = canvas.getContext("2d");

import { SquareShape } from "./shapes/square.js";

let s1 = new SquareShape(
	Math.floor(Math.random() * canvas.width),
	Math.floor(Math.random() * canvas.height),
	ctx,
	canvas
);

let shapes = [];

for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
	shapes.push(new SquareShape(0, 0, ctx, canvas));
}

let lastTime = 0;

function drawLoop(timeStamp) {
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	let elapsedTime = timeStamp - lastTime;
	lastTime = timeStamp;

	s1.draw();
	s1.update();

	for (const shape of shapes) {
		shape.update();
		shape.draw();
	}

	window.requestAnimationFrame(drawLoop);
}

window.requestAnimationFrame(drawLoop);
