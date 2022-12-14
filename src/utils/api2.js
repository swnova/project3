

const getMe = (token) => {
    return fetch("https://vroom-backendsw.herokuapp.com/api/players", {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
};

const startGame = () => {
    const gameArray = ["6398ff7db2a3e614b1208bd1", "6398ff72b2a3e614b1208bcf", "6398ff72b2a3e614b1208bcf", "6398ff7db2a3e614b1208bd1", "639a0eba5a3904931080c3f7", "639a0eea5a3904931080c3f9", "639a0f005a3904931080c3fb", "639a0f135a3904931080c3fd", "639a0f355a3904931080c3ff", "639a0f555a3904931080c401", ""]
    const randomGame = gameArray[Math.floor(Math.random() * gameArray.length)];
    console.log(randomGame)
  return fetch(
    `https://vroom-backendsw.herokuapp.com/api/games/${randomGame}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((data) => data.json());
};

module.exports = { getMe, startGame };