const form = document.querySelector("#game-form");
const gameTitle = document.querySelector("#game-title");
const platform = document.querySelector("#platform");
const status = document.querySelector("#status");
const gameList = document.querySelector("#game-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  gameList.innerHTML += `
    <div>
      <h3>${gameTitle.value}</h3>
      <p>Platform: ${platform.value}</p>
      <p>Status: ${status.value}</p>
    </div>
  `;

  gameTitle.value = "";
  platform.value = "";
});
