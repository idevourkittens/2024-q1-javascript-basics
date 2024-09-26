//@ts-check

export class SquareShape {
	constructor(x, y, ctx, canvas) {
		this.x = x;
		this.y = y;
		this.ctx = ctx;
		this.canvas = canvas;

		this.width = 50;
		this.height = this.width;
		this.hue = 0;

		this.speedMultiplier = 100;
		this.speedX = Math.floor(Math.random() * this.speedMultiplier) + 1;
		this.speedY = Math.floor(Math.random() * this.speedMultiplier) + 1;

		this.directionX = 1;
		this.directionY = 1;
	}

	update() {
		this.x += this.speedX * this.directionX;
		this.y += this.speedY * this.directionY;
		this.hue++;

		if (this.hue > 360) {
			this.hue = 0;
		}

		if (this.x < 0) {
			//left side of screen
			this.directionX = 1;
		} else if (this.x + this.width > this.canvas.width) {
			//right side of screen
			this.directionX = -1;
		}

		if (this.y < 0) {
			//top of screen
			this.directionY = 1;
		} else if (this.y + this.height > this.canvas.height) {
			//bottom of screen
			this.directionY = -1;
		}
	}

	draw() {
		this.ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, 100%)`;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
