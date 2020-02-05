const counter = document.createElement('template');
counter.innerHTML = `
<div class="counter">

    <p class="title">
        Rock
        Paper
        Scissors
    </p>

    <div class="points">

        <label class="score-lbl">SCORE</label>
        <span id="score"> 10</span>

    </div>

</div>
`;
class Counter extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(counter.content.cloneNode(true));

        this.$counter = this._shadowRoot.getElementById('score');
    }

    get getWins() {
        return this.getAttribute('wins');
    }

    static get observedAttributes() {
        return ['wins'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
    }

    render() {
        this.$counter.innerHTML = this.getWins;
    }


}
window.customElements.define('win-counter', Counter);