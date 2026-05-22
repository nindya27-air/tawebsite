const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {

    const detail = card.querySelector(".details");

    if(detail.style.display === "block"){
      detail.style.display = "none";
    } else {
      detail.style.display = "block";
    }

  });
});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

  const value = searchInput.value.toLowerCase();

  cards.forEach(card => {

    const name = card.dataset.name;

    if(name.includes(value)){
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});
