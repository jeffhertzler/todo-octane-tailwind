import Route from "@ember/routing/route";

export default class Application extends Route {
  model() {
    return [
      {
        isComplete: true,
        text: "My First Todo"
      }
    ];
  }
}
