    'use strict'
    const add = ()=> console.log(`sum = ${2 + 3}`);

    const btn = document.createElement('button')
    document.body.append(btn);
    btn.innerHTML = 'btn'

    btn.addEventListener('click' , add)//add = callback function and addeventlistener is a higher-order function

    let varone = 'saghar noursobhi'
    console.log(`${varone.replace(/ /g,'')}`)//how to remove spaces in a string

    //function for removing spaces in any string
    const removeSpace = (str)=>{
        return str.replace(/ /g , '')
    }

    //function for transforming the first word of a string to uppercase
    const firstToUpperCase = (str)=>{
        const [first , ...others] = str.split(' ');
        return [first.toUpperCase() , ...others].join(' ');
    }

    const transformer = function(str , fn){//higher-order function-- using functions as an input parameter
        console.log(`original string: ${str}`)
        console.log(`transfored string: ${fn(str)}`)
        console.log(`name of fn is : ${fn.name}`)
    }

    transformer('javascript is really challenging' , firstToUpperCase);
    transformer('hello everyone' , removeSpace)

    console.log('--eventlistener as a higher-order function--')

    const showMessage = function(){console.log('hello')}

    document.body.addEventListener('click' , showMessage);

    ['this is test one' , 'this is test two' , 'this is test three'].forEach(showMessage);

    console.log('--function returning function--')


    console.log('--functions returing functions--')
    // const greeting = (greet)=>{
    //     return (name)=>
    //         console.log(`${greet} ${name}`)
    // }//==
    const greeting = greet => name => console.log(`${greet} ${name}`)

    const greetingExample = greeting('Hey');// = return (name)=>{
                            // console.log(`${greet} ${name}`)}
    greetingExample('John');
    greeting('hello')('Saghar')//instead of using a variable
    greetingExample('Hau')
    greeting('hey')('Sara')