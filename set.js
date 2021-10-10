//set constructure(all constructures begin with capital letter) and all its sub methods create uniqe data
const food = ['pizza', 'pasta', 'pizza', 'risotto', 'hamburger', 'risotto']
const setFood = new Set(food)
console.log(setFood)
console.log(setFood.has('risotto'))
console.log(setFood.has('hghhg'))
console.log(setFood.add('hghgh', 'pasta'))//sub methods of Set
setFood.delete('pizza')
console.log(setFood)
console.log(setFood.size)
setFood.add('risotto')
setFood.clear()//first outside the console otherwise it will result in undefined error
console.log(setFood)
console.log(setFood.add('risotto'))
const [a, b, c] = [1, 2, 3]
console.log(a, b, c)
const array = [2, 3, 5]
let array2 = ['a', 'b', 'c']
let array3 = [...array, ...array2]
console.log(array3)
const [e, d, f] = [...array2]
console.log(e, d, f)
console.log([...new Set('saghar')])
let saghar = 'saghar'
console.log(saghar.length)//=6
console.log(new Set('saghar').size)//=5
const arr = [1,2,3,3]
const str = new Set(arr)//...arr is not iterable means it can not be as an argument of a function 
console.log(str)
const obj = {
    name:'Jone',
    family:'Stefen'
}
const objToArray = [...Object.entries(obj)]
console.log([...new Set(objToArray)])
console.log(objToArray)
const str1 = 'saghar'
const setOfStr = new Set(str1)
console.log(setOfStr)
console.log([...setOfStr])
console.log([...setOfStr].join(''))//string of array
console.log(setOfStr.has('s'))
console.log([obj.name , obj.family])



