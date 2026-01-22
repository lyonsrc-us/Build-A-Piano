// select all keys 
const keys = document.querySelectorAll('.key')

// add an event listener to all keys
keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));
});

// --handlers-- //
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.play();
  }
  function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
}


