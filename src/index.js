const navImages = document.getElementById('movie-list');

const imageDsp = document.getElementById('detail-image');
const titleDsp = document.getElementById('title');
const yearDsp = document.getElementById('year-released');
const descripDsp = document.getElementById('description');
const watchedDsp = document.getElementById('watched');
const bloodAmountDsp = document.getElementById('amount');

const form = document.getElementById('blood-form');


fetch("http://localhost:3000/movies")
    .then((response) => response.json())
    .then((movies) => {

        // Challenge 2
        setDisplay(movies[0]);  // display image, 

        if (movies[0].watched) { // 
            watchedDsp.innerText = "WATCHED";
        } else {
            watchedDsp.innerText = "UNWATCHED";
        }

        bloodAmountDsp.innerText = movies[0].blood_amount;

        // Challenge 4
        watchedDsp.addEventListener('click', () => {
            if (watchedDsp.innerText === "WATCHED") {
                watchedDsp.innerText = "UNWATCHED";
            } else if (watchedDsp.innerText === "UNWATCHED") {
                watchedDsp.innerText = "WATCHED";
            }
        })

        // Challenge 5
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const bloodAmountNum = Number(bloodAmountDsp.innerText);
            const addBloodAmount = Number(event.target.amount.value);
            bloodAmountDsp.innerText = bloodAmountNum + addBloodAmount;
        })
        
        movies.forEach((movie) => { 
            // Challenge 1
            const navImage = document.createElement('img');
            navImage.src = movie.image;
            navImages.append(navImage);

            // Challenge 3
            navImage.addEventListener('click', () => {
                setDisplay(movie);
            })

        })
    })


function setDisplay(movie) {
    imageDsp.src = movie.image;
    titleDsp.innerText = movie.title;
    yearDsp.innerText = movie.release_year;
    descripDsp.innerText = movie.description;
}
