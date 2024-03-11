class TeaStore{
    constructor(productId,productName,productPrice){
        this.productId=productId;
        this.productName=productName;
        this.productPrice=productPrice;
    }
    static printHello(){
        console.log("Hello from a static method")
    }
    describe(){

        console.log( `${this.productId} is the ID and the price is ${this.productPrice} and the name is ${this.productName}`);
    }
}

let t1=new TeaStore(7,"Indian Tea",23);

console.log(t1.describe());