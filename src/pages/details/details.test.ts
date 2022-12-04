import { screen } from '@testing-library/dom';
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom';
import { DetailsPage } from './details';

describe('Given "detailsPage" component', () => {
    document.body.innerHTML = `<slot></slot>`;
    const detailsPage = new DetailsPage('slot');
    const elements = [
        screen.getByRole('heading', { name: 'Details of Pokemon' }), // <h2>
    ];
    test('Then we should to be able to instantiate it', () => {
        expect(detailsPage).toBeInstanceOf(DetailsPage);
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
