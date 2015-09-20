function majorMaker(note){
  return [note, (note + 4), (note + 7), (note + 12)]
};

function minorMaker(note){
  return [note, (note + 3), (note + 7), (note + 12)]
};

function diminishedMaker(note){
  return [note, (note + 3), (note + 6), (note + 12)]
};
