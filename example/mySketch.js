function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  bs = [];


  for (let i = 0; i < 5; i++) {
    bs.push(new Ball());
  }
	
  bs.forEach((b) => b.init(bs));


}

function draw() {
  background(220);

  bs.forEach((b) => b.render());
  bs.forEach((b) => b.update());
  bs.forEach((b) => b.reflect_wall());
  bs.forEach((b) => b.myColor());

}
