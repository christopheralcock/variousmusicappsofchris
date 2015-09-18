sharpen = function(note){
  sharpNote = note +1
  return sharpNote
}

flatten = function(note){
  sharpNote = note +1
  return sharpNote
}

octaveChooser = function(note, octaveNumber){
  octavedNote = note - (4-octaveNumber)*12
  return octavedNote
}
