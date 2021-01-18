import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final

// const homeTeam2014Final = Object.values(fifaData.filter(function(final2014) {
    // if ((final2014["Year"] === 2014) && (final2014["Stage"] === "Final")) {
    //    return final2014;
    // }
// })[0]);

// console.log(homeTeam2014Final[5]);

const homeTeam2014Final = fifaData.filter((item) => (item.Year === 2014) && (item.Stage === "Final"));

console.log(homeTeam2014Final[0]["Home Team Name"]);

//(b) Away Team name for 2014 world cup final

const awayTeam2014Final = Object.values(fifaData.filter(function(final2014) {
    if ((final2014["Year"] === 2014) && (final2014["Stage"] === "Final")) {
        return final2014;
    }
})[0]);

console.log(awayTeam2014Final[8]);


//(c) Home Team goals for 2014 world cup final

const homeGoals2014Final = Object.values(fifaData.filter(function(final2014) {
    if ((final2014["Year"] === 2014) && (final2014["Stage"] === "Final")) {
        return final2014;
    }
})[0]);

console.log(homeGoals2014Final[6]);


//(d) Away Team goals for 2014 world cup final

const awayGoals2014Final = Object.values(fifaData.filter(function(final2014) {
    if ((final2014["Year"] === 2014) && (final2014["Stage"] === "Final")) {
        return final2014;
    }
})[0]);

console.log(awayGoals2014Final[7]);

//(e) Winner of 2014 world cup final */

const winner2014Final = Object.values(fifaData.filter(function(final2014) {
    if ((final2014["Year"] === 2014) && (final2014["Stage"] === "Final")) {
        return final2014;
    }
})[0]);

console.log(winner2014Final[9]);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
    let finalsArray = [];
   data.filter(function(finals) {
       if (finals["Stage"] === "Final") {
           finalsArray.push(finals);
       }
   });
   return finalsArray;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, cb) {
    let finalsArray = cb(array);
    let yearsArray = [];
    finalsArray.map(function(finalYears) {
        yearsArray.push(finalYears.Year);
    });
    return yearsArray;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, cb) {
    let winnersArray = cb(array);
    let winners = [];
    winnersArray.map(function(finalWinners) {
        if (finalWinners["Home Team Goals"] > finalWinners["Away Team Goals"]) {
            winners.push(finalWinners["Home Team Name"]);
        } else {
            winners.push(finalWinners["Away Team Name"]);
        }
    });
    return winners;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(array, cbYear, cbWinner) {
    // Declare variables and callbacks
    let cbYearArray = cbYear(array), cbWinnerArray = cbWinner(array);
    let stringYearArray = [], stringWinnerArray = [], stringArrayLast = [];
    // Iterate through arrays and push to new ones
    cbYearArray.forEach(item => stringYearArray.push(item));
    cbWinnerArray.forEach(item => stringWinnerArray.push(item));
    // Iterate through new arrays and push new string to stringArrayLast
    stringYearArray.filter(function(item, index){
        stringArrayLast.push(`In ${item}, ${stringWinnerArray[index]} won the world cup!`);
    })
    return stringArrayLast;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(callback) {
   let avgGoal = callback.reduce(function(acc, item) {
        return (item["Home Team Goals"] + item["Away Team Goals"]) + acc;
   }, 0);
   return (avgGoal / callback.length).toFixed(2);
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
