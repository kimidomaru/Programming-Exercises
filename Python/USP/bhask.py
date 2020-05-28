import math

a = float(input("Insira o a da equação: "))
b = float(input("Insira o b da equação: "))
c = float(input("Insira o c da equação: "))


delta = b**2 - 4 * a * c

def calcula(a, b, delta):
    if delta < 0:
        print("Não há raízes reais")
    else:
        if delta == 0:
            raiz = (-b + math.sqrt(delta)) / (2 * a)
            return raiz, raiz
        else:
            raiz1 = (-b + math.sqrt(delta)) / (2 * a)
            raiz2 = (-b - math.sqrt(delta)) / (2 * a)
            return raiz1, raiz2

raiz1, raiz2 = calcula(a, b, delta)
print("As raízes são: ", raiz1, raiz2)


    
#if delta < 0:
#    print("Não há raízes reais")
#else:
#    if delta == 0:
#        raiz = (-b + math.sqrt(delta)) / (2 * a)
#        print("As raízes são: ", raiz, raiz)
#    else:
#        raiz1 = (-b + math.sqrt(delta)) / (2 * a)
#        raiz2 = (-b - math.sqrt(delta)) / (2 * a)
#        print("As raízes são: ", raiz1, raiz2)
