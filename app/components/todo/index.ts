import Component from '@glimmer/component';

interface TodoArgs {
  isComplete: boolean;
  text: string;
}

export default class Todo extends Component<TodoArgs> {}
