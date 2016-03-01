function playSine(delay, pitch, duration) {
  var startTime = audioContext.currentTime + delay;
  var endTime = startTime + duration;

  var envelope = audioContext.createGain();
  envelope.connect(audioContext.destination);
  envelope.gain.value = 0;
  envelope.gain.setTargetAtTime(1, startTime, 0.1);
  envelope.gain.setTargetAtTime(0, endTime, 0.2);

  var oscillator1 = audioContext.createOscillator();
  oscillator1.connect(envelope);
  oscillator1.type = 'sine';
  oscillator1.detune.value = (pitch) * 100;
  oscillator1.start(startTime);
  oscillator1.stop(endTime + 2);

  updateNoteArray(pitch);

}

var noteArray = [];
var errorArray = [];
var unlockMelody = [0, 2, -2, -14, -7];
var closeEncounters = [0, 2, -2, -14, -7];
var jaws = [0,1,0,1,0];
var imperial = [0,-3,-7,0,-3];
var goldfinger = [0,7,2,4,-4];

function logSuccess(){
  console.log("SUCCESS");
  document.getElementById('picture').innerHTML = '<iframe style="position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:-1;" width="560" height="315" src="https://www.youtube.com/embed/JbUGsbZWitw?autoplay=1&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>';
}

function launchJaws(){
  console.log("RAAAAARGH IM JAWS!!!!");
  document.getElementById('picture').innerHTML = '<iframe style="position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:-1;" width="560" height="315" src="https://www.youtube.com/embed/BX3bN5YeiQs?autoplay=1&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>';
}

function launchImperial(){
  console.log("IMMA GONNA BLOW UP THE SPACE!");
  document.getElementById('picture').innerHTML = '<iframe style="position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:-1;" width="560" height="315" src="https://www.youtube.com/embed/yys5iioLUNw?autoplay=1&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>';
}

function launchGoldfinger(){
  console.log("SHE DEEEAD!!!");
  document.getElementById('picture').innerHTML = '<iframe style="position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:-1;" width="560" height="315" src="https://www.youtube.com/embed/Q56PHHlzizs?autoplay=1&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>';
}



function logFailure(){
  console.log("FAILURE");
  document.getElementById('picture').innerHTML = '<iframe style="position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:-1;" width="560" height="315" src="https://www.youtube.com/embed/v5_3XaaeRXI?autoplay=1&showinfo=0&rel=0&start=51&end=58" frameborder="0" allowfullscreen></iframe>';
}

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
    document.getElementById('vehicle-response').innerHTML = xmlHttp.responseText;
}

function updateNoteArray(pitch){
  noteArray.push(pitch);
  errorArray.push(pitch);
  noteArray = noteArray.slice(-5);
  console.log(noteArray);
  console.log(unlockMelody[0]-noteArray[0]);

  console.log(errorArray.length)
  //if (errorArray.length > 20){
  //  logFailure();
  //};
    
  relativeNoteArray = [0, (noteArray[1]-noteArray[0]), (noteArray[2]-noteArray[0]), (noteArray[3]-noteArray[0]), (noteArray[4]-noteArray[0])];
  console.log(relativeNoteArray);
  console.log(unlockMelody);
  document.getElementById('note-array').innerHTML = relativeNoteArray
  if (relativeNoteArray.toString() == unlockMelody.toString()){
    logSuccess();
  };
  if (relativeNoteArray.toString() == jaws.toString()){
    launchJaws();
  };
  if (relativeNoteArray.toString() == imperial.toString()){
    launchImperial();
  };
  if (relativeNoteArray.toString() == goldfinger.toString()){
    launchGoldfinger();
  };
  
}


function playSineWithBassOctave(delay, pitch, duration) {
  var startTime = audioContext.currentTime + delay;
  var endTime = startTime + duration;

  var envelope = audioContext.createGain();
  envelope.connect(audioContext.destination);
  envelope.gain.value = 0;
  envelope.gain.setTargetAtTime(1, startTime, 0.1);
  envelope.gain.setTargetAtTime(0, endTime, 0.2);

  var oscillator1 = audioContext.createOscillator();
  oscillator1.connect(envelope);
  oscillator1.type = 'sine';
  oscillator1.detune.value = (pitch) * 100;
  oscillator1.start(startTime);
  oscillator1.stop(endTime + 2);

  var oscillator2 = audioContext.createOscillator();
  oscillator2.connect(envelope);
  oscillator2.type = 'sine';
  oscillator2.detune.value = (pitch -12) * 100;
  oscillator2.start(startTime);
  oscillator2.stop(endTime + 2);
};
