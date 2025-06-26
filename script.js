function f1(){
    return "f1 function"
}
function f2(){
    return "f2 function"
}
f1().then((v)=>f2())
const result=f1()
const result2=f2()
console.log(result1);
console.log(result2);
