create table if not exists cidades (
    id int UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id int UNSIGNED NOT NULL,
    area DECIMAL(10,2),
    PRIMARY KEY(id),
    FOREIGN KEY(estado_id) REFERENCES estados (id)



);



create table if not exists teste (
    id int UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);


DROP TABLE IF EXISTS teste;