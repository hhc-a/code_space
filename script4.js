document.write(`
    <p id="myText"> 哈囉，我是原始文字</p>`)

setTimeout(()=>{
    let el =document.getElementById("myText");
    el.innerText="已被javascript修改"
        alert("3秒後出現這個對話")
},3000)

document.write(`
    <p class ="intro"> 第一段</p>
    <p class ="intro"> 第二段</p>
    `)

    let allp=document.querySelectorAll(".intro");
    allp.forEach(p=>{
        p.style.color="blue";
        p.style.fonWeight="bold";
    });

let newDiv=document.createElement("div");
newDiv.innerText="block";
newDiv.style.background="red";
newDiv.style.width="100px";
newDiv.style.height="100px";
document.body.appendChild(newDiv);