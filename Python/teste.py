import math

# questao 1#
'''
idade = input("Digite a idade: ")
if(int(idade)>=18):
    print("Maior de idade")
else:
    print("Menor de idade")
'''

#questao 2#
'''
nota1 = input("Digite a primeira nota: ")
nota2 = input("Digite a segunda nota: ")
media = (float(nota1)+float(nota2))/2
print(media)
if(media>=6.0):
    print("Aprovado!")
else:
    print("Reprovado!")
'''

#questao 3#
'''
a = input("Digite o coeficiente a:")
b = input("Digite o coeficiente b:")
c = input("Digite o coeficiente c:")
a = int(a)
b = int(b)
c = int(c)
delta = (b*b)-4*a*c
if (delta<0):
    print("Nao ha raiz real")
elif (delta==0):
    x1 = (b*-1 + math.sqrt(delta))/2*a
    print("As raizes sao: ",x1)
else:
    x1 = (b*-1 + math.sqrt(delta))/2*a
    x2 = (b*-1 - math.sqrt(delta))/2*a
    print("As raizes sao: ",x1 , x2)
'''

# questao 4 #
'''
lista = [58,4,3, 3, 28]
lista.sort()
print(lista)
'''

# questao 5 #
'''
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
'''
