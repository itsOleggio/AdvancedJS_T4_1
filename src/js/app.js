export class Character{
    constructor(name, health){
        this.name = name,
        this.health = health
    }
}

export class Team{
    constructor(){
        this.members = new Set();
    }

    add(character){
        if(this.members.has(character)){
            throw new Error('Character уже создан');
        }
        this.members.add(character);
    }
    addAll(...character){
        character.forEach((character) => this.members.add(character));
    }
    toArray(){
        return Array.from(this.members);
    }
}

const player1 = new Character('Bobi', 100);
const player2 = new Character('Dobi', 100);

const team = new Team();

team.add(player1);
team.add(player2);
team.addAll(player1, player2);

console.log(team.toArray());


