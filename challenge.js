let game = {
    team1:'Bayernmoonich ',
    team2:'Barselona',
    players: [
        ['Antony', 'Ananon', 'Jack', 'Koman'],
        // BayernMoonich: {
        //     fl_playes: ['Stephan', 'James', 'Jonus'],
        //     gk_one: 'John',
        //     substitude: ['Alex', 'Animes'],
        //     originalPlayers: ['Stephan', 'James', 'Jonus']
        // },
        // Barselona: {
        //     fl_players: ,
        //     gk_one: 'Antony'
        // },
         ['John', 'Stephan', 'James', 'Jonus']
    ],
    gk_1:'Antony',
    gk_2:'John',
    all_players:['Antony', 'Ananon', 'Jack', 'Koman', 'John', 'Stephan', 'James', 'Jonus'],

}

const myfunction = (...items)=>{
    for(let i=0; i<items.length; i++)
    console.log(items[i])

}
myfunction(game.teams.BayernMoonich.fl_playes);