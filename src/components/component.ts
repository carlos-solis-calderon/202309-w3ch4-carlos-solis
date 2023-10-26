export class Component {
  template;
  render(selector) {
    const element = document.querySelector(selector);
    element.outerHTML = this.template;
  }

  renderInnder(selector) {
    const element = document.querySelector(selector);
    element.innerHTML = this.template;
  }
}
