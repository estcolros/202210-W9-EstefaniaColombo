import { DetailsPage } from '../../pages/details/details.js';
import { HomePage } from '../../pages/home/home.js';
import { FavoritesPage } from '../../pages/favorites/favorites.js';
import { consoleDebug } from '../../tools/debug.js';
import { MenuOptionsType } from '../../types/menu.options.js';
import { Footer } from '../core/footer/footer.js';
import { Header } from '../core/header/header.js';
import { Menu } from '../core/menu/menu.js';

export class App {
    menuOptions: MenuOptionsType;
    constructor() {
        this.menuOptions = [
            { path: './index.html', label: 'Home' },
            { path: './favorites.html', label: 'Favorites' },
            { path: './details.html', label: 'Details' },
        ];
        try {
            new Header('.root');
            new Menu('header', this.menuOptions);
            this.router();
            new Footer('.root');
        } catch (error) {
            consoleDebug((error as Error).message);
        }
    }

    router() {
        const path = './' + location.pathname.split('/').at(-1);
        switch (path) {
            case this.menuOptions[0].path:
                return new HomePage('.root');
            case this.menuOptions[1].path:
                return new FavoritesPage('.root');
            case this.menuOptions[2].path:
                return new DetailsPage('.root');
            default:
                throw new Error('Path no disponible');
        }
    }
}
