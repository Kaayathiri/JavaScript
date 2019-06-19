//let num = [1, "2", 3, 4, "5", "6"];
//total=0;
//for (let thing of num){
//  total+= parseInt(thing);

//}
//console.log(total);


const animals = ['elephant', 'tiger', 'zebra', 'dragon', 'dog', 'blue-eyes white dragon'];
const output = animals

   .filter(item => item !== 'elephant' && item !== 'blue-eyes white dragon')
   .filter(val => val.length < 7)
   .map((val, index) => {
      if (index) {
         return ', ' + val;
      }
      return val;
   })
   .reduce((prev, item) => prev += item, 'Animals:');
