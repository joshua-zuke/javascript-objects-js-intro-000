var playlist = {
  artist1 : 'song 1',
  artist2 : 'song 2'
}

function updatePlaylist(obj, key, value){
  obj[key] = value
  return obj
}

function removeFromPlaylist(playlist, key){
  delete playlist.key
  return playlist
}
