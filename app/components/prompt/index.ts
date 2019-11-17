import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

interface PromptArgs {
  create(text: string): void;
}

export default class Prompt extends Component<PromptArgs> {
  @tracked text = '';

  @action
  create() {
    this.args.create(this.text);
    this.text = '';
  }
}
