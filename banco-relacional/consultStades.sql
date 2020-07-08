-- ALL  
select * from estados;
-- Some Colums 
select nome, sigla from estados;
-- Some Labels, replace
select nome, sigla as 'Nome do Estado' from estados
-- condition select 
where regiao = 'Sul'

-- condition 2 
select nome, sigla, populacao from estados 
    -- condicao 
    where populacao >= 10
    -- oder
    order by populacao desc -- ORDER DESCENT