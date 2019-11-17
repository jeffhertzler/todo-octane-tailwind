import Route from '@ember/routing/route';
import { Todo } from 'todo-octane-tailwind/types/todo';

export default class Application extends Route {
  model(): Todo[] {
    return [
      {
        isComplete: true,
        text: "My First Todo"
      }
    ];
  }
}
