function cl(something) {
    console.log(something);
}
 cl("hello");

 function average(nums) {
    console.log(nums);
    const sum = nums.reduce((acc, curr) => acc + curr);
    return sum/nums.length;
 }

 cl(average([5, 10, 15, 20]));


 //building a higher order function from scratch

 const player1 = { 
    name: "Shohei Ohtani", 
    homeruns: 173,
    salary: 2000000
 }

 const player2 = {
    name: "Babe Ruth",
    homeruns: 714, 
    salary: 80000
 }

 // Derek Jeter
    // 260 home runs
    // 12000000/yr
const player3 = {
    name: "Derek Jeter",
    homeruns: 260,
    salary: 12000000
}
// David "papi" Ortiz
    // 541 home runs
    // 16000000/yr
const player4 = {
    name: "David Ortiz",
    homeruns: 541,
    salary: 16000000
}

// this handles one player at a time
function printPlayerStats(somePlayer) {
    cl(`${somePlayer.name} hit ${somePlayer.homeruns} throughout their career and earned about ${somePlayer.salary} per year doing it`);
}

printPlayerStats(player2);

// what about an array of players??

 function printAllStats(allThePlayers) {
    for (let i = 0; i < allThePlayers.length; i++) {
        //print out the players stats
        printPlayerStats(allThePlayers[i]);
    }
 }
 
  const playersArr = [player1, player2, player3, player4];
 // forEach method
 const someVar = playersArr.forEach(printPlayerStats);
 console.log(someVar);


 //map method ---- really useful once we get react
//what does map do -- returns a brand new array that holds whatever you told it to hold. 
 const mappedArr = playersArr.map(function (element, index, arr){
    //return something so that we populate the new array 
    // remember that .map is trying to build a new array
    return element.homeruns;
 });
 console.log(mappedArr)

 //Filter Method 
 //what does filter do? 
 // returns a brand new array, containing some elements from the starting array
 // how many elements? which ones?
 //that depends on the function that you give it
 const filteredPlayers = playersArr.filter((element, index, arr) =>{
        //filter expects to get either true or false
        // true means keep this element
        // false means discard this element;
        // for this element should it stay or should it go now
        if (element.salary > 100000) {
            return true; //keep that in the resulting array
        }
 });
 console.log(filteredPlayers);



 // Higher order functions just means its a functions that either 
 // 1. Takes another function as a parameter or 
 // 2. Returns a function 

 function add(a, b) {
    return a + b; 
 }
 const result = add(3, 4);

 //This function returns another function
 //function buildGreeting(greeting) {
   // return `${greeting}, Hunter!`;
 //}

 //console.log(buildGreeting("Hello"));

 function buildGreeting(greeting) {
        return (name) => {
            return `${greeting}, ${name}`;
        }
    }

    const sayHello = buildGreeting("Hello");
    console.log(sayHello("Dan"));
    console.log(sayHello("Nawaf"));
    const sayGoodbye = buildGreeting("Goodbye");
    console.log(sayGoodbye("Doug"));
    console.log(sayGoodbye("Charles"));