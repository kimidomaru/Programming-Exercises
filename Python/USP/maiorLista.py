def maior_elemento(lista):
    maior = lista[0]
    for num in lista:
        if(num > maior):
            maior = num
    return maior
