const audioSources = [
  'slowly.mp3', // Replace with your actual song file names
  'redditactuallybangs.mp3',
  'macymills.mp3',
  'i can see.mp3',
  // Add more song file names here...
];

let previousSongIndex = -1;
let audioPlayer; // Variable to store the audio player

// Shuffle button click event handler
document.getElementById('shuffleButton').addEventListener('click', shuffleSongs);

// Play/pause button click event handler
document.getElementById('playPauseButton').addEventListener('click', togglePlayPause);




function shuffleSongs() {
  if (audioPlayer && !audioPlayer.paused) {
    audioPlayer.pause(); // If music is playing, pause it
  }
  playRandomSong();
}

function playRandomSong() {
  let randomIndex = getRandomSongIndex();

  // Prevent playing the same song twice consecutively
  while (randomIndex === previousSongIndex) {
    randomIndex = getRandomSongIndex();
  }

  // Play the selected song
  audioPlayer = new Audio(audioSources[randomIndex]);
  audioPlayer.play();

  // Move on to the next song when the current song ends
  audioPlayer.addEventListener('ended', function() {
    previousSongIndex = randomIndex;
    playRandomSong(); // Play the next random song recursively
  });
}

function togglePlayPause() {
  if (audioPlayer) {
    if (audioPlayer.paused) {
      audioPlayer.play(); // If paused, play the music
    } else {
      audioPlayer.pause(); // If playing, pause the music
    }
  }
}

function getRandomSongIndex() {
  return Math.floor(Math.random() * audioSources.length);
}