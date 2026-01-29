import { Character, Team } from '../app';

let team;
let player1;
let player2;
let player3;

beforeEach(() => {
    team = new Team();

    player1 = new Character('Bobi', 100);
    player2 = new Character('Dobi', 100);
    player3 = new Character('Popi', 99);
});

test('Character add to team', () => {
    team.add(player1);
    team.add(player2);
    expect(team.toArray()).toEqual([player1, player2]);
})

test('Add all chatacters to team', () => {
    team.addAll(player1, player2, player3);
    expect(team.toArray()).toEqual([player1, player2, player3]);
})

test('Characters dont duplicated', () => {
    team.add(player1);
    team.add(player2);
    team.addAll(player1, player2);
    expect(team.toArray()).toEqual([player1, player2]);
});

test('Characters is already exist', () => {
    team.add(player1);
    expect(() => team.add(player1)).toThrow('Character уже создан');
})
