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
var unlockMelody = [5, 7, 3, -9, -2];

function logSuccess(){
  console.log("SUCCESS");
  httpGet("http://ec2-54-229-66-207.eu-west-1.compute.amazonaws.com:4000/");
}

function httpGet(theUrl){
    // document.getElementById('picture').innerHTML = "<img style='position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:-1;' src='http://memesvault.com/wp-content/uploads/Sloth-Goonies-Hey-You-Guys-08.gif'/>";
    document.getElementById('picture').innerHTML = '<iframe style="position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:-1;" width="560" height="315" src="https://www.youtube.com/embed/4Vv5CsP1pAg?autoplay=1&showinfo=0&loop=1&playlist=4Vv5CsP1pAg" frameborder="0" allowfullscreen></iframe>';
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
    document.getElementById('vehicle-response').innerHTML = xmlHttp.responseText;
}

function updateNoteArray(pitch){
  noteArray.push(pitch);
  noteArray = noteArray.slice(-5);
  console.log(noteArray);
  console.log(unlockMelody[0]-noteArray[0]);
  console.log(typeof noteArray);
  if (noteArray.toString() == unlockMelody.toString()){
    logSuccess();
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
