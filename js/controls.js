export default function Controls({ home, universe, exploration }) {
  const links = [home, universe, exploration];
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

  return {
    selectLink,
  };
}
