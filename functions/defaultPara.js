    
    const bookings = [] 
    const bookingFlight = (number , passengers= 1 , price= 199 * passengers)=>{
        //ES5
        //passengers = passengers || 1
        //price = price || 199
        const booking = {number , passengers , price}
        bookings.push(booking);
        console.log(booking);
        console.log(bookings)
    }

    bookingFlight('AB123');
    bookingFlight('BG123');
    bookingFlight('SE823' , 2 , 280);
    //to skip one parameter
    bookingFlight('BG123' , undefined , 1000);

    console.log('--how passing arguments work--')
    const flightNum = 'HG6454'
    const myObject = {
        name:'saghar',
        passport:13426273598
    }

    const checkIn = function(flight , object){
        flight='HJ7675'//just copied flight = flightNum
        object.name = 'Mr.' + object.name;//change the value in hip memory
        if(object.passport === 13426273598)
        console.log('hello')
        else
        console.log('bye')
    }

    checkIn(flightNum,myObject)
    console.log(flightNum)
    console.log(myObject)