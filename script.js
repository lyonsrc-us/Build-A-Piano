const WHITE_KEYS = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const BLACK_KEYS = ['s', 'n', 'v', 'r', 'h'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

// select all keys 
const keys = document.querySelectorAll('.key')

// add an event listener to all keys
keys.forEach((key) => {
    key.addEventListener('click', () => playNote(key));
});

// --handlers-- //
function playNote(key) {
    // Get the note's letter value 
    const noteAudio = document.getElementById(key.dataset.note);

    // reset the note's current time to 0
    noteAudio.currentTime = 0;

    // Play the note
    noteAudio.play();

    // Add a class, active, for styling purposes
    key.classList.add('active');

    // listen for when the sound has ended and remove 'active' last
    noteAudio.addEventListener('ended', () => {
        key.classList.remove ('active');
    });
    }

  document.addEventListener('keydown', (e) => {
  // Get the key that triggered the event
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  // if the key is being held down, dont play the note again
  if (e.repeat) {
    return;
    }

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});

 


