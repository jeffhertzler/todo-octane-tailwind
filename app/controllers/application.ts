import Controller from '@ember/controller';
import { Todo } from 'todo-octane-tailwind/types/todo';
import { action } from '@ember/object';

export default class Application extends Controller {
  model: Todo[] = [];

  @action
  create(text: string) {
    this.model.addObject({
      text,
      isComplete: false,
    });
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    application: Application;
  }
}
