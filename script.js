const thankyouCard = document.querySelector(".thank-you-card");
const ratingCard = document.querySelector(".rating-card");
const ratings = document.querySelector(".ratings");
const spans = ratings.querySelectorAll("span");
const submitBtn = document.querySelector(".submit-btn");
const submit = document.querySelector(".submit");
const loader = document.querySelector(".loader");

spans.forEach((span) => {
  span.addEventListener("click", () => {
    spans.forEach((s) => s.classList.remove("selected"));
    span.classList.add("selected");
  });
});

submitBtn.addEventListener("click", () => {
  const selectedSpan = [...spans].find((span) =>
    span.classList.contains("selected")
  );
  if (selectedSpan) {
    submit.classList.add("hidden");
    loader.classList.remove("hidden");
    setTimeout(() => {
      const selectedValue = selectedSpan.textContent;
      thankyouCard.querySelector("#rating").textContent = selectedValue;
      thankyouCard.classList.remove("hidden");
      ratingCard.classList.add("hidden");
      setTimeout(() => submit.classList.remove("hidden"), 1500);
    }, 1500);
  } else {
    alert("Please select a rating");
  }
});
