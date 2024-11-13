const Player = require('../src/Player');

describe('Player Class', () => {
  let playerA;
  let playerB;

  beforeEach(() => {
    playerA = new Player(50, 5, 10);
    playerB = new Player(100, 10, 5);
  });

  test('should correctly apply damage and reduce health', () => {
    playerA.takeDamage(20);
    expect(playerA.health).toBe(30);
  });

  test('should not let health go below zero', () => {
    playerA.takeDamage(60);
    expect(playerA.health).toBe(0);
  });

  test('should return true if alive', () => {
    expect(playerA.isAlive()).toBe(true);
  });

  test('should return false if dead', () => {
    playerA.takeDamage(50);
    expect(playerA.isAlive()).toBe(false);
  });
});
