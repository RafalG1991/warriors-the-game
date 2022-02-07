import {WarriorRecord} from "../records/warrior.record";

enum ActiveWarrior {
    First,
    Second,
}

export class Arena {
    activeWarrior: ActiveWarrior = ActiveWarrior.Second;

    constructor(
        public warrior1: WarriorRecord,
        public warrior2: WarriorRecord,
        public battleLog: string[],
    ) {}

    round(): WarriorRecord | null {
        const attacker = this.activeWarrior === ActiveWarrior.First ? this.warrior1 : this.warrior2;
        const attacked = this.activeWarrior === ActiveWarrior.First ? this.warrior2 : this.warrior1;

        const attackingHitPoints = attacker.str;
        const attackedOldHp = attacked.hp;

        this.battleLog.push(`${attacker.name} is now attacking! ${attacked.name} is defending!`);
        if(attacked.def+attacked.agi>attackingHitPoints) {
            this.battleLog.push(`${attacked.name} is very agile and will try to dodge ${attacker.name}'s attack!`);
            const diceRoll = Math.floor( Math.random() * 6 ) +1;
            if(diceRoll >= 5) {
                this.battleLog.push(`${attacked.name} has dodged the attack! It's super effective!`);
            } else {
                this.battleLog.push(`${attacked.name} has failed the dodge!`);
                this.battleLog.push(`${attacker.name} is attacking with ${attackingHitPoints} hit points!`);
                attacked.hp = attackedOldHp - attackingHitPoints;
                this.battleLog.push(`${attacked.name} has ${attacked.hp} HP left!`);
            }
        } else {
            this.battleLog.push(`${attacker.name} is attacking with ${attackingHitPoints}!`);
            attacked.hp = attackedOldHp - attackingHitPoints;
            this.battleLog.push(`${attacked.name} has ${attacked.hp} HP left!`);
        }

        this.activeWarrior = this.activeWarrior === ActiveWarrior.First ? ActiveWarrior.Second : ActiveWarrior.First;

        if (attacked.hp <= 0) {
            this.battleLog.push(`${attacked.name} has lost and gone to the Valhalla!`);
            return attacker;
        }

        return null;
    }

    fight(): WarriorRecord {
        let winner: WarriorRecord | null;
        do {
            winner = this.round();
        } while (winner === null);
        return winner;
    }
}