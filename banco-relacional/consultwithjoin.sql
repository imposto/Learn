-- e, c são apelidos 
select e.nome, c.nome, regiao from estados e, cidades c where e.id = c.estado_id;

select 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
from estados e 
inner join cidades c on e.id = estado_id