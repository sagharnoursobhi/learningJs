var canvas1=document.createElement('canvas');
        canvas1.width=350;
        canvas1.height=500;
        var ctx=canvas1.getContext('2d');
        ctx.font='30px cursive';
        ctx.fillText('hello canvas!',50,50);//don't use equality sign after filltext
        document.body.appendChild(canvas1);
        
        document.querySelector('#btn1').addEventListener('click',()=>{
            alert('hello');
        });
        
        document.querySelector('#btn2').addEventListener('click',()=>{
            alert('bye');
        });
        
        document.getElementById('btn3').addEventListener('click',()=>{
            alert('hello and bye');
        });
        
        // document.querySelector('#img1').addEventListener('click',()=>{
        //     var image= document.createElement('img');
        //     image.src='Google-logo.png';
        //     document.body.appendChild('image');
        //     link(image);
        //  });
        function image1()
        {
        var a1= document.createElement('a');
        a1.href= 'https://google.com';
        var image= document.createElement('img');
        image.src='Google-logo.png';
        //var image= document.getElementById('dv1').getElementsByTagName('div')[0];
        a1.appendChild(image);
        document.body.appendChild(a1);
        }
        // function create(){
        // var link=document.createElement('a');
        //     //link.type=img;
        //     link.href='h2.html';
        //     document.body.appendChild(link);    
        // }
        document.querySelector('#b1').addEventListener('click', ()=>
        {
            var number= document.getElementsByTagName('input')[0].value;

            for (let i=0; i<=number; i++)
            {
                if (isEven(i) === true)
                {
                    console.log(i);
                }
            }
        });

        document.querySelector('#b2').addEventListener('click', ()=>
        {
            var number= document.getElementsByTagName('input')[0].value;

            for (let i=0; i<=number; i++)
            {
                if (isEven(i) === false)
                {
                    console.log(i);
                }
            }
        });

        function isEven(num)
        {
            if (num % 2 ===0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        let x = [2 , 1];

        document.getElementById('b3').addEventListener('click' , ()=>{
            if ( Array.isArray(x))//recognizing an array
                {
                    let y = document.createElement('P');
                    y.innerText = 'hello';
                    document.body.appendChild(y);
                }
            
        })
        let p = document.createElement('P');
        p.innerHTML = x.toString();
        document.body.appendChild(p);
        let t = ['ali' , 'zahra' , 'John'];
        console.log(Array.isArray(t));
        p.innerHTML = t.toString();
        document.body.appendChild(p);
        let div = document.createElement('DIV');
        let par = document.createElement('P');
        par.innerText = 'Alireza'
        div.innerHTML= 'Hello';
        div.append(par);
        document.body.appendChild(div);
        let par2 = document.createElement('P');
        let div2 = document.createElement('DIV');
        par2.innerText = 'hello'
        div2.innerText = 'bye'
        par2.append(div2);
        document.body.appendChild(par2);
        t.pop();
        document.getElementById('demo2').innerHTML = t
        t.push('asghar')
        //shift removes first one but pop removes last one
        t.shift()
        console.log(t)
        t.unshift('john')
        console.log(t)
        let newArray = ['hello' , 'bye' , 'thanks']
        newArray[0] = '';//this just set the elemet an empty input 
        console.log(newArray)
        delete newArray[2];
        console.log(newArray)
        console.log(newArray.length)
        console.log()
        newArray = ['hello' , 'bye' , 'thanks']
        console.log(newArray)
        newArray.splice(1  , 'ali' , 'ahmad')
        console.log(newArray)
        newArray.splice(0 , 1)
        console.log(newArray)//nothing to add
        let array3= [1 , 3 , 4]
        let result = array3.concat(t,x)
        console.log(result);
        class CarAge {
            constructor(name , year){
                this.year=year;
                this.name=name;
            }
                
              
                 get getter(){
                    let curretDate = new Date();
                    let carAge = this.name + '<br>' + (curretDate.getFullYear() - this.year);
                    return carAge
                }
        }

        let myCar = new CarAge('Ford' , 2017);
        document.getElementById('car').innerHTML = 'this is a  '+ myCar.getter + ' years old'

        class LearnStatic {
            constructor(width , height){
                this.width =width
                this.height = height
            }
        }