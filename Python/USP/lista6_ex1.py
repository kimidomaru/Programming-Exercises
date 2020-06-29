def remove_repetidos(lista):
    lista.sort()
    noRep = []
    aux = lista[0]
    noRep.append(aux)
    for num in lista:
        if(num != aux):
            aux = num
            noRep.append(aux)
    return noRep
