export class StoreArray<T> {
    constructor(private storeName: string) {}

    getStore(): Array<T> {
        const dataString = localStorage.getItem(this.storeName);
        if (!dataString) return [];
        return JSON.parse(dataString);
    }

    setStore(data: Array<T>) {
        localStorage.setItem(this.storeName, JSON.stringify(data));
    }
}
