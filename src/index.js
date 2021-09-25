const songs = [
  {
    songName: "Halo",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 8607832,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=bnVUHWCynig",
    img: "https://upload.wikimedia.org/wikipedia/en/a/ac/Beyonce_-_Halo.png"
  },
  {
    songName: "Irreplaceable",
    albumTitle: "B'Day",
    playCount: 4914414,
    releaseYear: 2006,
    youTubeLink: "https://www.youtube.com/watch?v=2EwViQxSJJQ",
    img: "https://upload.wikimedia.org/wikipedia/en/4/42/Irreplaceable.png"
  },
  {
    songName: "Single Ladies (Put a Ring on It)",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 5203841,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=4m1EFMoRFvY",
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Single_Ladies_%28Put_a_Ring_on_It%29_screenshot.jpg/300px-Single_Ladies_%28Put_a_Ring_on_It%29_screenshot.jpg"
  },
  {
    songName: "Crazy In Love",
    albumTitle: "Dangerously In Love",
    playCount: 3752084,
    releaseYear: 2003,
    youTubeLink: "https://www.youtube.com/watch?v=ViwtNLUqkMY",
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Beyonce_-_Crazy_in_Love_%28single%29.png/220px-Beyonce_-_Crazy_in_Love_%28single%29.png"
  },
  {
    songName: "If I Were A Boy",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 4562013,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=AWpsOqh8q0M",
    img:
      "https://m.media-amazon.com/images/M/MV5BZWQ1ZjkyYTgtMjI5YS00ZDhmLWI2MjctZTlmMjIyZjQ1ZGM5XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg"
  },
  {
    songName: "Sweet Dreams",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 4940104,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=JlxByc0-V40",
    img:
      "https://m.media-amazon.com/images/M/MV5BZjZmM2Q1Y2EtNWNlZi00Mjk2LWI5ZDktMzBhOTAxYjE4YTVkXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg"
  }
];
const mainDiv = document.querySelector(".row");
const songNameInput = document.getElementById("songNameInput");
const albumTitleInput = document.getElementById("albumTitleInput");
const releaseYearInput = document.getElementById("releaseYearInput");
const youTubeLinkInput = document.getElementById("youTubeLinkInput");
const playCountInput = document.getElementById("playCountInput");
const imgInput = document.getElementById("imgInput");
const createButton = document.getElementById("addSong");
const updateButton = document.getElementById("updateSong");
let updateSongIndexArray;
function renderData() {
  mainDiv.innerHTML = "";
  for (let songIndex = 0; songIndex < songs.length; songIndex++) {
    const songListItem = document.createElement("div");
    songListItem.className = "col-sm-4 d-flex";
    songListItem.innerHTML = `
    <div class="card flex-fill mb-3">
    <img class="card-img-top" src="${songs[songIndex].img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${songs[songIndex].songName}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Album Title: ${songs[songIndex].albumTitle}</li>
      <li class="list-group-item">Release Year: ${songs[songIndex].releaseYear}</li>
      <li class="list-group-item">Play Count: ${songs[songIndex].playCount}</li>
      <li class="list-group-item"><a href="${songs[songIndex].youTubeLink}" target="_blank">YouTube Video</a></li>
    </ul>
    <div class="card-body text-center">
      <button type="button" class="btn btn-danger deleteButton--${songIndex}">Delete</button>
      <button type="button" class="btn btn-secondary updateButton--${songIndex}">Update</button>
</div>
    `;
    mainDiv.append(songListItem);
  }
  //delete logic
  const deleteButtons = document.querySelectorAll(
    '[class^="btn btn-danger deleteButton--"]'
  );
  //console.log(deleteButtons);
  for (let btn of deleteButtons) {
    btn.addEventListener("click", function () {
      var buttonIndexArray = btn.className.split(
        "btn btn-danger deleteButton--"
      );
      console.log(buttonIndexArray);
      songs.splice(buttonIndexArray[1], 1);
      renderData();
    });
  }
  //create logic
  function createData() {
    const songName = songNameInput.value;
    console.log("songName", songName);
    const albumTitle = albumTitleInput.value;
    console.log("albumTitle", albumTitle);
    const releaseYear = releaseYearInput.value;
    console.log("releaseYear", releaseYear);
    const youTubeLink = youTubeLinkInput.value;
    console.log("youTubeLink: ", youTubeLink);
    const playCount = playCountInput.value;
    console.log("playCount", playCount);
    const img = imgInput.value;
    console.log("Img Address: ", img);
    const newSong = {
      songName,
      albumTitle,
      releaseYear,
      youTubeLink,
      playCount,
      img
    };
    console.log("new song", newSong);
    songs.push(newSong);
    songNameInput.value = "";
    albumTitleInput.value = "";
    releaseYearInput.value = "";
    youTubeLinkInput.value = "";
    playCountInput.value = "";
    imgInput.value = "";
    renderData();
    createButton.removeEventListener("click", createData);
  }
  createButton.addEventListener("click", createData);
}
renderData();
//Update Part A
const updateButtons = document.querySelectorAll(
  '[class^="btn btn-secondary updateButton--"]'
);
for (let btn of updateButtons) {
  btn.addEventListener("click", () => {
    //Get the index number from the class
    updateSongIndexArray = btn.className.split(
      "btn btn-secondary updateButton--"
    );
    console.log(updateSongIndexArray);
    //Get the song item from the array and set it to a variable
    var updateSongInfo = songs[updateSongIndexArray[1]];
    console.log(updateSongInfo);
    songNameInput.value = updateSongInfo.songName;
    albumTitleInput.value = updateSongInfo.albumTitle;
    releaseYearInput.value = updateSongInfo.releaseYear;
    youTubeLinkInput.value = updateSongInfo.youTubeLink;
    playCountInput.value = updateSongInfo.playCount;
    imgInput.value = updateSongInfo.img;
    //Hide submit and show update submit button
    createButton.classList.add("hidden");
    updateButton.classList.remove("hidden");
  });
}

//Create function for updating the song array
function updateSong() {
  var updatedSong = {
    songName: songNameInput.value,
    albumTitle: albumTitleInput.value,
    playCount: playCountInput.value,
    releaseYear: releaseYearInput.value,
    youTubeLink: youTubeLinkInput.value,
    img: imgInput.value
  };
  //Remove element and insert new updated song into songs array
  songs.splice(updateSongIndexArray[1], 1, updatedSong);
  //Switch buttons back
  updateButton.classList.add("hidden");
  createButton.classList.remove("hidden");
  //Clear out the input forms
  songNameInput.value = "";
  albumTitleInput.value = "";
  playCountInput.value = "";
  releaseYearInput.value = "";
  youTubeLinkInput.value = "";
  imgInput.value = "";
  //Rerender the updated data
  renderData();
}
updateButton.addEventListener("click", updateSong);
