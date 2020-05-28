qtd = int(input("Insira a qtd de numeros: "))

for i in range(1, qtd+1):
    fat = 1
    n = int(input("Insira o numero:"))
    while (n > 1):
        fat *= n
        n = n-1
    print(fat)
