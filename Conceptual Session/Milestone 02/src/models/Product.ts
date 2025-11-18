// export class Product{
//     id : number;
//     name: string;
//     price: number;
//     quantity: number;

//     constructor(id : number, name: string,price: number,quantity: number){
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.quantity =quantity;
//     }
//     getDetails():string{
//         return  `Product: ${this.name} - $${this.price} - stock ${this.quantity}`
//     }
//     getStockValue():number{
//         return this.price*this.quantity;
//     }
//     sell(unit:number):string{
//         if(unit > this.quantity){
//             return "Bhai product tho shesh.pore order diyen";
//         }
//         else{
//             this.quantity-=unit
//         }
//         return `${this.name} have been soldout ${unit} units Remaining Quantity : ${this.quantity} `
//     }
// }

export class Product{
    private id : number;
    private name: string;
    public price: number;
    private quantity: number;

    constructor(id : number, name: string,price: number,quantity: number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity =quantity;
    }
    getDetails():string{
        return  `Product: ${this.name} - $${this.price} - stock ${this.quantity}`
    }
    getStockValue():number{
        return this.price*this.quantity;
    }
    sell(unit:number):string{
        if(unit > this.quantity){
            return "Bhai product tho shesh.pore order diyen";
        }
        else{
            this.quantity-=unit
        }
        return `${this.name} have been soldout ${unit} units Remaining Quantity : ${this.quantity} `
    }
}