// let game = {
//     team1:'Bayernmoonich ',
//     team2:'Barselona',
//     players: [
//         ['Antony', 'Ananon', 'Jack', 'Koman'],
//          ['John', 'Stephan', 'James', 'Jonus']
//     ],
//     scored:['Antony', 'Ananon', 'John', 'Stephan'],
//     score: '4:0',
//     date: 'Nov 13th , 2016',
//     odd:{
//         team1:1.33,
//         odd:3.25,
//         team2:6.5
//     }
// }

// const myfunction = (...items)=>{
//     for(let i=0; i<items.length; i++)
//     console.log(items[i])

// }
// myfunction(game.teams.BayernMoonich.fl_playes);

//challenge 2

const arrayOfArray = [
    [17 , 'goal'],
    [36 , 'subscription'],
    [47, 'goal'],
    [61 , 'subscription'],
    [64 , 'yellow card'],
    [69 , 'red card'],
    [70 , 'subscription'],
    [72 , 'subscription'],
    [76 , 'goal'],
    [80 , 'goal'],
    [92, 'yellow card']
]
const gameEvents = new Map(arrayOfArray)
let arrayOfValues = [...gameEvents.values()]
console.log('array of values :')
console.log(arrayOfValues)
console.log('set object of values:')
const setObjOfValues = new Set(arrayOfValues);
console.log(setObjOfValues);
const setArrOfValues= [...setObjOfValues]
console.log('set array of values :')
console.log(setArrOfValues)
for(let i=0; i<setArrOfValues.length; i++){
    if(setArrOfValues[i] === 'yellow card'){
        setArrOfValues.splice(i,1)
    }
}//deleting all yellow card events with while loop
console.log([...new Set(gameEvents.values())])
console.log('removing yellow card of set array of values: ')
console.log(setArrOfValues);
let counter = 0;

while(counter<=arrayOfValues.length){
    if(arrayOfValues[counter] === 'yellow card'){
        arrayOfValues.splice(counter , 1);
        break;
    }//deleting all yellow card events with while loop
    
   counter ++
        
}//removing yellow card from two items of yellow card
//  console.log(arrayOfValues);
console.log([...new Set(gameEvents.values())])//challenge 1//array of values with no repetetive value
 for(let value of gameEvents){
     if(value === 'yellow card')
     gameEvents.delete(value)
     break;
 }
 console.log(gameEvents)//deleting yello car from 64 minutes
gameEvents.delete(64);//instead of all codes above challenge 2
console.log(gameEvents)




 
