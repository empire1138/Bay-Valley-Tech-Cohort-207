export class Shipping {
    type: string;
    price: number;
    shippingIdCode: number;

    constructor(type: string, price: number, shippingIdCode: number){
        this.type = type;
        this.price = price;
        this.shippingIdCode = shippingIdCode;
    }

}
