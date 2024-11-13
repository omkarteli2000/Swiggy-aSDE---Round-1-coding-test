const Arena = require('../src/Arena');
const Player = require('../src/Player');

describe('Arena Class', () => {
  let playerA;
  let playerB;
  let arena;

  beforeEach(() => {
    playerA = new Player(50, 5, 10);
    playerB = new Player(100, 10, 5);
    arena = new Arena(playerA, playerB);
  });

  test('should start the game and reduce health on each attack', () => {
    const initialHealthA = playerA.health;
    const initialHealthB = playerB.health;
    
    arena.startMatch();

    expect(playerA.health).toBeLessThan(initialHealthA);
    expect(playerB.health).toBeLessThan(initialHealthB);
  });
});
