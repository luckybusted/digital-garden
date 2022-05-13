class Contact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="contact">
        Let's get in contact:
        <ul>
            <li><a href="https://github.com/luckybusted">Github</a></li>
            <li><a href="https://www.linkedin.com/in/ivan-ushmorov-4813aa52/">LinkedIn</a></li>
        </ul>
    </div>
    `;
  }
}

window.customElements.define("contact-component", Contact);
