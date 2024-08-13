const randomJoke = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

async function getRandomJokeWithAsync() {
  try {
    const run = await fetch('https://api.chucknorris.io/jokes/random');
    const joke = await run.json();
    randomJoke.innerHTML = joke.value;
  } catch (error) {
    console.log(error);
  }
}

getRandomJokeWithAsync();

// Call the function to get a random joke

jokeBtn.addEventListener('click', getRandomJokeWithAsync);
