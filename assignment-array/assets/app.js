const numArray =[1, 4, 12, 78, 9];

const filtredArray = numArray.filter((num, idx) => num > 5);
console.log("filtered array : ", filtredArray);

console.log(numArray);

const mapArray = numArray.map((number, idx)=> {
    return {num : number};
});

console.log("mapped array : ", mapArray);

const reducedArray = numArray.reduce((prevValue, currentValue) => {
  return currentValue*prevValue  
}, 1)

console.log("reduced array : ", reducedArray);

findMax = (...numbers) => {
    return [Math.max(...numbers), Math.min(...numbers)];
}

console.log("max number = ", findMax(...numArray));

const list = new Set();
list.add(1);
list.add(2);
list.add(4);
list.add(5);
list.add(2);
console.log(list);