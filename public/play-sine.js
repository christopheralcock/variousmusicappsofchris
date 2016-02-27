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


  // take pitch and add to JS array then evaluate JS array against specified array, and if so send json. could start with making a weird noise to verify
  updateNoteArray(pitch);

}

var noteArray = [];
var unlockMelody = [-9,-7,-5,-4,-2,0,2,3];

function logSuccess(){
  console.log("SUCCESS");
}

function updateNoteArray(pitch){
  noteArray.push(pitch);
  noteArray = noteArray.slice(-8);
  console.log(noteArray);
  console.log(unlockMelody[0]-noteArray[0]);
  console.log(typeof noteArray);
  if (noteArray.toString() == unlockMelody.toString()){
    logSuccess();
  };

  document.getElementById('note-array').innerHTML = noteArray;
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
