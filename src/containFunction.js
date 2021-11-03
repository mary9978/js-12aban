function contain(object,value){
  let obj=Object.values(object)
     for (let i=0;i< 4;i++){
         if (obj[i]=== value){
             return true
         }
         if(typeof obj[i]=='object') {
             return contain(obj[i],value)
         }
     }
     return false;

}
const object={
      d:{
          c:{
              b:{
                  a:{
                      number:20,
                      str:"hi"
                  }
              }
          }
      }
}
console.log(contain(object,20),'is in the object')