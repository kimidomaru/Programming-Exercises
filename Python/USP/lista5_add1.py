def ePrimo(k):
    i = 2
    mult = 0
    while(i < k and mult == 0):
        if(k % i == 0):
            mult = mult+1
        i = i+1
    if(mult == 0):
        return True
    else:
        return False

def n_primos(n):
    soma = 0
    for i in range(2,n+1):
        if(ePrimo(i)):
            soma = soma+1
    return soma
