customElements.define("mi-footer", class extends HTMLElement {
    connectedCallback() {
      this.innerText = "Copyright © 2019 Osorio Mendoza Elizabeth IC51-M.";
    }
  }, { extends: "footer" });