class HeadApp extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        body {
          background-color: rgb(203, 233, 203);
        }
        
        header {
          max-width: 610px;
          margin: auto;
          text-align: center;
        }    

        h1 {
          color: brown;  
        }

        p {
          font-size: 18px;
        }

      </style>

      <header>
        <h1>Selamat Datang di Pusat Film Online!</h1>
        <p>
          
        </p>
      </header>
      `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("head-app", HeadApp);
