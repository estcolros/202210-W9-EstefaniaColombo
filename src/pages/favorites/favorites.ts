import { Component } from '../../components/component/component.js';
import { List } from '../../components/favorites.pokemon/list/list.js';
import { consoleDebug } from '../../tools/debug.js';

export class FavoritesPage extends Component {
    constructor(private selector: string) {
        super();
        this.template = this.createTemplate();
        this.render();
        try {
            new List('.todo-wrapper');
        } catch (error) {
            consoleDebug((error as Error).message);
        }
    }

    render() {
        return super.innRender(this.selector);
    }

    private createTemplate() {
        return `
        <main>
            <h2>My favorite pokemons</h2>
            <div class="favorites-wrapper">
                <button id="bprevious">Previous</button>
                <button id="bnext">Next</button>
            </div>
            
        </main>
        `;
    }
}
