var audioContext = new AudioContext();
var keySet = [];
var keys;
var notes;

  document.onkeydown = onkeyup = function(e){
      e = e || event;
      keySet[e.keyCode] = e.type == 'keydown';
      keys = keyTranslator(keySet);
      notes = noteTranslator(notes);


      var major = {
        c: [octaveChooser(notes.g, 3), octaveChooser(notes.c, 4), octaveChooser(notes.e, 4), octaveChooser(notes.g, 4)],
        f: [octaveChooser(notes.f, 3), octaveChooser(notes.a, 3), octaveChooser(notes.c, 4), octaveChooser(notes.f, 4)]
      }

      function omnichordSetup(note, chord, keyboardKey, noteLetter){
        // return {
          if(keyboardKey){playSineWithBassOctave(0, octaveChooser(note, 3),  0.1)};
          if(keyboardKey && keys.u){playSine(0, chord[0], 0.1)};
          if(keyboardKey && keys.i){playSine(0, chord[1], 0.1)};
          if(keyboardKey && keys.o){playSine(0, chord[2], 0.1)};
          if(keyboardKey && keys.p){playSine(0, chord[3], 0.1)};
        // };
      };

      omnichordSetup(notes.c, major.c, keys.a);
      omnichordSetup(notes.f, major.f, keys.graveAccent);
      omnichordSetup(notes.g, major.g, keys.z);

      // a minor
      if(keys.x){playSineWithBassOctave(0, octaveChooser(notes.a, 3),  0.1)};
      if(keys.x && keys.u){playSine(0, octaveChooser(notes.a, 3), 0.1)};
      if(keys.x && keys.i){playSine(0, octaveChooser(notes.c, 4), 0.1)};
      if(keys.x && keys.o){playSine(0, octaveChooser(notes.e, 4), 0.1)};
      if(keys.x && keys.p){playSine(0, octaveChooser(notes.a, 4), 0.1)};
      // d minor
      if(keys.s){playSineWithBassOctave(0, octaveChooser(notes.d, 3),  0.1)};
      if(keys.s && keys.u){playSine(0, octaveChooser(notes.a, 3), 0.1)};
      if(keys.s && keys.i){playSine(0, octaveChooser(notes.d, 4), 0.1)};
      if(keys.s && keys.o){playSine(0, octaveChooser(notes.f, 4), 0.1)};
      if(keys.s && keys.p){playSine(0, octaveChooser(notes.a, 4), 0.1)};
      // e minor
      if(keys.d){playSineWithBassOctave(0, octaveChooser(notes.e, 3),  0.1)};
      if(keys.d && keys.u){playSine(0, octaveChooser(notes.g, 3), 0.1)};
      if(keys.d && keys.i){playSine(0, octaveChooser(notes.b, 3), 0.1)};
      if(keys.d && keys.o){playSine(0, octaveChooser(notes.e, 4), 0.1)};
      if(keys.d && keys.p){playSine(0, octaveChooser(notes.g, 4), 0.1)};
    }
