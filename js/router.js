export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }
}
