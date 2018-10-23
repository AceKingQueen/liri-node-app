LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

# To Start
Choose from one of these 4 LIRI commands:

1) `my-tweets` will display the most recent 20 tweets from [@playoffTimeNBA](https://twitter.com/playoffTimeNBA).
## simply type `node liri.js my-tweets` 
 
 
2) `spotify-this-song` will display the artist, track, album name, and a link to a 30 second preview of the song. To use, type `node liri.js spotify-this-song` followed by the track name.
## For example, to look up "Crazy in Love", type `node liri.js spotify-this-song crazy in love`
  

3) `movie-this` will display a movie title, the year it was released, the [IMDB](https://www.imdb.com/) rating, the [Rotten Tomatoes](https://www.rottentomatoes.com/) rating, the country where the movie was made, the language of the movie, a plot summary, and the actors. To use, type `node liri.js movie-this` followed by a movie title. 
## For example, to see the information about Shrek 2, type `node liri.js movie-this shrek 2`


4) `do-what-it-says` reads from a file named `random.txt`.
## To see what the file says, type `node liri.js do-what-it-says` 
