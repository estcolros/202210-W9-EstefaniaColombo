import { Component } from '../../components/component/component.js';

export class HomePage extends Component {
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
        <main>
            <h2>Pokemon List</h2>
            <slot name="home"></slot>
               <div>
                    <button id="bprevious">Previous</button>
                    <button id="bnext">Next</button>
                </div>
        </main>
        `;
    }
}
