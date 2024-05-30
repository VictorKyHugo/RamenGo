import "../styles/normalize.scss";
import "../styles/style.scss";
// import javascriptLogo from "../../javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";
import cardIcon from "../assets/cardIcon.svg";

// <a href="https://vitejs.dev" target="_blank">
//   <img src="${viteLogo}" class="logo" alt="Vite logo" />
// </a>

document.querySelector("#app").innerHTML = `
  <div class="container">
   <article class="container__card container__card">
    <img src="${cardIcon}" class="container__card__img" alt="colocar alt" />
    <h1 class="container__card__name">Shoyu</h1>
    <p class="container__card__description">The good old and traditional soy sauce </p>
    <p class="container__card__price">US$ 10</p>
   </article>
  </div>
`;

// setupCounter(document.querySelector("#counter"));
