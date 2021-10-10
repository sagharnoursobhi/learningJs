let restaurant = {
    name: 'classico Italiano',
    place: 'hgythtkjssgdg',
    categories: ['Italian', 'pizzaria', 'vegetarian', 'organic'],
    startMenu: ['Focaccia', 'Bruchestta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risoto'],
    order: function (starterOrder, mainOrder) {
        return ([this.startMenu[starterOrder], this.categories[mainOrder]]);
    },
    openingHours: {
        thus: {
            open: 12,
            close: 6
        },
        wednsday: {
            open: 4,
            close: 7
        },
        fri: {
            open: 4,
            close: 7
        }
    },
    foodDelivery: function (
        { startIndex, mainIndex, address, time }
    ) {
        console.log(`Order received! ${this.startMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to
            ${address} at ${time}${timeSet(time)}`)
    }
}
console.log(restaurant.foodDelivery(1 , 2 ))
// const newMenu = [...restaurant.mainMenu , 'Kebab Pizza']
// console.log(newMenu)

// const mainMenuCopy = [...restaurant.mainMenu]
// const menu = [...restaurant.startMenu , ...restaurant.mainMenu]
// console.log(menu)
// const [a , b , c] = [1 , 2, 3]
// console.log(a,b,c)
// let nameone = ['ali' , 'ali' , 'hasan']
// let names = ['alireza' , 'äshayan', 'mari' , ...nameone]
// console.log(names)
const array = [4, 5, 6]
const newArray = [...array, 7, 100]
const [a, b, ...c] = [...newArray]
console.log(a, b, c)
console.log(newArray)
// console.log([1 , 2 , 3 , array])

// let str = 'saghar'
// let strToArray = [...str , '' , 'n']
// console.log(strToArray)
// let myArray[]
    let showContents = document.querySelector('.par');
    const newObject = {
        day: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        openingTimes : function (...days){
                let result= '';
                    for(let i=0; i<days.length; i++){
                        switch (days[i]) {
                            case 'Mon':
                                showContents.innerHTML+= `The food will be saved between 2 and 3 pm <br>`
                                break;
                            case 'Tue':
                                result+= `The food will be saved between 4 and 5 pm <br>`
                                showContents.innerHTML = result
                                break;
                            case ('Thur' || 'Fri' || 'Sat' || 'Sun'):
                                console.log('The food will be saved between 8 and 9 pm')
                            default:
                                result+= `no food will be served<br>`
                                showContents.innerHTML = result
                        }
                        
                    }
                    
        },
        orderPizza: function(mainIngredients , ...otherIngridents){
            console.log('All ingredients are : ' + mainIngredients + ' and');
            console.log(otherIngridents);
        }
        
    }
    
    newObject.openingTimes('Sat','Mon');

    const number = (...items)=>{
        let sum =0;
        for(i=0; i<items.length; i++)
            sum += items[i]
        console.log(sum)
    }

    number(2,3,5)
    const x = [7,1,3]
    number(...x)
    
    newObject.orderPizza('Spinach','cabage','Mashroom','Onion');

   
