import { Router } from "./router.js";
import { home, universe, exploration, app, htmlElement } from "./elements.js";
import Controls from "./controls.js";
const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploration", "/pages/exploration.html");
router.add(404, "/pages/404.html");

const controls = Controls({
  home,
  universe,
  exploration,
  htmlElement,
  app,
});

home.addEventListener("click", () => {
  if (!home.classList.contains("selected")) {
    controls.setData();
  }
});

universe.addEventListener("click", () => {
  if (!universe.classList.contains("selected")) {
    controls.setData();
  }
});

exploration.addEventListener("click", () => {
  if (!exploration.classList.contains("selected")) {
    controls.setData();
  }
});

window.addEventListener("popstate", function () {
  console.log("oi");
  controls.setData;
});

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
