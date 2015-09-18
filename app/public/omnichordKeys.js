var audioContext = new AudioContext();
var keySet = [];
var keys;
var notes;

  document.onkeydown = onkeyup = function(e){
      e = e || event;
      keySet[e.keyCode] = e.type == 'keydown';
      keys = keyTranslator(keySet);
      notes = noteTranslator(notes);
      // f major
      if(keys.graveAccent){playSineWithBassOctave(0, octaveChooser(notes.f, 3), .1)}
      if(keys.graveAccent && keys.u){playSine(0, octaveChooser(notes.f, 3), 0.1)}
      if(keys.graveAccent && keys.i){playSine(0, octaveChooser(notes.a, 3), 0.1)}
      if(keys.graveAccent && keys.o){playSine(0, octaveChooser(notes.c, 4), 0.1)}
      if(keys.graveAccent && keys.p){playSine(0, octaveChooser(notes.f, 4), 0.1)}
      // c major
      if(keys.a){playSineWithBassOctave(0, octaveChooser(notes.c, 3),  0.1)};
      if(keys.a && keys.u){playSine(0, octaveChooser(notes.g, 3), 0.1)};
      if(keys.a && keys.i){playSine(0, octaveChooser(notes.c, 4), 0.1)};
      if(keys.a && keys.o){playSine(0, octaveChooser(notes.e, 4), 0.1)};
      if(keys.a && keys.p){playSine(0, octaveChooser(notes.g, 4), 0.1)};
      // g major
      if(keys.z){playSineWithBassOctave(0, octaveChooser(notes.g, 3),  0.1)};
      if(keys.z && keys.u){playSine(0, octaveChooser(notes.g, 3), 0.1)};
      if(keys.z && keys.i){playSine(0, octaveChooser(notes.b, 3), 0.1)};
      if(keys.z && keys.o){playSine(0, octaveChooser(notes.d, 4), 0.1)};
      if(keys.z && keys.p){playSine(0, octaveChooser(notes.g, 4), 0.1)};
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
