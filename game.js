const Player = require('./Player');
const Arena = require('./Arena');

// Example players
const playerA = new Player(50, 5, 10);
const playerB = new Player(100, 10, 5);

// Start the game in the arena
const arena = new Arena(playerA, playerB);
arena.startMatch();
