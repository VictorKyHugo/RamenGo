import { postOrder } from "./api.js";
import { setupCarousel } from "./carousel.js";

setupCarousel(document.querySelector(".container__order__broth"), "broth");
setupCarousel(document.querySelector(".container__order__protein"), "protein");

const orderNowButton = document.querySelector(".container__hero__main__button");
const placeOrderButton = document.querySelector(".container__place-order");
const orderSection = document.querySelector(".container__order");

orderNowButton.addEventListener("click", () => {
  orderSection.scrollIntoView({ behavior: "smooth" });
});

placeOrderButton.addEventListener("click", async () => {
  const loader = document.createElement("div");
  loader.classList.add("loader");

  placeOrderButton.innerHTML = "";
  placeOrderButton.appendChild(loader);

  const data = await postOrder();

  const imageUrl = data.image.split(
    "https://tech.redventures.com.br/icons/ramen/"
  )[1];

  window.location.href = `/order?description=${data.description}&image=${imageUrl}`;
});
