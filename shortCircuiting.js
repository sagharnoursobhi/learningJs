//short circuiting = or operator always returns the first true value
//'',undefined,0 are falsy values by default
// const restaurant = {
//     food: function (mainItem, ...otherItems) {
//         console.log(mainItem);
//         console.log(otherItems);
//     },
//     openingHours: ['10 pm', '11 pm', '1pm'],

// }
// restaurant.guestNum = 20;
// const guestNumber = restaurant.guestNum || 10;//=restaurant.guestNum ? restaurant.guestNum : 10
// console.log(guestNumber)
// if (restaurant.food)
//     restaurant.food('Spinach', 'Onion', 'Mashroom');
// console.log('--and--')
//=
// restaurant.food && restaurant.food('Spinach', 'onion', 'Mashroom')
//nullish coalescing= only undefined and null values will be accepted and comparing continue until end(not 0 or '')
// console.log(1 ?? null ?? undefined ?? null)
// console.log(1 && null && undefined && null)
// console.log(1 || null || undefined || null)

console.log(undefined || 1)
console.log(undefined ?? 1)






