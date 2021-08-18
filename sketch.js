const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundImage;
var particles = []
var backGround;

function preload() {
backgroundImage = loadImage("snow2.jpg");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(backgroundImage);

  if (frameCount % 1 === 0) {
    particle = new Snow(random(0, 800), 2, 2);
    particles.push(particle);
  }
  
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }

  drawSprites();
}