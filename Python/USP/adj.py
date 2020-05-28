num = input("Insira um número: ")
numero = int(num)
tamanho = len(num)
i = 0
casa_anterior = 0
casa_atual = 0
resto = numero
adj = True

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
    print("Tem adjacente!")
else:
    print("Não tem adjacente!")
