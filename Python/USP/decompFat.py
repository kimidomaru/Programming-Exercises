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

n = int(input("Insira um numero inteiro: "))

while(n > 1):
    divisor = False
    i = 2
    while(not divisor):
        if(ePrimo(i)):
            if(n % i == 0):
                n = n / i
                print(i, end=" ")
                divisor = True
        i = i+1
    
