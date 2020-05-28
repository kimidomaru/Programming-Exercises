n = int(input("Digite o valor de n: "))

soma = 0

if n<=1:
    soma = 1
else:
    i = n - 1
    soma = n
    while i > 1:
        soma *= i
        i = i-1
        
print(soma)
