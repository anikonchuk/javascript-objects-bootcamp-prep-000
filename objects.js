var playlist = {Beethoven: "Symphony no. 6"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
