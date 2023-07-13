export default function Controls({
  home,
  universe,
  exploration,
  htmlElement,
  app,
}) {
  const links = [home, universe, exploration];
  const getPathname = () => {
    const path = window.location.pathname;
    return path.charAt(0) === "/" ? path.slice(1) : path;
  };

  function selectLink(link) {
    links.forEach((element) => {
      if (element != link) {
        element.classList.remove("selected");
        app.classList.remove(element.id);
      } else {
        element.classList.add("selected");
        app.classList.add(element.id);
      }
    });
  }

  function setData() {
    const path = getPathname();
    console.log(path);

    switch (path) {
      case "universe":
        console.log("entrei");
        selectLink(universe);
        htmlElement.style.background =
          "url(./assets/mountains-universe02.png) no-repeat center center fixed";
        htmlElement.style.backgroundSize = "cover";
        break;
      case "exploration":
        selectLink(exploration);
        htmlElement.style.background =
          "url(./assets/mountains-universe-3.png) no-repeat center center fixed";
        htmlElement.style.backgroundSize = "cover";
        break;
      default:
        selectLink(home);
        htmlElement.style.background =
          "url(./assets/mountains-universe-1.png) no-repeat center center fixed";
        htmlElement.style.backgroundSize = "cover";
        break;
    }
  }

  return {
    selectLink,
    setData,
  };
}
