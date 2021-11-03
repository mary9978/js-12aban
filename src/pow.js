//pow function with recursive function
function pow(a,b){
  if (b>1) return a*pow(a,b-1);
  else return a;
}
//the output of this code is : a**b
console.log("a :",5,"b",3,"the power of a,b is : ",pow(5,3));