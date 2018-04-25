// require("dotenv").config();

// var Twitter = require('twitter');
// var Spotify = require('node-spotify-api');
var request = require("request");

// var bringIn = require("./keys.js");

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

//===========Twitter=================
/*
my-tweets : shows last 20 tweets

//==========Spotify=================
spotify-this-song : 
artist
song name
preview link of song
album

default Ace of Base "I saw the sign"

*/
//==========Movies===================

//all arguments in array stored to variable
var nodeArgs = process.argv;

//empty variable for holding entered movie name
var movieName = "";

//we need to account for movies that have more than one word in the title
for (var i = 2; i < nodeArgs.length; i++) {
    
    if (i > 2 && i < nodeArgs.length) {

        movieName = movieName + "+" + nodeArgs[i];

    } else {

        movieName += nodeArgs[i];
    }

}

//communication with OMDB API
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"

console.log(queryUrl);

request(queryUrl, function(error, response, body) {

    if(!error && response.statusCode === 200) {

        console.log(JSON.parse(body));
    }
})

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

