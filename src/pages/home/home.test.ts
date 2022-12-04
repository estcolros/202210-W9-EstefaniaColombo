import { screen } from '@testing-library/dom';
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom';
import { HomePage } from './home';

describe('Given "HomePage" component', () => {
    document.body.innerHTML = `<slot></slot>`;
    const homePage = new HomePage('slot');
    const elements = [
        screen.getByRole('heading', { name: 'Pokemon List' }), // <h2>
    ];
    test('Then we should to be able to instantiate it', () => {
        expect(homePage).toBeInstanceOf(HomePage);
    });
    describe.each(elements)(
        'When it is call with a DOM implementation',
        (element: HTMLElement) => {
            test(`Then ${element.tagName} should be render`, () => {
                expect(element).toBeInstanceOf(HTMLElement);
                expect(element).toBeInTheDocument();
            });
        }
    );
});
