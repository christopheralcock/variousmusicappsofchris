var audioContext = new AudioContext()
var keySet = [];
var keys;
var notes;

document.onkeydown = onkeyup = function(e){
    e = e || event;
    keySet[e.keyCode] = (e.type == 'keydown');
    keys = keyTranslator(keySet);
    notes = noteTranslator(notes);

    if(keys.a){playSine(0, octaveChooser(notes.c, 3), .1)}
    if(keys.w){playSine(0, octaveChooser(sharpen(notes.c), 3), 0.1)}
    if(keys.s){playSine(0, octaveChooser(notes.d, 3), 0.1)}
    if(keys.e){playSine(0, octaveChooser(sharpen(notes.d), 3), 0.1)}
    if(keys.d){playSine(0, octaveChooser(notes.e, 3), 0.1)}
    if(keys.f){playSine(0, octaveChooser(notes.f, 3), 0.1)}
    if(keys.t){playSine(0, octaveChooser(sharpen(notes.f), 3), 0.1)}
    if(keys.g){playSine(0, octaveChooser(notes.g, 3), 0.1)}
    if(keys.y){playSine(0, octaveChooser(sharpen(notes.g), 3), 0.1)}
    if(keys.h){playSine(0, octaveChooser(notes.a, 3), 0.1)}
    if(keys.u){playSine(0, octaveChooser(sharpen(notes.a), 3), 0.1)}
    if(keys.j){playSine(0, octaveChooser(notes.b, 3), 0.1)}
    if(keys.k){playSine(0, octaveChooser(notes.c, 4), 0.1)}
    if(keys.o){playSine(0, octaveChooser(sharpen(notes.c), 4), 0.1)}
    if(keys.l){playSine(0, octaveChooser(notes.d, 4), 0.1)}
    if(keys.p){playSine(0, octaveChooser(sharpen(notes.d), 4), 0.1)}
    if(keys.semiColon){playSine(0, octaveChooser(notes.e, 4), 0.1)}
    if(keys.singleQuote){playSine(0, octaveChooser(notes.f, 4), 0.1)}
    if(keys.closeBraket){playSine(0, octaveChooser(sharpen(notes.f), 4), 0.1)}
    if(keys.backSlash){playSine(0, octaveChooser(notes.g, 4), 0.1)}
}
