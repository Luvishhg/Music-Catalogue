document.getElementById('song-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const title = document.getElementById('Song_Title').value;
    const artist = document.getElementById('Artist').value;
    const genre = document.getElementById('Genre').value;
  
    addSongToCatalogue(title, artist, genre);
  
    document.getElementById('song-form').reset();
  });
  
  function addSongToCatalogue(title, artist, genre) {
    const songList = document.getElementById('song-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${title} by ${artist} - Genre: ${genre}`;
    songList.appendChild(listItem);
  }
