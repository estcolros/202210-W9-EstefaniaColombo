import { StoreArray } from './storage';

type TestItem = { name: string };

describe('Given the class Storage Service', () => {
    const mockTestItem = { name: 'Test item' };
    describe('When we instantiate it and mock localStorage', () => {
        let service: StoreArray<TestItem>;
        beforeEach(() => {
            service = new StoreArray<TestItem>('TestItem');
        });
        test(`Then if localStorage have data 
                and I use service.getStore() 
                it should call localStorage.getItem
                and return de data`, () => {
            Storage.prototype.getItem = jest
                .fn()
                .mockReturnValue('[{"name": "Test item"}]');
            const result = service.getStore();
            expect(localStorage.getItem).toHaveBeenCalled();
            expect(result).toEqual([mockTestItem]);
        });
        test(`Then if localStorage have not data  
            and I use  service.getStore() 
            it should call localStorage.getItem
            and return []`, () => {
            Storage.prototype.getItem = jest.fn();
            const result = service.getStore();
            expect(localStorage.getItem).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test('Then if I use setStore it should ...', () => {
            Storage.prototype.setItem = jest.fn();
            service.setStore([]);
            expect(localStorage.setItem).toHaveBeenCalled();
        });
    });
});
