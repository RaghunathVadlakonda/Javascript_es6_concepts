//Javascript ES6 concepts
// forEach

var names = ['peter', 'sam', 'harry', 'nan', 'emma'];
names.forEach((name)=> {
    console.log(name);
});

//sum of array

var numbers = [1,2,3,4,5];
var sum=0;
numbers.forEach((number) => {
    console.log(number);
    sum+=number;
});
//console.log(sum);
console.log(`result: ${sum} `);
