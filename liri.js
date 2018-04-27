require("dotenv").config();

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");

var keys = require("./keys.js");

var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);


//===========Twitter=================
// var tweeted = "https://api.twitter.com/1.1/search/tweets.json?q=PlayoffTimeNBA&count=1"


// client.get(tweeted, function(error, tweets, response) {
//     if(error) throw error;
//     console.log(tweets.statuses[0].created_at);
//     console.log(tweets.statuses[0].text);

// })

// my-tweets : shows last 20 tweets

//==========Spotify=================

var muzak = "cheap thrills"

spotify.search({ type: 'track', query: muzak, limit: 5}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.tracks.items[0].artists[0].name); 
  console.log(data.tracks.items[0].name); 
  console.log(data.tracks.items[0].album.name);
  console.log(data.tracks.items[0].preview_url);
  });



/*
spotify-this-song : 
artist
song name
preview link of song
album

default Ace of Base "I saw the sign"

*/
//==========Movies===================

//all arguments in array stored to variable
// var nodeArgs = process.argv;

//empty variable for holding entered movie name
// var movieName = "";

//we need to account for movies that have more than one word in the title
// for (var i = 2; i < nodeArgs.length; i++) {
    
//     if (i > 2 && i < nodeArgs.length) {

//         movieName = movieName + "+" + nodeArgs[i];

//     } else {

//         movieName += nodeArgs[i];
//     }

// }

//communication with OMDB API
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"

// request(queryUrl, function(error, response, body) {

//     if(!error && response.statusCode === 200) {

//     console.log("Title: " + JSON.parse(body).Title);
//     console.log("Year Released: " + JSON.parse(body).Year);
//     console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    // console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings.Source);
    // console.log("Country where produced: " + JSON.parse(body).Country);   
    // console.log("Language: " + JSON.parse(body).Language); 
    // console.log("Plot: " + JSON.parse(body).Plot);  
    // console.log("Actors: " + JSON.parse(body).Actors);      
    // console.log(JSON.parse(body));    
//     }
// })

/*
movie-this : 
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.

default "Mr. Nobody"
//===========Do what it says===========
do-what-it-says
*/

