import { getBroths, getProteins } from "./api";

const placeOrderButton = document.querySelector(".container__place-order");

const updatePayload = (type, id) => {
  if (type === "broth") {
    payload.brothId = id;
  }

  if (type === "protein") {
    payload.proteinId = id;
  }

  if (!payload.brothId || !payload.proteinId) {
    placeOrderButton.disabled = true;
  } else {
    placeOrderButton.disabled = false;
  }
};

const handleApiGet = async (type) => {
  let data;

  if (type === "broth") data = await getBroths();
  if (type === "protein") data = await getProteins();

  return data;
};

export const setupCarousel = async (carouselContainerElement, type) => {
  const data = await handleApiGet(type);

  // Cards
  const div = document.createElement("div");

  let divList = document.createElement("divList");
  divList.classList = "list";

  for (let i = 0; i < data.length; i++) {
    let article = document.createElement("article");
    article.classList = "card";

    article.innerHTML = `
              <img src="${data[i].imageInactive}" class="card__img card__image--inactive" alt="${data[i].name}" />
              <img src="${data[i].imageActive}" class="card__img card__image--active" alt="${data[i].name}" />
              <h1 class="card__name">${data[i].name}</h1>
              <p class="card__description">
                  ${data[i].description}
              </p>
              <p class="card__price">US$ ${data[i].price}</p>
    `;

    article.id = data[i].id;

    divList.appendChild(article);
  }

  div.appendChild(divList);

  // Dot Scroll
  const dotsDiv = document.createElement("div");
  dotsDiv.classList = "carousel-dots";
  dotsDiv.innerHTML = `
          <span class="carousel-dots__dot"></span>
          <span class="carousel-dots__dot"></span>
          <span class="carousel-dots__dot"></span>
  `;

  div.appendChild(dotsDiv);

  div.id = type;
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";

  carouselContainerElement.appendChild(div);

  setupCarouselEvents(type);
};

const setupCarouselEvents = async (type) => {
  const carouselContainer = document.querySelector(`#${type} .list`);
  const carouselCards = document.querySelectorAll(`#${type} .card`);
  const dots = document.querySelectorAll(`#${type} .carousel-dots__dot`);

  function updateDots() {
    const scrollLeft = carouselContainer.scrollLeft;
    const cardWidth = carouselCards[0].offsetWidth;
    const centerPosition = scrollLeft + carouselContainer.offsetWidth / 2;
    const centerIndex = Math.floor(centerPosition / cardWidth);

    dots.forEach((dot) => dot.classList.remove("carousel-dots--active"));

    dots[centerIndex]?.classList.add("carousel-dots--active");
  }

  carouselContainer.addEventListener("scroll", updateDots);

  function scrollToCard(index) {
    const cardWidth = carouselCards[0].offsetWidth;
    const scrollPosition = index * cardWidth;

    carouselContainer.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      scrollToCard(index);
    });
  });

  const handleCardSelect = (card) => {
    if (card.classList.contains("card--active")) {
      card.classList.remove("card--active");

      updatePayload(type, null);
    } else {
      carouselCards.forEach((card) => card.classList.remove("card--active"));

      card.classList.add("card--active");

      updatePayload(type, card.id);
    }
  };

  carouselCards.forEach((card) => {
    card.addEventListener("click", () => {
      handleCardSelect(card);
    });
  });

  updateDots();
};
