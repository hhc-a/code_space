function add(a,b){
    return a+b;
}
let a=parseFloat(prompt("請輸入第一個數字"));
let b=parseFloat(prompt("請輸入第二個數字"));
let result=add(a,b);
document.write(`${a}+${b}=${result}<br>`);
const arrowSayHi=name=>"您好、"+name+"!<br>";
document.write(arrowSayHi("王子"));
class House{
    constructor(address,price){
        this.address=address;
        this.price=price;
    }
    getInfo(){
        return`這棟房子位於 ${this.address}，售價為${this.price}萬元`;
    }
    isExpensive(){
        return this.price>1000?"很貴":"很便宜";
    }
}
let myHouse=new House("台灣大道",1200);
document.write(myHouse.getInfo()+"<br>");
document.write(myHouse.isExpensive());