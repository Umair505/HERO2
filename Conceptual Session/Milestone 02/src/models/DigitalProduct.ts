import { Product } from "./Product";

export class DigitalProduct extends Product{
    // downLoadSizeMB: number;
    constructor(id:number,name:string,price:number,quantity:number,public downloadSizeMB:number){
        super(id,name,price,quantity);
        // this.downLoadSizeMB = downloadSizeMB;
    }
    getDownloadInfo(){
        return `${this.downloadSizeMB} is downloading. Size: ${this.downloadSizeMB}`
    }
}