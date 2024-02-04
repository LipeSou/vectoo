const particle = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  radius: 0,

  create(x: number, y: number, speed: number, direction: number) {
    const obj = Object.create(this);
    obj.x = x;
    obj.y = y;
    obj.vx = Math.cos(direction) * speed;
    obj.vy = Math.sin(direction) * speed;
    return obj;
  },

  getSpeed() {
    return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
  },

  setSpeed(speed: number) {
    const heading = this.getHeading();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
  },

  getHeading() {
    return Math.atan2(this.vy, this.vx);
  },

  setHeading(heading: number) {
    const speed = this.getSpeed();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
  },

  update() {
    this.x += this.vx;
    this.y += this.vy;
  },
};

export default particle;
