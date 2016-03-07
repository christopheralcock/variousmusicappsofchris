var audioContext = new AudioContext()
var keySet = [];
var keys;
var notes;

document.onkeydown = onkeyup = function(e){
    e = e || event;
    keySet[e.keyCode] = (e.type == 'keydown');
    keys = keyTranslator(keySet);
    notes = noteTranslator(notes);

    if(keys.a){musicApps.playSine(0, octaveChooser(notes.c, 3), .1)}
    if(keys.w){musicApps.playSine(0, octaveChooser(sharpen(notes.c), 3), 0.1)}
    if(keys.s){musicApps.playSine(0, octaveChooser(notes.d, 3), 0.1)}
    if(keys.e){musicApps.playSine(0, octaveChooser(sharpen(notes.d), 3), 0.1)}
    if(keys.d){musicApps.playSine(0, octaveChooser(notes.e, 3), 0.1)}
    if(keys.f){musicApps.playSine(0, octaveChooser(notes.f, 3), 0.1)}
    if(keys.t){musicApps.playSine(0, octaveChooser(sharpen(notes.f), 3), 0.1)}
    if(keys.g){musicApps.playSine(0, octaveChooser(notes.g, 3), 0.1)}
    if(keys.y){musicApps.playSine(0, octaveChooser(sharpen(notes.g), 3), 0.1)}
    if(keys.h){musicApps.playSine(0, octaveChooser(notes.a, 3), 0.1)}
    if(keys.u){musicApps.playSine(0, octaveChooser(sharpen(notes.a), 3), 0.1)}
    if(keys.j){musicApps.playSine(0, octaveChooser(notes.b, 3), 0.1)}
    if(keys.k){musicApps.playSine(0, octaveChooser(notes.c, 4), 0.1)}
    if(keys.o){musicApps.playSine(0, octaveChooser(sharpen(notes.c), 4), 0.1)}
    if(keys.l){musicApps.playSine(0, octaveChooser(notes.d, 4), 0.1)}
    if(keys.p){musicApps.playSine(0, octaveChooser(sharpen(notes.d), 4), 0.1)}
    if(keys.semiColon){musicApps.playSine(0, octaveChooser(notes.e, 4), 0.1)}
    if(keys.singleQuote){musicApps.playSine(0, octaveChooser(notes.f, 4), 0.1)}
    if(keys.closeBraket){musicApps.playSine(0, octaveChooser(sharpen(notes.f), 4), 0.1)}
    if(keys.backSlash){musicApps.playSine(0, octaveChooser(notes.g, 4), 0.1)}
}
