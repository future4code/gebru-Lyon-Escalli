####################### EXERCÍCIO 01 #########################

a) Uma chave estrangeira é um recurso do SQL que permite relacionar elementos e duas tabelas ou mais.

b) 
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Estava legal, top!!",
    8,
	"001"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"002",
    "Podia ser melhor!",
    7,
	"002"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"003",
    "Otimo filme recomendo!",
    10,
	"003"
);

c) O SQL vai acusar um erro no qual não existe o id informado na tabela filme

d) ALTER TABLE Movie DROP COLUMN rating;

e) o SQL não irá apagar por conta da relação da foreign key; tem de apagar as avaliações relacionadas ao id do filme específico para conseguir apagar o filme.

####################### EXERCÍCIO 02 #########################

a) Essa tabela faz uma relação entre os atores e todos os filmes em que eles participaram / a mesma coisa ao contrário.

b) INSERT INTO MocieCast VALUES
('001', '001'), ('001','002'), ('001','003'), ('002','001'),
('002','002'), ('002','003');

c) O SQL vai acusar um erro de que não existe o id informado, consultado na relação da foreign key.

d) o SQL não irá apagar por conta da relação da foreign key; tem de apagar primeiro a participação do ator no elenco do filme para conseguir apagar o ator.

####################### EXERCÍCIO 02 #########################

a) é como se fosse um 'no qual', parecido com 'where'; ele vai buscar os resultados no qual tabela x corresponde a tabela y.

b) SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;


