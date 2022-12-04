type PokemonType = {
    id: string;
    name: string;
    imgSrc: string;
    isFavorite: boolean;
};

export class Pokemon implements PokemonType {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        crypto.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }
    id: string;
    isFavorite: boolean;
    constructor(public name: string, public imgSrc: string) {
        this.id = Pokemon.generateId();
        this.isFavorite = false;
    }
}
