class Headline extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h1>Ivan Ushmorov</h1>
      <h3>Frontend Engineer at ZEISS.<br>Based in Ulm, Germany.</h3>
      `;
  }
}

window.customElements.define("headline-component", Headline);
