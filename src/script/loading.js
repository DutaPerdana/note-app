class LoadingIndicator extends HTMLElement {
  constructor() {
    super();
    // Membuat elemen spinner menggunakan JavaScript
    const spinner = document.createElement('div');
    spinner.classList.add('spinner'); // Menambahkan kelas spinner

    // Menambahkan spinner ke dalam elemen Web Component
    this.attachShadow({ mode: 'open' }).appendChild(spinner);
  }
}

customElements.define('loading-indicator', LoadingIndicator); // Mendefinisikan Web Component
