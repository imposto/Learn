SELECT
    regiao as 'Região',
    sum(populacao) as Total
from estados
GROUP by regiao
order by Total desc