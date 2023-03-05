let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");
//API URL
let url = "https://meme-api.com/gimme/";

//Array of subreddits of your choice

let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

//Function To Get Random Meme
let getMeme = () => {
  //Choose a random subreddit from the subreddits array
  let randonSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
  //Fetch data from the api
  fetch(url + randonSubreddit)
  
    .then((resp) => resp.json())
    .then((data) => {
      let memeImg = new Image();
      //Display meme image and title only after the image loads
      memeImg.onload = () => {
        meme.src = data.url;
        title.innerHTML = data.title;
      };
      memeImg.src = data.url;
    });
};

getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
