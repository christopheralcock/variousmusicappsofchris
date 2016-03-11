var audioContext = new AudioContext();
var keySet = [];
var keys;
var notes;


function omnichordSetup(note, chord, keyboardKey){
    if(keyboardKey){playSineWithBassOctave(0, octaveChooser(note, 3),  0.1)};
    if(keyboardKey && keys.u){playSine(0, chord[0], 0.1)};
    if(keyboardKey && keys.i){playSine(0, chord[1], 0.1)};
    if(keyboardKey && keys.o){playSine(0, chord[2], 0.1)};
    if(keyboardKey && keys.p){playSine(0, chord[3], 0.1)};
    if(keyboardKey && keys.openBracket){playSine(0, chord[4], 0.1)};
    if(keyboardKey && keys.closeBracket){playSine(0, chord[5], 0.1)};
};

  document.onkeydown = onkeyup = function(e){
      e = e || event;
      keySet[e.keyCode] = e.type == 'keydown';
      keys = keyTranslation.keyTranslator(keySet);
      notes = noteTranslator(notes);

      function strumMajor(root){
        fourNotes = [];
        lowest = -3;
        octaveDown = root - 12;
        sixthDown = root - 8;
        fourthDown = root - 5;
        majorThirdUp = root + 4;
        fifthUp = root + 7;
        octaveUp = root + 12;
        majorTenthUp = root + 16;
        if (octaveDown > lowest){fourNotes.push(octaveDown)};
        if (sixthDown > lowest){fourNotes.push(sixthDown)};
        if (fourthDown > lowest){fourNotes.push(fourthDown)};
        if (root > lowest){fourNotes.push(root)};
        if (majorThirdUp > lowest){fourNotes.push(majorThirdUp)};
        if (fifthUp > lowest){fourNotes.push(fifthUp)};
        if (octaveUp > lowest){fourNotes.push(octaveUp)};
        if (majorTenthUp > lowest){fourNotes.push(majorTenthUp)};
        return fourNotes;
      };


      function strumMinor(root){
        fourNotes = [];
        lowest = -3;
        octaveDown = root - 12;
        sixthDown = root - 9;
        fourthDown = root - 5;
        minorThirdUp = root + 3;
        fifthUp = root + 7;
        octaveUp = root + 12;
        minorTenthUp = root + 15;
        if (octaveDown > lowest){fourNotes.push(octaveDown)};
        if (sixthDown > lowest){fourNotes.push(sixthDown)};
        if (fourthDown > lowest){fourNotes.push(fourthDown)};
        if (root > lowest){fourNotes.push(root)};
        if (minorThirdUp > lowest){fourNotes.push(minorThirdUp)};
        if (fifthUp > lowest){fourNotes.push(fifthUp)};
        if (octaveUp > lowest){fourNotes.push(octaveUp)};
        if (minorTenthUp > lowest){fourNotes.push(minorTenthUp)};
        return fourNotes;
      };

      function strumDiminished(root){
        fourNotes = [];
        lowest = -3;
        octaveDown = root - 12;
        sixthDown = root - 9;
        augmentedFourthDown = root - 6;
        minorThirdUp = root + 3;
        diminishedFifthUp = root + 8;
        octaveUp = root + 12;
        minorTenthUp = root + 15;
        if (octaveDown > lowest){fourNotes.push(octaveDown)};
        if (sixthDown > lowest){fourNotes.push(sixthDown)};
        if (augmentedFourthDown > lowest){fourNotes.push(augmentedFourthDown)};
        if (root > lowest){fourNotes.push(root)};
        if (minorThirdUp > lowest){fourNotes.push(minorThirdUp)};
        if (diminishedFifthUp > lowest){fourNotes.push(diminishedFifthUp)};
        if (octaveUp > lowest){fourNotes.push(octaveUp)};
        if (minorTenthUp > lowest){fourNotes.push(minorTenthUp)};
        return fourNotes;
      };

      var major = {
        c: strumMajor(notes.c),
        f: strumMajor(notes.f),
        g: strumMajor(notes.g),
      };

      var minor = {
        a: strumMinor(notes.a),
        d: strumMinor(notes.d),
        e: strumMinor(notes.e),
      };

      var diminished = {
        b: strumDiminished(notes.b),
      };

      omnichordSetup(notes.c, major.c, keys.a);
      omnichordSetup(notes.f, major.f, keys.graveAccent);
      omnichordSetup(notes.g, major.g, keys.z);
      omnichordSetup(notes.a, minor.a, keys.x);
      omnichordSetup(notes.d, minor.d, keys.s);
      omnichordSetup(notes.e, minor.e, keys.d);
      omnichordSetup(notes.b, diminished.b, keys.c);
    };
