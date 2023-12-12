function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  bs = [];


  for (let i = 0; i < 5; i++) {
    bs.push(new Ball(100, 20,"black"));
  }
	
  bs.forEach((b) => b.init(bs));


}
