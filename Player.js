class Player {
  constructor(health, strength, attack) {
    this.health = health;
    this.strength = strength;
    this.attack = attack;
  }

  rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Rolls a 6-sided die
  }

  attackOpponent(defender) {
    const attackRoll = this.rollDie();
    const defendRoll = defender.rollDie();
    
    const damage = this.attack * attackRoll; // Attacker's damage
    const defense = defender.strength * defendRoll; // Defender's defense

    const netDamage = Math.max(damage - defense, 0); // Damage can't be negative
    defender.takeDamage(netDamage);
    
    return { damage, defense, netDamage };
  }

  takeDamage(damage) {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  isAlive() {
    return this.health > 0;
  }
}

module.exports = Player;
