-- select nome, regiao, id from estados;


INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 29);

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niteroi', 695, 28);


INSERT INTO cidades (nome, area, estado_id)
VALUES ('Salvador', 435, (select id from estados where sigla = 'PE'));


select * from cidades


