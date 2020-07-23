export class Cart {
    constructor(
        public productName: string,
        public productId: number,
        public units: number,
        public totalPrice: number,
        ) {
    }
}
