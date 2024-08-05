const thankyouCard = document.querySelector(".thank-you-card");
const ratingCard = document.querySelector(".rating-card");
const ratings = document.querySelector(".ratings");
const ratingValue = ratings.querySelectorAll("span");
const submitBtn = document.querySelector(".submit-btn");
const submitText = document.querySelector(".submit");
const loader = document.querySelector(".loader");

for (let i = 0; i < ratingValue.length; i++) {
  ratingValue[i].addEventListener("click", () => {
    for (let j = 0; j < ratingValue.length; j++) {
      ratingValue[j].classList.remove("selected");
    }
    ratingValue[i].classList.add("selected");
  });
}

submitBtn.addEventListener("click", () => {
  let selectedRatings = [];
  for (let i = 0; i < ratingValue.length; i++) {
    if (ratingValue[i].classList.contains("selected")) {
      selectedRatings.push(ratingValue[i]);
      break;
    }
  }

  if (selectedRatings) {
    submitText.classList.add("hidden");
    loader.classList.remove("hidden");
    setTimeout(() => {
      thankyouCard.querySelector("#rating").textContent =
        selectedRatings[0].textContent;
      thankyouCard.classList.remove("hidden");
      ratingCard.classList.add("hidden");
    }, 1500);
  } else {
    alert("Please select a rating");
  }
});
