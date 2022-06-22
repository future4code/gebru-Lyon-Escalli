### Exercício 1

a) Exclui a coluna salary da tabela Actor.

b) Altera a coluna gender para aceitar strings de até 6 caracteres.

c) ALTER TABLE Actor MODIFY gender VARCHAR(100);

### Exercício 2

a) UPDATE Actor
SET name = "Outro Nome", birth_date = "1950-10-20"
WHERE id = 003;

b) UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005"

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005"

c) UPDATE Actor
SET 
name = "Ricardo Braga",
birth_date = "2002-12-15",
salary = 500000,
gender = "male"
WHERE id = "005";

d) O programa informa que não é posivel adcionar o valor pois não existe coluna.

### Exercício 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

### Exercício 4

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;

### Exercício 5

a) Mostra a contagem do dos atores e atrizes agrupadas por gênero.

b) SELECT id, name FROM Actor
ORDER BY name DESC;

c) SELECT * FROM Actor
ORDER BY salary;

d) SELECT * FROM Actor
ORDER BY salary
LIMIT 3;

e) SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;

### Exercício 6

a) ALTER TABLE Movie ADD playing_limit_date DATE;

b) ALTER TABLE Movie CHANGE rating rating FLOAT;

c) UPDATE Movie
SET playing_limit_date = "2022-02-15"
WHERE id = "001"

UPDATE Movie
SET playing_limit_date = "2022-07-15"
WHERE id = "002"

d) DELETE FROM Movie WHERE id = "001"
Após tentar atualizar a sinopse o programa acusa erro, pois informa que não exite filme cadastrado no id indicado.



