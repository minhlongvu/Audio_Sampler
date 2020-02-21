let robot;
let clock;
let beep;
let scream;
let button_robot;
let button_clock;
let button_beep;
let button_scream;
let slider_robot;
let slider_clock;
let slider_beep;
let slider_scream;
let pitchShift_robot;
let pitchShift_clock;
let pitchShift_beep;
let pitchShift_scream;

function setup() {
  createCanvas(500, 500);
  background(100, 230, 100);

  // robot -> pitchshift -> speaker
  // create pitch shift and send it to master
  pitchShift_robot = new Tone.PitchShift().toMaster();
  pitchShift_clock = new Tone.PitchShift().toMaster();
  pitchShift_beep = new Tone.PitchShift().toMaster();
  pitchShift_scream = new Tone.PitchShift().toMaster();

  // create robot sound and send to pitch shift
  robot = new Tone.Player("robot.mp3").connect(pitchShift_robot);
  button_robot = createButton("robot");
  button_robot.position(19, 19);
  button_robot.mousePressed(() => robot.start());
  slider_robot = createSlider();
  slider_robot.position(19, 50);

  // create clock sound and send it to pitch shift
  clock = new Tone.Player("clock.wav").connect(pitchShift_clock);
  button_clock = createButton("clock");
  button_clock.position(19, 100);
  button_clock.mousePressed(() => clock.start());
  slider_clock = createSlider();
  slider_clock.position(19, 131);

  // create beep sound and send it to pitch shift
  beep = new Tone.Player("beep.wav").connect(pitchShift_beep);
  button_beep = createButton("beep");
  button_beep.position(19, 181);
  button_beep.mousePressed(() => beep.start());
  slider_beep = createSlider();
  slider_beep.position(19, 212);

  // create scream sound and send it to pitch shift
  scream = new Tone.Player("scream.wav").connect(pitchShift_scream);
  button_scream = createButton("scream");    
  button_scream.position(19, 262);
  button_scream.mousePressed(() => scream.start());
  slider_scream = createSlider();
  slider_scream.position(19, 293);

}

function draw() {
  textSize(32);
  text("Sliders will shift pitch",width/3, height/2);

  pitchShift_robot.pitch = slider_robot.value(-7, 7, 1, 0.5);
  pitchShift_clock.pitch = slider_clock.value(-7, 7, 1, 0.5);
  pitchShift_beep.pitch = slider_beep.value(-7, 7, 1, 0.5);
  pitchShift_scream.pitch = slider_scream.value(-7, 7, 1, 0.5);

}