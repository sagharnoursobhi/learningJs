    const a = ['ali' , 'ali']
    const names=['name' , 'family' ]
    console.log(...a.entries())//[index , value] , [index , value]
    console.log([...a.entries()])// [[index , value] , [index , value]]
    const [x,y] = a;
    console.log('--and--')
    console.log(x,y)
    // const object = {
    //     [names[0]]:['ali'],
    //     [names[1]]:'hasani'
    // }
    // console.log('el')
    // for(const el of a)//it will return arrays of array
    // console.log(el)


    console.log('--and--')
    for(const[key , value] of a.entries()){//it will returns arrays elements
        console.log(`${key}:${value}`)
        console.log(`${[key , value]}`)
    }//iterable array
    console.log('--and--')
    const object2 = {
        name:['hey' , 'bye'],
        han:['salam' , 'buhg'],
        objectofObj:{
            el1:['wj1' , 'hgh2'],
            el2:'grgrgrgr',
            el3:['wj1' , 'hgh2']
        }
    }
    for(const h of Object.entries(object2.objectofObj))//[ el1 , ['wj1 , 'hgh2]] , [el2 , 'grgrgrgr'] , [el3 , ['wj1' , 'hgh2']]
    console.log(h)//it will show two arrays
    console.log([...Object.entries(object2.objectofObj)])//an array of array
    console.log(new Set([...Object.entries(object2.objectofObj)]))// set of an array
    console.log(new Map ([...new Set([...Object.entries(object2.objectofObj)])]))//{key=>value , key=>value , key=>value }
    console.log('--and--')
    for(const [value1 , value2] of Object.entries(object2) )
    console.log(value1 , value2)
    console.log('--and--')
    const d = [1,2]
    for(const [index1,index2] of d.entries())
    console.log(index1,index2)

    console.log('--map structure--')
    //Maps constructor//big different of maps and objects is that maps can have any type of keys even a number
    let key;
    let value
    let rest = new Map();
    rest.set(key , value);//set here is used to add new field to the map is sth like add in set method
    console.log(rest)
    rest.set('italiano' , 'pizza')
    console.log(rest)
    rest.set(1, 'hamintori');
    console.log(rest)
    //we can have multipe set at the same time
    rest.set(1 , 'Gulmasplan').set(2 , 'Hallonbergen').set('categories', ['pizza' , 'hamburger' , 'pasta'])
    .set(false , 'we are open').set(true , 'we are closed').set('open' , 11).set('close',23)
    console.log(rest)

    //for retriving data from map we use get(key)

    console.log(rest.get(1));
    console.log('--and--')
    //conditional type of retrieving from a map
    let time = 21
    console.log(rest.get(time >= rest.get('open') && time<=rest.get('close')))//true we are open , false we are closed

    console.log(`rest map size is: ${rest.size}`)
    rest.delete(1)
    console.log(rest)
    console.log(rest.has('open'))
    // rest.clear
    //for setting arrays into the map it must be defined in advance otherwise it will result in undefined error
    let arr = [1,2];
    rest.set(arr, 'test')
    console.log(rest.get(arr))
    console.log('--and--')
    //another and more simple way to create a map

    const restaurant = new Map([['open' , 11] , ['close' , 23] , [true , 'restaurant is open'] , [false, 'restaurant is closed'] , ['correct' , 3]])//an array of array
    console.log(restaurant)
    console.log('--and--')
    let test = {
        open: 11,
        close: 23
    }

    console.log(test)
    for(const [key , value] of Object.entries(test)){
        console.log(key , value)
    }

    console.log(Object.entries(test))//array of an array
    test = Object.entries(test);
    const test2 = new Map(test)
    console.log(test2)
    for(const [key , value] of test2){
        if(typeof value === 'number'){
            console.log( `restaurant is ${key}:${value}`)
        }
    }

    // let answer = Number(prompt('what is your answer'))
    let answer = 3;
    console.log(answer)
    console.log(restaurant.get(restaurant.get('correct') === answer))

    console.log('--and--')

    //converting map to array
    console.log([...restaurant])
    //the same for value and keys
    console.log(`keys of map of restaurant are :${[...restaurant.keys()]}`)
    console.log([...restaurant.keys()])
    console.log(`values of map of restaurant are :${[...restaurant.values()]}`)
    console.log([...restaurant.values()])


    console.log('--practice--')
    let myMap = new Map([[1,'jone'] , [2,'john'], [2,'john']]);
    console.log(myMap)//map = {a=>b,...}
    console.log('--and--')
    console.log([...myMap.entries()])//map = [{a=>b,...}]
    console.log('--and--')
    console.log(new Set(myMap)); //map = {[a,b] , ...[]}
    console.log([...new Set(myMap)])//array of array


    
