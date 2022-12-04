import { Component } from '../../component/component.js';
export class Header extends Component {
    constructor(private selector: string) {
        super();
        this.template = this.createTemplate();
        this.render();
    }

    render() {
        return super.innRender(this.selector);
    }

    private createTemplate() {
        return `
        <header>
            <h1>Challenge week8</h1>
            <div class="logo__container"><img src="./dist/assets/pokemon-logo.svg" width="300" height="100" alt="PokeAPI Logo"></div>
        </header>`;
    }
}
