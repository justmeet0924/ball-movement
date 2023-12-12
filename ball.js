//For use, call init() to set property "obj" array this object belong to.

class Ball {
  constructor() {
    this.x = width * random();
    this.y = height * random();
    this.w = 20;
    this.h = 20;
    this.vx = random();
    this.vy = random();
    this.fx = 0;
    this.fy = 0;
    this.life = 0;
    this.own_color = [0,250,0];
    this.your_color = [250,0,0];
    this.color = [0, 250, 0];
  }

  init(array) {
    this.obj = array;
    this.non_collide = this.obj.concat();
    this.collided = [];
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life += 1;

    let array = this.non_collide;

    array.forEach((b, i) => {
      if (collisionFunc(this, b)) {
        let removed = array.splice(i, 1);
        this.collided.push(removed);
      }
    });
  }

  reflect_wall() {
    if (this.y < this.h / 2) {
      this.vy = -this.vy;
      this.y = this.h / 2;
    }
    if (this.y > height - this.h / 2) {
      this.vy = -this.vy;
      this.y = height - this.h / 2;
    }
    if (this.x < this.w / 2) {
      this.vx = -this.vx;
      this.x = this.w / 2;
    }
    if (this.x > width - this.w / 2) {
      this.vx = -this.vx;
      this.x = width - this.w / 2;
    }
  }

  render() {
    push();
    fill(this.color);
    translate(this.x, this.y);
    strokeWeight(1);
    ellipse(0, 0, this.w, this.h);
    pop();
  }

  collide_member() {
    let array = [];

    this.obj.forEach((b, index) => {
      if (collisionFunc(this, b) && b !== this) {
        array.push(b);
      }
    });

    return array;
  }

  collide() {
    if (this.collide_member().length > 0) {
      return true;
    } else {
      return false;
    }
  }
  
  myColor(){

    this.color = this.own_color;

  }
  
  change_color() {
    this.collide_member().forEach((b) => (b.color = this.your_color));
  }
}

function collisionFunc(a, b) {
  let d =
    abs(a.x - b.x) < a.w / 2 + b.w / 2 && abs(a.y - b.y) < a.h / 2 + b.h / 2;

  return d;
  //collide:true
  //non collide:false
}
