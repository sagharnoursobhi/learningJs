const restaurant = {
    foods: ['Pasta', 'Pizza', 'Hamburger', 'Snack'],
    mainIngredients: ['mashroom', 'red meat', 'cabage', 'carrot', 'potato'],
    address: 'WestField mall of Skandinavia 10',
    opening_hours: (items)=>{
            items.forEach(element => {
                switch(element){
                    case 'Saturday':
                        console.log('serving is between 10 and 11 am');
                        break;
                    
                     case 'Sunday':
                        console.log('serving is between 11 and 12')
                        break;
                    case 'Monday':
                        console.log('serving is between 12 and 1pm')
                        break;
                    case 'Tuseday':
                        console.log('serving is between 1 and 2 pm')
                        break;
                    case 'Wedensday':
                        console.log('serving is between 2 and 3 pm')
                        break
                    case 'Thursday':
                        console.log('serving is between 3 and 4 pm') 
                    break
                    default:
                        console.log('food is not served during at the moment');
                        break;
                }
            });
    }
}

// restaurant.opening_hours(['Sunday' , 'Monday']);
// for(const item of restaurant.foods) console.log(item)
const menu = [...restaurant.foods , ...restaurant.mainIngredients];

for(const items of restaurant.foods){
    // switch(item){
    //     case 'Pasta':
    //         console.log('Pasta')
    //         break
    //     case 'Hamburger':
    //         console.log('Hamburger')
    //         break
    // }
    console.log(items)
}
let show_text = document.querySelector('.food-items')
console.log('hello')
console.log(...menu.entries());
console.log('list of foods in restaurant : \n')
// for(const items of menu.entries()) {
//     show_text.textContent += `${items[0] + 1} : ${items[1]}`
    
// }=
for(const [i , el] of menu.entries())
console.log(`${i} : ${el}`)


let weekdays = ['mon', 'sun', 'sat', 'fri', 'wedensday']
let openingHours= {
    [weekdays[0]]: {
        open: 14,
        close: 18
    },
    [weekdays[1]]: {
        open: 19,
        close: 23
    },
    [weekdays[2]]: {
        open: 11,
        close: 16
    }
}

 for(const hours of weekdays){
    console.log(hours)
 }

 const obj = [1 , 2 , 3]
 console.log(...obj.entries())
// for(const [i , e] of obj.entries()){
//     console.log(i+':'+e)
// }

