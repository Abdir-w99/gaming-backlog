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
    <p class="platform">Platform: ${platform.value}</p>
    <p class="status">Status: ${status.value}</p>
    <button class="editButton">Edit</button>
    <button class="deleteButton">Delete</button>
  </div>
`;

  gameTitle.value = "";
  platform.value = "";
});

gameList.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteButton")) {
    event.target.parentElement.remove();
  }

  if (event.target.classList.contains("editButton")) {
    const gameCard = event.target.parentElement;
    const title = gameCard.querySelector("h3");
    const platformText = gameCard.querySelector(".platform");
    const statusText = gameCard.querySelector(".status");

    const newTitle = prompt("Edit game title:", title.textContent);
    const newPlatform = prompt(
      "Edit platform:",
      platformText.textContent.replace("Platform: ", ""),
    );
    const newStatus = prompt(
      "Edit status:",
      statusText.textContent.replace("Status: ", ""),
    );

    if (newTitle) {
      title.textContent = newTitle;
    }

    if (newPlatform) {
      platformText.textContent = `Platform: ${newPlatform}`;
    }

    if (newStatus) {
      statusText.textContent = `Status: ${newStatus}`;
    }
  }
});
