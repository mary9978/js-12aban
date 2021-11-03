// the function nested list recieve nested list and the function count the number of integer in array using recursive fun
let arr=[],temp=0;
//temp is store the number of integer
function nestedList(list) {
    arr=[];
    if (typeof list !== "object") return "please enter object form"
    if (list.length === 0) return temp;
    for (let item of list){
        if (typeof item === "object") arr=[...arr,...item];
        if (Number.isInteger(item)=== true) temp++;
    }
    return nestedList(arr);
}
console.log(nestedList([[[5],3],0,2,['foo'],[],[4,[5.1,6]]])," integer is in the array");