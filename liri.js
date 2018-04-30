require("dotenv").config();

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");

var keys = require("./keys.js");

var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);

//===========Switch statement==========

var inputAfterLiri = process.argv[2]

switch (inputAfterLiri) {
    case "movie-this":
        movieThis();
        break;
    case "my-tweets":
        myTweets();
        break;
    case "spotify-this-song":
        spotifyThis();   
        break;
    case "do-what-it-says":
        doIt();   
        break;  
    default:
    console.log("Sorry please enter one of these options: \n* 'movie-this' followed by a movie title \n* 'my-tweets' \n* 'spotify-this-song' followed by a song title \n* or 'do-what-it-says'");    
        break;
}

//===========my-tweets=================
function myTweets() {

//communication with Twitter API
var tweeted = "https://api.twitter.com/1.1/search/tweets.json?q=PlayoffTimeNBA&count=20"


client.get(tweeted, function(error, tweets, response) {
    if(error) throw error;

    //store all tweets coming back in this variable
    var allTweets = tweets.statuses;
    
    //for each tweet, show only the text of the tweet and when it was made
    allTweets.forEach(function(each) {
        console.log(each.text);
        console.log(each.created_at);
    });

})
}
//==========spotify-this-song=================

function spotifyThis() {

//gather input     
var muzak = process.argv;

var trackName = "";

// we need to account for songs that have more than one word in the title
for (var i = 3; i < muzak.length; i++) {
    
    if (i > 3 && i < muzak.length) {

        trackName = trackName + "+" + muzak[i];

    } else {

        trackName += muzak[i];
    }
}

//communcation with Spotify API
spotify.search({ type: 'track', query: trackName, limit: 5}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  //artist  
  console.log(data.tracks.items[0].artists[0].name); 

  //track name
  console.log(data.tracks.items[0].name); 

  //album name
  console.log(data.tracks.items[0].album.name);

  //30 preview link of the song
  console.log(data.tracks.items[0].preview_url);
  });
}


//default Ace of Base "I saw the sign"

//==========movie-this===================

// var defaultMovie = process.argv;
// defaultMovie = "Mr. Nobody";

function movieThis() {

// all arguments in array stored to variable
var nodeArgs = process.argv;

// empty variable for holding entered movie name
var movieName = "";

// we need to account for movies that have more than one word in the title
for (var i = 3; i < nodeArgs.length; i++) {
    
    if (i > 3 && i < nodeArgs.length) {

        movieName = movieName + "+" + nodeArgs[i];

    } else {

        movieName += nodeArgs[i];
    }
}


// communication with OMDB API
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"

request(queryUrl, function(error, response, body) {

    if(!error && response.statusCode === 200) {

    // Title of the movie.    
    console.log("Title: " + JSON.parse(body).Title);

    // Year the movie was released. 
    console.log("Year Released: " + JSON.parse(body).Year);

    // IMDB Rating of the movie.
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);

    // Rotten Tomatoes Rating of the movie.    
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);

    // Country where the movie was produced.
    console.log("Country where produced: " + JSON.parse(body).Country);   

    // Language of the movie.
    console.log("Language: " + JSON.parse(body).Language); 

    // Plot of the movie
    console.log("Plot: " + JSON.parse(body).Plot); 
    
    // Actors in the movie
    console.log("Actors: " + JSON.parse(body).Actors);      
    // console.log(JSON.parse(body));    
    }
})
}
//default "Mr. Nobody"


//===========do-what-it-says===========
function doIt() {

// read from the accompanying "random.txt" file
fs.readFile("random.txt", "utf8", function(error, data) {

if (error) {
    return console.log(error);
} 

//print the .txt file to the console
console.log(data);

})
}