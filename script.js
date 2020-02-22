let robot;
let clock;
let beep;
let scream;
let button_robot;
let button_clock;
let button_beep;
let button_scream;
let slider;
let pitchShift;

function setup() {
  createCanvas(500, 500);
  background(100, 230, 100);

  // robot -> pitchshift -> speaker is the path
  // create pitch shift and send it to master
  pitchShift = new Tone.PitchShift().toMaster();

  slider = createSlider(-7,7,1);
  slider.position(19, 300);


  // create robot sound and send to pitch shift
  robot = new Tone.Player("robot.mp3").connect(pitchShift);
  button_robot = createButton("robot");
  button_robot.position(19, 19);
  button_robot.mousePressed(() => robot.start());

  // create clock sound and send it to pitch shift
  clock = new Tone.Player("clock.mp3").connect(pitchShift);
  button_clock = createButton("clock");
  button_clock.position(19, 100);
  button_clock.mousePressed(() => clock.start());

  // create beep sound and send it to pitch shift
  beep = new Tone.Player("beep.mp3").connect(pitchShift);
  button_beep = createButton("beep");
  button_beep.position(19, 181);
  button_beep.mousePressed(() => beep.start());

  // create scream sound and send it to pitch shift
  scream = new Tone.Player("scream.mp3").connect(pitchShift);
  button_scream = createButton("scream");    
  button_scream.position(19, 262);
  button_scream.mousePressed(() => scream.start());

}

function draw() {
  textSize(32);
  text("Slider will shift pitch",width/3, height/2);

  pitchShift.pitch = slider.value();
  console.log(slider.value());

}