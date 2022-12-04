import { Pokemon } from '../../../models/details.js';
import { consoleDebug } from '../../../tools/debug.js';
import { Component } from '../../component/component.js';

export class Item extends Component {
    constructor(private selector: string, private item: Pokemon) {
        super();
        this.template = this.createTemplate();
        this.render();
    }

    render() {
        const element = super.innRender(this.selector);
        return element;
    }

    private createTemplate() {
        return `
        
        `;
    }
}
