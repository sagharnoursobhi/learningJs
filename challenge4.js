
    let textEra = document.createElement('textarea');
    document.body.append(textEra);
    let myButton = document.createElement('BUTTON');
    document.body.append(myButton);
    myButton.innerHTML = 'button';

    myButton.addEventListener('click' , ()=>{
        const text = textEra.value;
        const rows = text.split('\n')
        for(const [i , row] of rows.entries()){
            const [first , second] = row.toLowerCase().trim().split('_');
            const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`
            console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`)
        }
    })

    
// underscore_case
//  first_name
//  Some_Variable
//    calculate_AGE
//  delayed_departure

