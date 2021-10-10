    let myString = 'hello everytne'
    const ariline = 'TAP AIR Portugal';
    const plane = 'B120'
    console.log(ariline.lastIndexOf('r'))
    console.log(plane.length)
    console.log('ali'.lastIndexOf('a'))
    console.log(myString[0]);
    console.log(myString.length)
    console.log(myString.lastIndexOf('r'));
    console.log(myString.indexOf('l'));
    console.log('amazing'[0]);
    console.log(myString.slice(5))//start from 5 index
    console.log(myString.slice(1,4))//start from one end before 4(character number four will not be shown) 
    console.log('--and--')
    console.log(myString.slice(myString.indexOf(' ') ,myString.indexOf('y')))
    console.log(myString.slice(1,-1))//reverse

    console.log('--and--')
    const middleSeat = (seat)=>{
        if(seat.slice(-1) === 'e' || seat.slice(-1)==='f'){
            console.log('you are in the middle seat' )
        }
        else{
            console.log('you got lucky')
        }
    }
    middleSeat('11b')
    middleSeat('12c')
    middleSeat('11e')


    console.log('--and--')
    const passenger = 'sAGHar';
    const passengerLowercase= passenger.toLowerCase()
    const passengerCorrect = passengerLowercase[0].toUpperCase() + passengerLowercase.slice(1)
    console.log(passengerCorrect);

    console.log('--and--substring')
    const newstring = 'this is a new string'
    console.log(newstring.slice(5))
    console.log(newstring.slice(3,6))//from index 3 to 6-1(before 6)//lenght of a newstring created by slice(a,b)= b-a
    console.log(newstring.slice(0 , newstring.indexOf(' ')));
    console.log(newstring.slice(newstring.lastIndexOf(' ') + 1))//1 for removing space
    console.log(newstring.slice(1,-4));//- starts from end

    console.log('--how javascript behaves behind the scene of a string and its methods');
    console.log(new String('John Smith'))
    console.log(typeof new String('John Smith'));//javascript converts a new string to an object behind the scene
    console.log(typeof new String('John Smith').slice(0 , -3))
    console.log(newstring.toLowerCase())
    console.log(newstring.toUpperCase());
    console.log('fixing the first letter of a name to uppercase')
    const passengerName = 'sAgHar';
    const passengerToLower = passenger.toLowerCase();
    const passengerTrue = passengerToLower[0].toUpperCase() + passengerLowercase.slice(1);
    console.log(passengerTrue)

    const returnCorrectName = (name)=>{
        const passengerToLower = name.toLowerCase();
        const passengerTrue = passengerToLower[0].toUpperCase() + passengerToLower.slice(1);
        console.log(passengerTrue)
    }
    
    returnCorrectName('aliReZa')

    const correctEmail = (email)=>{
        // const emailTrimmed = email.trim();
        // const emailCorrected = emailTrimmed.toLowerCase();
        // console.log(emailCorrected) ===
        const correctedEmail = email.trim().toLowerCase()
        console.log(correctedEmail)
    }

    correctEmail('   \n hellomy@yahoo.com   ');
    console.log('--replacing in strings--')
    const price = '123,45£';
    console.log(price)
    const priceToEuro = price.replace('£' , '$').replace(',' , '.')//each replace method replace only first occurrence of the value 
    console.log(priceToEuro)
    console.log('All passengers come to boarding door 23. Boarding door 23'.replace('door' , 'gate'))

    //regular expression to target to all value of door
    console.log('All passengers come to boarding door 23. Boarding door 23'.replace(/door/g , 'gate'))//g means global

    console.log('--strings logical methods true or false--')
    console.log('AB34a airline'.includes('AB34a'));
    console.log('AB34a airline'.includes('Boeing'));
    console.log('Airbus AE32'.startsWith('Air'));
    const newAriline = 'AB342 3454'
    if(newAriline.startsWith('AB') && newAriline.endsWith('4')){
        console.log('part of the new airline family')
    }
    console.log('--which passengers will be allowed on board')
    
    const onboardAllowed = (item)=>{
        const baggage = item.toLowerCase();
        if(baggage.includes('knife') || baggage.includes('gun')){
            console.log('You are not allowed on board')
        }
        else{
            console.log('Welcome aboard!')
        }
    }
    onboardAllowed('I have some clOths, a cellphone and a pocket')
    onboardAllowed('I have some cloths, a Gun and some snacks')
    onboardAllowed('I have a Knife and a cellphone')

    console.log('--creating an array of a string by using split method--')
    const arrayFromObj = 'John Smith'.split(' ')
    console.log(arrayFromObj)
    console.log('Hello+I+am+junior+developer!'.split('+'));
    const [firstName , lastName] = 'John Smith'.split(' ')
    console.log(firstName , lastName)
    console.log('--join is the opposite of split--')
    const newstringOfarray = ['Mr.' , firstName ,lastName.toUpperCase()].join(' ')
    console.log(newstringOfarray)
    console.log(newArrayOfObj.split('M'))
    const [new1 , new2 , new3] = newArrayOfObj.split(' ');
    console.log(new1 , new2 , new3)
    const newName = [new1 , new2.toLocaleUpperCase() , new3.toLowerCase()].join('+')
    console.log(newName)

    const capitalizedNames = (name)=>{
        const names = name.split(' ');
        const nameUpper = [];
        for(const n of names){
            nameUpper.push(n[0].toUpperCase() + n.slice(1))
        }
        console.log(nameUpper.join(' '));
        console.log(typeof nameUpper.join(' '))
    }
    let a = [ 'saghar noursobhi esfahani', 'gsyhdhhd hshsgdg jfh' , 'hhghhg trggrg gdffdfd']
    const myFunction = (a)=>{
       a.forEach(element => {
           capitalizedNames(element)
       });
    }
    myFunction(a)
    
    console.log('--padding--')
    console.log('saghar'.padStart(26 , '+').padEnd(35 , '+'))
    console.log('saghar'.padEnd(26 , '+'))

    console.log('--mask the first 8 characters of a credit card--')

    const creditCardMask = (number)=>{
        const str = String(number)// = number + ''
        const lastStrChar = str.slice(-4);
        return(lastStrChar.padStart(str.length , '+'))
    }

    console.log(creditCardMask(34535553547747))
    console.log(creditCardMask('66458868868645454'));//no difference it is number or string of number

    console.log('--repeat method--')
    const repeatBadWeather = (n)=>{
        console.log(`There are ${n} airplane(s) in line ${'✈️'.repeat(n)}`)
    }
    repeatBadWeather(5)
    
 