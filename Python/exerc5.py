# questao 5 #

n1 = float(input("Digite o primeiro numero: "))
sinal = input("Digite o sinal da operacao: ")
n2 = float(input("Digite o segundo numero: "))
if(sinal=='+'):
    print(n1+n2)
elif(sinal=='-'):
    print(n1-n2)
elif(sinal=='x'):
    print(n1*n2)
elif(sinal=='/'):
    if(n2!=0):
        print(n1/n2)
    else:
        print("Divisao invalida")
else:
    print("Operador invalido")
