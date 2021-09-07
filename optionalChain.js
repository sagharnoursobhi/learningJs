    const weekdays = ['mon', 'sun', 'sat', 'fri', 'wedensday']
    const days = ['sun', 'sat', 'thurs']
    const openingHours= {
        [weekdays[0]]: {
            open: 14,
            close: 18,
        },
        [weekdays[1]]: {
            open: 19,
            close: 23,
        },
        [weekdays[2]]: {
            open: 11,
            close: 16,
        }
    }
    let restaurant = {
        foods: ['pasta', 'pizza', 'hamburger', 'snack'],
        orderFood: (foods) => {
            for (let i = 0; i < weekdays.length; i++) {
                console.log(`${foods[i]} will be served on ${weekdays[i]}` ?? foods[i]) 
                ??
                console.log(`restaurant is closed on ${weekdays[i]}`)

            }
        }
    }
    const myFood = (foods)=>{
        let foodArray;
        for (let i=0; i<foods.length; i++){
            foodArray = push.foods[i];
        }
        return(foodArray);
    }
    let foodItems = restaurant.foods;
    restaurant.orderFood(foodItems)
    console.log(foodItems);

    // for (const day of days) {
    //     const openTime = restaurant.openingHours[day]?.open ?? 'closed';
    //     console.log(`Restaurant will be opened at ${openTime} on ${day}`);}
    const hello={
        a:1,
        b:2,
        c:3
    }
    // console.log('--and--')
    // for(ali of Object.keys(openingHours)){
    //     console.log(ali)
    // }
    const properties = Object.keys(openingHours)//creating an array of an object's indexes
    console.log(properties)
    for(const hours of properties){
        console.log(hours)
    }
    console.log(`the number of days that food will be served is ${properties.length} days`)
    let openingDays = `we are open on ${properties.length} days:`;
    for(const day of properties){
        openingDays += `${day} , `
    }
    // enteries for arrays and object method for objects
    const propertiesValue = Object.values(openingHours)
    for(const i of propertiesValue){
        console.log(i)
    }


console.log('--and--')
for(const i of Object.values(openingHours)){
    console.log(i)
}
console.log('--and--')
for(const i of Object.keys(openingHours)){
    console.log(i)
}
console.log('--and--')
const arrayOfObj = Object.entries(openingHours);
for(const i of arrayOfObj){
    console.log(i)
}
let openingDetails = ''

for(const [day , {open , close}] of arrayOfObj){
    
    openingDetails += `on ${day}: open: ${open} and close: ${close}<br>`

}

document.querySelector('.par').innerHTML = openingDetails;