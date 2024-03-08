// // Function to fetch movie data
// function fetchMovieData(movieTitle) {
//     fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=${movieTitle}`)
//         .then((response) => response.json())
//         .then((data) => {
//             // Log the fetched data (optional)
//             console.log(data);

//             // Display movie details in the console (optional)
//             console.log(data.Title);
//             console.log(data.Year);
//             console.log(data.Genre);
//             console.log(data.Director);
//             console.log(data.Actors);
//             console.log(data.Plot);
//             console.log(data.Poster);
//             console.log(data.imdbRating);
//             console.log(data.Awards);
//             console.log(data.Writer);

//             // Display movie details in the UI
//             document.getElementById('title').innerHTML = data.Title;
//             document.getElementById('year').innerHTML = data.Year;
//             document.getElementById('genre').innerHTML = data.Genre;
//             document.getElementById('director').innerHTML = data.Director;
//             document.getElementById('actors').innerHTML = data.Actors;
//             document.getElementById('plot').innerHTML = data.Plot;
//             document.getElementById('poster').src = data.Poster;
//             document.getElementById('rating').innerHTML = data.imdbRating;
//             document.getElementById('awards').innerHTML = data.Awards;
//             document.getElementById('writer').innerHTML = data.Writer;
//         })
//         .catch((error) => {
//             console.error('Error fetching movie data:', error);
//             // Handle errors gracefully (e.g., display an error message)
//         });
// }

// // Function to handle button click event
// function buttonClicked() {
//     // Get the movie title from the input field (assuming you have an input field with id 'movieTitle')
//     const movieTitle = document.getElementById('movieTitle').value;

//     // Call the fetchMovieData function with the provided movie title
//     fetchMovieData(movieTitle);
// }

// Function to clear movie details
function clearMovieDetails() {
    document.getElementById('poster').src = '';
    document.getElementById('title').innerHTML = '';
    document.getElementById('yearValue').innerHTML = '';
    document.getElementById('genreValue').innerHTML = '';
    document.getElementById('directorValue').innerHTML = '';
    document.getElementById('actorsValue').innerHTML = '';
    document.getElementById('plotValue').innerHTML = '';
    document.getElementById('ratingValue').innerHTML = '';
    document.getElementById('awardsValue').innerHTML = '';
    document.getElementById('writerValue').innerHTML = '';
}

// Function to fetch movie data
function fetchMovieData(movieTitle) {
    fetch(`https://www.omdbapi.com/?apikey=c1aecf62&t=${movieTitle}`)
        .then((response) => response.json())
        .then((data) => {
            // Log the fetched data (optional)
            console.log(data);

            // Display movie details in the UI
            document.getElementById('poster').src = data.Poster || '';
            document.getElementById('title').innerHTML = data.Title || '';
            document.getElementById('yearValue').innerHTML = data.Year || '';
            document.getElementById('genreValue').innerHTML = data.Genre || '';
            document.getElementById('directorValue').innerHTML = data.Director || '';
            document.getElementById('actorsValue').innerHTML = data.Actors || '';
            document.getElementById('plotValue').innerHTML = data.Plot || '';
            document.getElementById('ratingValue').innerHTML = data.imdbRating || '';
            document.getElementById('awardsValue').innerHTML = data.Awards || '';
            document.getElementById('writerValue').innerHTML = data.Writer || '';

            // Show the content after fetching data
            document.querySelector('.content').style.display = 'block';
        })
        .catch((error) => {
            console.error('Error fetching movie data:', error);
            // Handle errors gracefully (e.g., display an error message)
        });
}

// Function to handle button click event
function buttonClicked() {
    // Get the movie title from the input field (assuming you have an input field with id 'movieTitle')
    const movieTitle = document.getElementById('movieTitle').value;

    // Clear previous movie details
    clearMovieDetails();

    // Call the fetchMovieData function with the provided movie title
    fetchMovieData(movieTitle);
}
