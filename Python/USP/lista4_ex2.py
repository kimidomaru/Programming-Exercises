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


def maior_primo(n):
    maior = 0
    for i in range(n, 1, -1):
        if (ePrimo(i)):
            if(maior < i):
                maior = i
    return maior
