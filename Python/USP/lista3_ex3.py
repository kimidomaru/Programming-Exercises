n = input("Digite um número inteiro: ")
tam = len(n)
num = int(n)

soma = i = casa = 0
resto = num

while i < tam:
    casa = resto % 10
    resto = resto // 10
    soma += casa
    i = i+1

print(soma)

