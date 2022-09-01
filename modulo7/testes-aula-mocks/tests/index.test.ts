import { char, Game } from "../src";

const game = new Game()

describe("Testar a execução do arquivo index.ts", () => {

    //a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, "". 
    test("Deve retornar falso para nome com string vazia", () => {
        const result = game.validateCharacter({
          name: "",
          life: 1500,
          strenght: 300,
          defense: 500,
        });
    
        expect(result).toBe(false);
    });

    //b. Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero. 
    test("Deve retornar falso para vida igual a zero", () => {
        const result = game.validateCharacter({
          name: "Char",
          life: 0,
          strenght: 300,
          defense: 500,
        });
    
        expect(result).toBe(false);
    });

    //c. Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero.
    test("Deve retornar falso para força igual a zero", () => {
        const result = game.validateCharacter({
          name: "Char",
          life: 1500,
          strenght: 0,
          defense: 500,
        });
    
        expect(result).toBe(false);
    });

    //d. Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero. 
    test("Deve retornar falso para defesa igual a zero", () => {
        const result = game.validateCharacter({
          name: "Char",
          life: 1500,
          strenght: 300,
          defense: 0,
        });
    
        expect(result).toBe(false);
    });

    //e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo.
    test("Deve retornar falso para defesa com valor negativo", () => {
        const result = game.validateCharacter({
          name: "Char",
          life: 1500,
          strenght: 300,
          defense: -500,
        });
    
        expect(result).toBe(false);
    });

    //f. Crie um teste que verifique o comportamento da função com um personagem com as informações validas

    test("Deve retornar verdadeiro com formulário completo", () => {
        const result = game.validateCharacter({
          name: "Char",
          life: 1500,
          strenght: 300,
          defense: 500,
        });
    
        expect(result).toBe(true);
    });

    //4.a) Mock deve ser criado da validadeCharacter, pois é chamada pela performAttack

    test("Criando versão de mock verdadeiro", () => {
        const validatorMock = jest.fn(() => {
            return true
        });
    });

    test("Criando versão de mock false", () => {
        const validatorMock = jest.fn(() => {
            return false
        });

    });

    test("Realizando um ataque", () => {
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: char = {
          name: "Char 01",
          life: 1500,
          defense: 200,
          strenght: 600,
        };
    
        const defender: char = {
          name: "char 02",
          life: 1500,
          defense: 400,
          strenght: 800,
        };
    
        game.performAttackSecond(attacker, defender, validatorMock as any);
    
        expect(defender.life).toEqual(1300);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
      });

      test("Retornar o erro de personagem inválido", () => {
        const validatorMock = jest.fn(() => {
          return false;
        });
    
        const attacker: char = {
          name: "",
          life: 1500,
          defense: 200,
          strenght: 600,
        };
    
        const defender: char = {
          name: "Char 02",
          life: 1500,
          defense: 400,
          strenght: 800,
        };
    
        try {
            game.performAttackSecond(attacker, defender, validatorMock as any);
        } catch (err) {
          expect(err.message).toBe("Personagem inválido");
          expect(validatorMock).toHaveBeenCalled();
          expect(validatorMock).toHaveBeenCalledTimes(1);
          expect(validatorMock).toHaveReturnedTimes(1);
        }
      });

})