num = input("Digite um número inteiro: ")
numero = int(num)
tamanho = len(num)
i = 0
casa_anterior = -1
casa_atual = -1
resto = numero
adj = False

while(i < tamanho):
    casa_anterior = casa_atual
    casa_atual = resto % 10
    resto = resto // 10
    if casa_anterior != casa_atual:
        adj = False
    else:
        adj = True
        break
    i = i+1

if(adj):
    print("sim")
else:
    print("não")
