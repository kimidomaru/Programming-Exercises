def e_hipotenusa(n):
    quadHip = n*n
    for i in range(1,n):
        for j in range(1,n):
            if(quadHip == (i * i) + (j * j)):
                return True
    return False

def soma_hipotenusas(n):
    soma = 0
    for i in range(1,n+1):
        if(e_hipotenusa(i)):
            soma = soma + i
    return soma
