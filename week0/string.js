//remove leading blank spaces
// function trimString(str) {
//     console.log("Original String:", str);
//     console.log("After trim:",  );
//   }
//   trimString("     Hello     World ");


// separates the string from separator
//After split: [ 'Hell', 'lp W', 'rld' ]
// function splitString(str, separator) {
//     console.log("Original String:", str);
//     console.log("After split:", str.split(separator));
//   }
//   splitString("Hellolp World", "o");


// function replaceString(str, target, replacement) {
//     console.log("Original String:", str);
//     console.log("After replace:", str.replace(target, replacement));
//   }
//   replaceString("Hello World", "World", "JavaScript");

function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
    console.log("Original String:", str);
  }
  getSubstring("Hellop World", 0, 5);


  // indexOf
  //returns 1st index of that string which is appearing 1st
// function findIndexOf(str, target) {
//     console.log("Original String:", str);
//     console.log("Index:", str.indexOf(target));
//   }
//   findIndexOf("Hello World", "o");
  
//   // lastIndexOf
//   function findLastIndexOf(str, target) {
//     console.log("Original String:", str);
//     console.log("Index:", str.lastIndexOf(target));
//   }
//   findLastIndexOf("Hello World World", "World");
  //returns starting index of last appearing string
  // slice
//   function getSlice(str, start, end) {
//       console.log("Original String:", str);
//       console.log("After slice:", str.slice(start, end));
//       console.log("Original String:", str);
//   }
//   getSlice("Hello World", 0, 5);