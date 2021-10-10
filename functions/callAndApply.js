 

    const Luftansa = {
        code: 'GTD12',
        airline: 'Luftansa',
        booking:[],
        book(flightNum , name){
            console.log(`${name} booked a ticket on ${this.airline} flight
            ${this.code} with number : ${flightNum}`);
            this.booking.push({ name:`${name}`, code:`${this.code}` , airline:`${this.airline}` , flightNum:`${flightNum}`})
        }
    }
   
    Luftansa.book('Soroush' , 'AB1234');
    console.log(Luftansa)//if we call the function from its own object parent

    const mybook = Luftansa.book//mybook here is an object of an object
    //book('saghar' , '75657') => does not work
    
    const eurowing = {
        airline:'Eurowing',
        code: 'HYD12',
        booking:[]
    }

    mybook.call(eurowing , 'sara' , '16748new')//call method allows for a function belonging to an object to be assigned and called for a different object
    
    //first item is what we want this keyword point to = eurowing
    console.log(eurowing)

    console.log('--call method for luftansa--')
    mybook.call(Luftansa , 0000 , 'luftanza')
    Luftansa.book(0000 , 'luftansa')
    console.log(Luftansa)

    const swiss = {
        airline:'Swiss',
        code: 'J678',
        booking : []
    }//name of properties must be the same

    mybook.call(swiss , 'John' , '1234H')
    console.log(swiss)
    //apply method will do the same but it receives an array of the inputs of the function inside the object
    const german = {
        airline:'German airline',
        code:'GJH767',
        booking: []
    }
    const flightData = ['Dolores Jasil' , 12345];
    mybook.call(german , ...flightData)//mybook.apply(german , flightData)
    console.log(german)

    //bind method
    const bookEw = mybook.bind(eurowing); //create a new function that this will point to => const a ={} , book.call(a , '' , number)
    bookEw('Alex' , 13342)
    console.log(eurowing)
    bookEw('Jenus' , 43536);
    console.log(eurowing)
    const bookGerman = mybook.bind(german)
    bookGerman('ali' , 44444)
    console.log(german)
    mybook.call(german , 'Stephan' , 55555)//
    console.log(german)
    console.log('--create a function for a specific flight number of an airline--')
    const bookEw23 = mybook.bind(eurowing , 23545);//it is called partial application
    bookEw23('Saghar')
    bookEw23('Jesica')
    console.log(eurowing)

    // with event listener
    Luftansa.planes = 300;
    
    Luftansa.buyPlane = function(){//function property
        console.log(this);//this here points to luftansa
        this.planes ++;
        console.log(this.planes)
    }
    Luftansa.buyPlane();
    
    const america = {
        code:'43535',
        airline:'united state',
        booking:[]
    }
    mybook.call(america , 1345 , 'sahah' )
    console.log(america)
    const bookAm = mybook.bind(america)
    bookAm(1435, 'alireza')
    console.log(america)

    Luftansa.newFunctionProperty = function(){
        console.log(this)
        console.log(this.code)
    }
    
    document.querySelector('.btn').addEventListener('click' , Luftansa.buyPlane.bind(Luftansa))//will return a function that this points to it

    console.log('--using partial application with bind method--')

    // const addTax = (value , rate) => value + value*rate
    // console.log(addTax(200 , 0.2))
    // const vatTax = addTax.bind(null , 1)// it is not gonna point to anything
    // console.log(vatTax(0.3));
    // console.log(vatTax(2)); ===
    
    // const addTax = value => rate => value + value * rate; ===
    // console.log(addTax(0.5)(0.5))
    
    const addTax = (value)=>{
        return function(rate){
            return value + value * rate
        }
    }
    const varTax = addTax(3)
    console.log(varTax(1))

    let x = prompt('enter your number')
    console.log(typeof(x))


    //closures structure
    const firstFunction = function(){
        passengerCount = 0;
        return function(){
            passengerCount++
            console.log(`${passengerCount} passenger`)
        }
    }

    const booking = firstFunction();//firstFunction will execute and then disapear but the booking function has access to the variables that is defined in their birth function
    booking()
    booking()
    booking()

    let f;
    const g = function(){//closure(g)
        let a = 20;
        f = function(){//born
            console.log(a * 2)
        }
    }

    const h = function(){
        let b = 30;
        f = function(){//reborn
            console.log(b*2)
        }
    }

    g()
    f()
    console.dir(f)//each time of calling old closure will be disappeared
    
    //reassigning f function
    h()
    f()

    console.dir(f)//inspect variable environment

    //boarding n passengers after wait milliseconds time
    const boardingPassengers = function(n , wait){
        let passPerGroup = n/3//three group by default
        setTimeout(function(){
            console.log(`We are boarding ${n} right now`)
            console.log(`Each group has ${passPerGroup} passengers`)
        }, wait * 1000)

        console.log(`boarding will start after ${wait} seconds`)
    }
    // const passPerGroup = 24;//if have this value and and another value inside function, the value inside the function will be asigned
    boardingPassengers(180 , 3)//skip settimeout and run last console.log then after 3 second settimeout will be executed
    
    