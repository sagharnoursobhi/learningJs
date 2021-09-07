// const arr = [1,2,3];
// const [x,y,z] = arr
// console.log(x,y,z)
// console.log(arr)
// const nested = [1 ,1 ,3,4 , [5,5]]
// const [x,y,z,t, [w,b]] = nested;
// console.log(nested)
// console.log(x,y,z,t,w,b);
//spread-operator

const arr1 = ['a', 'b', 'c'];
const arr2 = [2, 4, 6, ...arr1]
console.log(arr2)
const [a, b, c, ...sample] = arr2
console.log(a, b, c, ...sample);

let restaurant = {
    restaurantTime: [0 , 1, 2 , 3],
    mainMenu: ['sabzi', 'ash', 'ghorme'],
    starter: ['ahmagh', 'gave', 'antar'],
    dessert: ['ali', 'sahar', 'alghah'],
    address: function ({a , b, c }) {
        console.log(`The new order contains ${this.mainMenu[a]} which is delivered to ${this.starter[b]}and the ordered dessert is ${this.dessert[c]} `);
        
    }
}

restaurant.address({a:0 , b:1 , c:0});
const newRestaurant = [...restaurant.mainMenu , restaurant.dessert]

console.log(newRestaurant)

// let a = document.querySelector('.par').innerHTML;
// for(let i=0; i<restaurant.restaurantTime.length; i++){
//     a += restaurant.restaurantTime[i];
// }
let html = '';
restaurant.restaurantTime.forEach((time) => {
    html += `${time}<br>`;
});
document.querySelector('.par').innerHTML = html;