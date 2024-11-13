const Player = require('./Player');

class Arena {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  startMatch() {
    // Determine the order of attack (the player with lower health attacks first)
    let attacker = this.player1.health <= this.player2.health ? this.player1 : this.player2;
    let defender = attacker === this.player1 ? this.player2 : this.player1;

    while (this.player1.isAlive() && this.player2.isAlive()) {
      const { netDamage } = attacker.attackOpponent(defender);
      console.log(`Player ${attacker === this.player1 ? 'A' : 'B'} attacks with damage: ${netDamage}`);
      
      if (!defender.isAlive()) {
        console.log(`Player ${defender === this.player1 ? 'A' : 'B'} has been defeated!`);
        break;
      }

      // Swap roles for the next turn
      [attacker, defender] = [defender, attacker];
    }
  }
}

module.exports = Arena;
