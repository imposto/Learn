CREATE TABLE IF NOT EXISTS prefeitos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) not null,
    cidade_id int UNSIGNED,
    primary key (id),
    unique key (cidade_id),
    FOREIGN key (cidade_id) references cidades (id)

)