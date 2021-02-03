const age =[3,6,9,12,15];
// const squareAge =[];

// for (let i = 0; i < age.length; i++) {
//     const element = age[i];
//     result = element*element;
//     squareAge.push(result);
// }
// console.log(squareAge);

// function square(element){
//     return element*element;
// }
const result = age.map(function(element){
    return element*element;
});
console.log(result);