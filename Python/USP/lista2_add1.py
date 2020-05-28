import math

x1 = int(input("Insira o x do primeiro ponto: "))
y1 = int(input("Insira o y do primeiro ponto: "))
x2 = int(input("Insira o x do segundo ponto: "))
y2 = int(input("Insira o y do segundo ponto: "))

raiz = ((x1 - x2) ** 2) + ((y1 - y2) ** 2)

d = math.sqrt(raiz)

if d > 10:
    print("longe")
else:
    print("perto")
