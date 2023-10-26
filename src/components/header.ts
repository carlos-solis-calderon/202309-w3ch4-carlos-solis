import { Component } from './component';

export class Header extends Component {
  template;
  constructor(public title: string = 'My series') {
    super();

    this.template = `
    <h1 class="main-title">My series</h1>
    `;
  }
}
