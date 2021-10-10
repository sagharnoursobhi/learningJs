
    const poll = {
        question: "What is your favourite programming language?", 
        options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
        // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
        answers: new Array(4).fill(0),
        registerNumber(){
            const answer = Number(prompt(`${this.question}${this.options.join('\n')}\n (Write your answer)` , 'enter' ))
            typeof answer==='number' && answer<=this.answers.length && this.answers[answer]++
            this.displayResult()
            this.displayResult('string')
            
            },
            displayResult(type = 'array'){//input parameter of displayResult is an array by default
                if(type === 'array')//if is a conditional command so we don't need typeof
                {
                    console.log(this.answers)
                } else if(type === 'string'){
                    console.log(`result is : ${this.answers.join(', ')}`)
                }
            }
        };
        
       document.querySelector('.btn').addEventListener('click' , poll.registerNumber.bind(poll))
       
        
        
    
       