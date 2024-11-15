document.getElementById('song-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const title = document.getElementById('song-title').value;
    const artist = document.getElementById('artist').value;
    const genre = document.getElementById('genre').value;
  
    addSongToCatalogue(title, artist, genre);
  
    document.getElementById('song-form').reset();
  });
  
  function addSongToCatalogue(title, artist, genre) {
    const songList = document.getElementById('song-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${title} by ${artist} - Genre: ${genre}`;
    songList.appendChild(listItem);
  }