//Javascript ES6 concepts
// forEach

// var names = ['peter', 'sam', 'harry', 'nan', 'emma'];
// names.forEach((name)=> {
//     console.log(name);
// });

// //sum of array

// var numbers = [1,2,3,4,5];
// var sum=0;
// numbers.forEach((number) => {
//     console.log(number);
//     sum+=number;
// });
// //console.log(sum);
// console.log(`result: ${sum} `);


//map 
// for changing the content in array
var numbers = [1,2,3,4,5];
console.log("hi");
var dou = numbers.map((number) => {
    return number*2;
})
console.log(dou);


var bikes = [
    {'model' : 'no1', 'price':'more'},
    {'model' : 'no2', 'price':'less'},
    {'model' : 'no3', 'price':'avg'}
]

var prices = bikes.map((bike) => {
    return bike.price;
})
console.log(prices);