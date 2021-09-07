const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const timeSet = (time)=>{
    if(time > 0 && time<=12)
    return('am')
    else{
        return('pm')
    }
}

let restaurant = {
    name: 'classico Italiano',
    place: 'hgythtkjssgdg',
    categories: ['Italian', 'pizzaria', 'vegetarian', 'organic'],
    startMenu: ['Focaccia' , 'Bruchestta' , 'Garlic Bread' , 'Caprese Salad' ],
    mainMenu: ['Pizza' , 'Pasta' , 'Risoto'],
    order: function(starterOrder , mainOrder){
        return([this.startMenu[starterOrder] , this.categories[mainOrder]]);
    },
    openingHours : {
        thus: {
            open: 12,
            close: 6
        },
        wednsday:{
            open:4,
            close:7
        },
        fri:{
            open: 4,
            close: 7
        }
    },
    foodDelivery: function (
       {startIndex ,mainIndex , address , time} 
    ){
        console.log(`Order received! ${this.startMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to
        ${address} at ${time}${timeSet(time)}`)
    }
}
restaurant.foodDelivery({ mainIndex:1 , startIndex:2 , address:'kavalijbacken6' , 
time: 21})

// const {name:restaurantName , openingHours:restaurantOpClo , categories:restaurantCate} = restaurant
// console.log(restaurantName,restaurantOpClo , restaurantCate)

// console.log(restaurant.order(1 , 2))
// const [starter , main] = restaurant.order(1,2)
// console.log(starter , main )

// let [first , second , third , fourth] = restaurant.categories
// console.log(first , second , third , fourth);
// let temp;
// temp = first;
// first = second;
// second = temp;
// console.log(first , second)
//inversing array fields using destrucrting
// [first , second] = [second , first]
// console.log(first , second)
const nested = [1 , 3, [5 , 6]];
[i , , [j , k]] = nested;
console.log(i , j , k);
