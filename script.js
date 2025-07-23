const audioSources = [
  'calm.mp3',
  'redditactuallybangs.mp3',
  'macymills.mp3',
  "What's Poppin.mp3",
  'so stressed out.mp3',
  'pocket1.mp3',
  'Mr 2.mp3',
  'macymills.mp3',
  'heep hop v7.mp3',
  'eloise beats.mp3',
];

let remainingSongs = [];
let audioPlayer = null;

// Shuffle button click event handler
document.getElementById('shuffleButton').addEventListener('click', handleShuffleClick);

// Play/pause button click event handler
document.getElementById('playPauseButton').addEventListener('click', togglePlayPause);

function handleShuffleClick() {
  stopCurrentSong();

  if (remainingSongs.length === 0) {
    // All songs have been played — reset
    remainingSongs = shuffleArray([...audioSources]);
  }

  playNextRandomSong();
}

function playNextRandomSong() {
  if (remainingSongs.length === 0) {
    // All songs have been played — reset
    remainingSongs = shuffleArray([...audioSources]);
  }

  const nextSong = remainingSongs.shift(); // Remove and get first song in list

  audioPlayer = new Audio(nextSong);
  audioPlayer.play();

  console.log("Now playing:", nextSong);

  // When song ends, move to the next automatically
  audioPlayer.addEventListener('ended', playNextRandomSong);
}

function togglePlayPause() {
  if (!audioPlayer) return;

  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

function stopCurrentSong() {
  if (audioPlayer) {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    audioPlayer.removeEventListener('ended', playNextRandomSong);
    audioPlayer = null;
  }
}

function shuffleArray(array) {
  // Fisher-Yates shuffle
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
