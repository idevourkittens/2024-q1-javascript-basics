//@ts-check

export class SquareShape {
	constructor(x, y, ctx, canvas) {
		this.x = x;
		this.y = y;
		this.ctx = ctx;
		this.canvas = canvas;

		this.width = Math.floor(Math.random() * 50);
		this.height = this.width;
		this.hue = 0;
		this.brightness = 50;
		this.opacity = 100;
		this.saturation = 100;

		this.speedMultiplier = Math.floor(Math.random() * 100);
		this.speedX = Math.floor(Math.random() * this.speedMultiplier) + 1;
		this.speedY = Math.floor(Math.random() * this.speedMultiplier) + 1;

		this.directionX = 1;
		this.directionY = 1;
	}

	update() {
		this.x += this.speedX * this.directionX;
		this.y += this.speedY * this.directionY;
		this.hue++;
		this.brightness++;
		this.opacity++;
		this.saturation++;

		if (this.hue > 360) {
			this.hue = 0;
		}

		if (this.brightness > 100) {
			this.brightness = 0;
		}

		if (this.opacity > 100) {
			this.opacity = 0;
		}

		if (this.saturation > 100) {
			this.saturation = 0;
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
		this.ctx.fillStyle = `hsla(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.opacity}%)`;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
