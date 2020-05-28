n = input("Digite um número: ")
tamanho = len(n)
num = int(n)

i = 0
soma = 0

parteInteira = 0
casa = 0

while(i < tamanho):
    if(i == 0):
        casa = num % 10
        parteInteira = num // 10
    else:
        casa = parteInteira % 10
        parteInteira = parteInteira // 10
    #print(casa)
    soma += casa
    i = i+1

print("Soma: ",soma)
