import { Component } from '../../component/component.js';

export class Sample extends Component {
    constructor(private selector: string) {
        super();
        this.template = this.createTemplate();
        this.render();
    }

    render() {
        super.cleanHtml(this.selector);
        return super.innRender(this.selector);
    }
    private createTemplate() {
        return `<h1>Titulo Sample</h1>`;
    }
}
