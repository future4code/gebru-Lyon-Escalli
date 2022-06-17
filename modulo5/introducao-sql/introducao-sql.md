### Exercício 1
a) Varchar indica que será usado strings nesta coluna; primary key indica que a coluna id receberá valores únicos de identificação, not null indica que o campo é de preenchimento obrigatório, date indica valor em formato de data.

b) o comando SHOW DATABASES mostra a base de dados cadastradas no MySql Workbench; o comando SHOW TABLES mostra todas as tabelas que estão cadastradas em cada base de dados.


c) DESCRIBE Actor mostra as informações de construção da tabela, como nome das colunas e os tipos de valores que cada uma está programada para receber.


### Exercício 2

a)

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200.000,
  "1963-08-23", 
  "female"
);
```

b) Erro: "Entrada duplicada para a chave primária 002". Já existe dados cadastrados nesta chave primária. O número da chave primária deve ser único na tabela.

c) Erro acontece porque faltam dados no campo onde são informadas as colunas. A correção é:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) Erro acontece pois na criação da tabela a coluna nome não recebeu um valor padrão de default para ser preenchido caso não seja informado, e esta coluna tem preenchimento obrigatório. A correção é:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Nome Genérico",
  400000,
  "1949-04-18", 
  "male"
);
```

e) Erro acontece pois não foi informada a data dentro de aspas duplas. A correção é:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Rodrigo Ferrato",
  5000000,
  "1989-05-15", 
  "male"
);
```

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Adriana Carvalho",
  7000000,
  "1979-11-10", 
  "female"
);
```

### Exercício 3

a) SELECT id, name from Actor WHERE gender = "female"

b) SELECT salary from Actor WHERE name = "Tony Ramos"

c) SELECT * from Actor WHERE gender = "invalid" / o resultado retorna uma tabela com o titulo das colunas e a parte inferior vazia, pois não há usuários cadastrados com sexo considerádo inválido.

d) SELECT id, name, salary from Actor WHERE salary <= 500000

e) Não existe coluna cadastrada com entrada de 'nome', ela está cadastrada no banco como 'name'. A correção da query é:  SELECT id, name from Actor WHERE id = "002"
