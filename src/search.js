let topTracksArray = [];

const songsList = document.getElementById("song-list");
const searchBar = document.getElementById("searchBar");

const getArtists = async () => {
  try {
    const res = await fetch(
      "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=beyonce&api_key=adf58004ba8b7ef547d5e4b07005264c&format=json"
    );

    const response = await res.json();
    console.log(response);
    topTracksArray = response.toptracks.track;
    displayTracks(topTracksArray);
  } catch (err) {
    console.log(err);
  }
};
//Search function
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  console.log(searchString);
  //Filter through array
  const filteredTracks = topTracksArray.filter((track) =>
    track.name.toLowerCase().includes(searchString)
  );
  displayTracks(filteredTracks);
});

function displayTracks(tracks) {
  const htmlString = tracks
    .map((track) => {
      return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title"> ${track.name} </h5>
    <p class="card-text">Play Count: ${track.playcount} </p>
    <p class="card-text">Listeners: ${track.listeners} </p>
  </div>
</div>
    `;
    })
    .join("");

  songsList.innerHTML = htmlString;
}

window.onload = getArtists();
