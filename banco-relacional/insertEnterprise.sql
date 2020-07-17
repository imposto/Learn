INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 956782983832),
    ('Vale', 956782983832),
    ('Cielo', 956782983832);


desc empresas;
desc prefeitos;
select * from empresas;
select * from cidades;


INSERT INTO empresas_unidades
    (empresas_id, cidade, sede)
VALUES
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);