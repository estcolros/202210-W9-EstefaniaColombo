import { HomePage } from '../../pages/home/home.js';
import { DetailsPage } from '../../pages/details/details.js';
import { FavoritesPage } from '../../pages/favorites/favorites.js';

import { Footer } from '../core/footer/footer.js';
import { Header } from '../core/header/header.js';
import { Menu } from '../core/menu/menu.js';
import { App } from './app.js';
import { consoleDebug } from '../../tools/debug.js';

jest.mock('../core/header/header.js');
jest.mock('../core/footer/footer.js');
jest.mock('../core/menu/menu.js');
jest.mock('../../pages/favorites/favorites.js');
jest.mock('../../pages/details/details.js');
jest.mock('../../pages/home/home.js');
jest.mock('../../types/menu.options.js');
jest.mock('../../tools/debug.js');

describe('Given and instantiate "App" class', () => {
    beforeAll(() => {
        global.window = Object.create(window);
        Object.defineProperty(window, 'location', {
            value: {},
        });
    });
    describe('When location include a pathname "./index.html"', () => {
        test('Then the application components, included HomePage, should be instantiated ', () => {
            global.window.location.pathname = './index.html';
            const app = new App();
            expect(app).toBeInstanceOf(App);
            expect(Header).toHaveBeenCalled();
            expect(Footer).toHaveBeenCalled();
            expect(Menu).toHaveBeenCalled();
            expect(HomePage).toHaveBeenCalled();
        });
    });
    describe('When location include a pathname "./index.html"', () => {
        test('Then the component AboutPage, should be instantiated', () => {
            global.window.location.pathname = './index.html';
            const app = new App();
            expect(app).toBeInstanceOf(App);
            expect(HomePage).toHaveBeenCalled();
        });
    });
    describe('When location include a pathname "./favorites.html"', () => {
        test('Then the component AboutPage, should be instantiated', () => {
            global.window.location.pathname = './favorites.html';
            const app = new App();
            expect(app).toBeInstanceOf(App);
            expect(FavoritesPage).toHaveBeenCalled();
        });
    });
    describe('When location include a pathname "./details.html"', () => {
        test('Then the component AboutPage, should be instantiated', () => {
            global.window.location.pathname = './details.html';
            const app = new App();
            expect(app).toBeInstanceOf(App);
            expect(DetailsPage).toHaveBeenCalled();
        });
    });
    describe('When any component cannot be instantiated', () => {
        test('Then the component AboutPage, should be instantiated', () => {
            global.window.location.pathname = './bad_path.html';
            const app = new App();
            expect(app).toBeInstanceOf(App);
            expect(consoleDebug).toHaveBeenCalled();
        });
    });
});
