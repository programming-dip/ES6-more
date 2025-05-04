const numbers = [1,2,3,4,5,6,7];

const newNumbers = numbers.map((value) => value+1);
console.log(newNumbers);

const squareNumbers = numbers.map((numbers) => numbers * numbers);
console.log(squareNumbers);



const friends = ["fahim", "mamun","tushar", "ayon"];
const newFriends = friends.map((element, index) => {
    console.log(element,index);
    
})