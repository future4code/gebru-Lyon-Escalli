
export interface char {
    name: string,
    life: number,
    strenght: number,
    defense: number
}

export class Game {

    public validateCharacter = (character: char): boolean => {
        if (!character.name ||
            character.life === undefined || 
            character.strenght === undefined ||
            character.defense === undefined
          ) {
            return false;
          }
        
          if (character.life <=0 || 
            character.strenght <=0 ||
            character.defense <=0) {
            return false;
          }
        
          return true;
    }

    public performAttack = (attacker: char, defender: char) => {
        if (!this.validateCharacter(attacker) || !this.validateCharacter(defender)) {
          throw new Error("Personagem inválido");
        }
      
        if (attacker.strenght > defender.defense) {
          defender.life -= attacker.strenght - defender.defense;
        }
    };

    public performAttackSecond = (
        attacker: char,
        defender: char,
        validator: (input: char) => boolean
      ) => {
        if (!validator(attacker) || !validator(defender)) {
          throw new Error("Personagem inválido");
        }
      
        if (attacker.strenght > defender.defense) {
          defender.life -= attacker.strenght - defender.defense;
        }
      };

    
}