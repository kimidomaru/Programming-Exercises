#questao 3#

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
