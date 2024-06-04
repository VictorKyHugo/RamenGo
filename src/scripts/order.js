let params = new URLSearchParams(document.location.search);
let description = params.get("description");
let imageLabel = params.get("image");

const urlImage = `https://tech.redventures.com.br/icons/ramen/${imageLabel}`;

const imageContainer = document.querySelector(
  ".order__first-section__order-info"
);
const descriptionContainer = document.querySelector(
  ".order__first-section__order-info__order-name"
);

const placeNewOrderButton = document.querySelector(
  ".order__second-section__button"
);

const setOrderData = () => {
  const img = document.createElement("img");
  img.alt = description;
  img.src = urlImage;
  img.classList.add("order__first-section__order-info__order-image");

  descriptionContainer.innerHTML = description;

  imageContainer.prepend(img);
};

placeNewOrderButton.addEventListener("click", () => {
  window.location.href = "/";
});

setOrderData();
