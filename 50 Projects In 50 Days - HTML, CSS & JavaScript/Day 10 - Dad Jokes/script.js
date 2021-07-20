const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  // Using loader
  const loader = document.getElementById("loader");
  loader.style.display = "block";
  jokeEl.style.opacity = 0.25;
  //  Using Async/Await
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEl.style.opacity = 1;
  jokeEl.innerHTML = data.joke;
  loader.style.display = "none";

  console.log(data);

  // Using .then()
  // const config = {
  //     headers: {
  //         'Accept': 'application/json'
  //     }
  // };

  // fetch('https://icanhazdadjoke.com', config)
  //     .then(res => res.json())
  //     .then(data => {
  //         console.log(data);
  //         jokeEl.innerHTML = data.joke;
  //     });
}
