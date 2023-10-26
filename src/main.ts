import { Component } from './components/component';
import './css/style.css';
export class Main extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <main class="main">
    </main>
    `;
  }
}
