import math

a = float(input("Insira o a da equação: "))
b = float(input("Insira o b da equação: "))
c = float(input("Insira o c da equação: "))


delta = b**2 - 4 * a * c

if delta < 0:
    print("esta equação não possui raízes reais")
else:
    if delta == 0:
        raiz = (-b + math.sqrt(delta)) / (2 * a)
        print("a raiz desta equação é", raiz)
    else:
        raiz1 = (-b + math.sqrt(delta)) / (2 * a)
        raiz2 = (-b - math.sqrt(delta)) / (2 * a)
        if raiz1 < raiz2:
            print("as raízes da equação são", raiz1,"e", raiz2)
        else:
            print("as raízes da equação são", raiz2,"e", raiz1)
