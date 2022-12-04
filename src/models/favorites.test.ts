import { Pokemon } from '../models/favorites.js';

describe('Given "Pokemon" data model', () => {
    test('Then it should instantiate a pokemon', () => {
        const mockName = 'Test pokemon';
        const mockImgSrc = 'Test imgSrc';
        const result = new Pokemon(mockName, mockImgSrc);
        expect(result).toBeInstanceOf(Pokemon);
        expect(result).toHaveProperty('name', mockName);
        expect(result).toHaveProperty('imgSrc', mockImgSrc);
        expect(result).toHaveProperty('isFavorite', false);
    });
});
