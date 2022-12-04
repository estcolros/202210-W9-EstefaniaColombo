export abstract class Component {
    protected template!: string;
    private element!: Element | null;

    render() {
        return this.element;
    }

    protected innRender(selector: string, position: 'start' | 'end' = 'end') {
        type validChild = 'firstElementChild' | 'lastElementChild';
        const positions = {
            start: { position: 'afterbegin', child: 'firstElementChild' },
            end: { position: 'beforeend', child: 'lastElementChild' },
        };
        this.element = this.selectElement(selector);
        this.element.insertAdjacentHTML(
            positions[position].position as InsertPosition,
            this.template
        );
        const child = positions[position].child as validChild;
        this.element = this.element[child] as Element;
        return this.element;
    }
    protected cleanHtml(selector: string) {
        this.element = this.selectElement(selector);
        this.element.innerHTML = '';
        return this.element;
    }

    private selectElement(selector: string): Element {
        const error = new Error('Invalid selector');
        if (!selector) throw error;
        const e = document.querySelector(selector);
        if (e === null) throw error;
        return e;
    }
}
