import { Router } from "./router.js";
import { home, universe, exploration, htmlElement } from "./elements.js";
import Controls from "./controls.js";
const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploration", "/pages/exploration.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

const controls = Controls({
  home,
  universe,
  exploration,
});

home.addEventListener("click", () => {
  if (!home.classList.contains("selected")) {
    controls.selectLink(home);
    htmlElement.style.background =
      "url(./assets/mountains-universe-1.png) no-repeat center center fixed";
    htmlElement.style.backgroundSize = "cover";
  }
});

universe.addEventListener("click", () => {
  if (!universe.classList.contains("selected")) {
    controls.selectLink(universe);
    htmlElement.style.background =
      "url(./assets/mountains-universe02.png) no-repeat center center fixed";
    htmlElement.style.backgroundSize = "cover";
  }
});

exploration.addEventListener("click", () => {
  if (!exploration.classList.contains("selected")) {
    controls.selectLink(exploration);
    htmlElement.style.background =
      "url(./assets/mountains-universe-3.png) no-repeat center center fixed";
    htmlElement.style.backgroundSize = "cover";
  }
});
