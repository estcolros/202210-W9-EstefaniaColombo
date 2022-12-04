import { screen } from '@testing-library/dom';
// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom';
import { Sample } from './sample';

describe('Given "Sample" component', () => {
    document.body.innerHTML = `<slot></slot>`;
    const sample = new Sample('slot');
    const elements = [
        screen.getByRole('heading', { name: 'Titulo Sample' }), // <h1>
    ];
    test('Then we should to be able to instantiate it', () => {
        expect(sample).toBeInstanceOf(Sample);
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
describe(`Given "Sample" component, 
    When it is instantiate with a invalid DOM selector`, () => {
    test('No element should be render and an error should be throw', () => {
        expect(() => {
            const result = new Sample('.invalid');
            result.render();
        }).toThrowError('Invalid selector');
    });
});
