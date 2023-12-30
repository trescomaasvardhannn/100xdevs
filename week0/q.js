// class Animal{
    
//     constructor(name,legs)
//     {
//         this.name=name;
//         this.legs=legs;
//     }

//     describe(name,legs){
//         console.log(`${this.name} has ${this.legs} legs`)
//     }
// }

// const cat=new Animal("cat",4);

// cat.describe();

// const users=[{
//     name:"harsh",
//     age:19,

// },{
//     name:"jay",
//     age:22
// }
// ]

// const str=JSON.stringify(users);
// console.log(str);

// const obj=JSON.parse(str)
// console.log(obj)

// let value=5;
// let powerOfTwo = Math.pow(value, 2);
// console.log("After pow():", powerOfTwo);


// Object Methods Explanation
// function objectMethods(obj) {
//     console.log("Original Object:", obj);
  
//     let keys = Object.keys(obj);
//     console.log("After Object.keys():", keys);
  
//     let values = Object.values(obj);
//     console.log("After Object.values():", values);
  
//     let entries = Object.entries(obj);
//     console.log("After Object.entries():", entries);
  
//     let hasProp = obj.hasOwnProperty("property");
//     console.log("After hasOwnProperty():", hasProp);
  
//     let newobj=Object.assign({},obj,{
//         key4:"value4",
//     })
    
//     console.log(newobj)

  
//   }
  
  // Example Usage for Object Methods
//   const sampleObject = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3",
//   };
  
//   objectMethods(sampleObject);

  const square=(a)=>{
        return a*a;
  }
 
 const  cube=(a)=>{
    return a*a*a;
  }
  function sumofp(a,b,newfunc)
  {
    const val1=newfunc(a);
    const val2=newfunc(b);

    return val1+val2;
  }

  console.log(sumofp(2,3,square));
  console.log(sumofp(2,3,cube));