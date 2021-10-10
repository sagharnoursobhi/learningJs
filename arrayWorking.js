let myArray = ['lemon' , 'kiwi' , 'apple' , 'add' ];
console.log(myArray)
myArray.splice(2,0,'lemon')
console.log(myArray)
myArray.splice(2 , 0 , 'apple');
let newArray = myArray
console.log(newArray)
myArray.splice(1 , 2);//from 1 index remove two items
console.log(myArray)
console.log(myArray.indexOf('lemon'))
myArray.pop()//removing last element
console.log(myArray)
myArray.push('hello')//add one to the end
console.log(myArray)
myArray.shift()
console.log(myArray)//removing the first element
myArray.shift()
console.log(myArray)


//splice(start , numberofitemstoremoveitem(3) , additem(s))
let test = ['a' , 'b' , 'c'];
test.splice(1,1)//from index one, one item is deleted
console.log(test)//[a , c]