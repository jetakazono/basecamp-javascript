## Atividade 1

Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

_Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)_

### Solução 1 - Atividade 1
O método toLowerCase() retornará o valor da string que o chama convertido para letras minúsculas.
O método replace() retornará uma nova string com alguma ou todas as correspondências substituídas por aquilo que sugerirmos.
O método split() divide um objeto de string em um array de strings separando-a em substrings.
O método reverse() inverte um array. O primeiro elemento do array se torna o último e o último se torna o primeiro.
O método join() reúne todos os elementos do array em uma string.

### Solução 2 - Atividade 1
Verificamos o final de cada parte dividindo o número de iterações dentro do laço FOR pela metade (len/2).


----------------
## Atividade 2

Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo:
Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1
