for(var i=0;i<3;i++){
    console.log(i,'hello');
}
console.log(i);
for(let j=0;j<3;j++){
    console.log(j,'hello')
}
let sym=Symbol("uniqyeId");
console.log("sym的資料型態為"+typeof sym);
let cat={
    name:"塔波",
    type:"喵",
    age:1
};
console.log("cat的資料型態為"+typeof cat);
console.log(cat.name);
console.log(cat.age);
console.log("1==\'1\'為",1=='1');
console.log("1==\'1\'為",1!='1');
console.log("1==\'1\'為",1==='1');
console.log("1==\'1\'為",1!=='1');
console.log("10>9為",10>9?"TES":"NO");
console.log("9>10為",9>10?"TES":"NO");