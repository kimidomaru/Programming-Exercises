larg = int(input("digite a largura: "))
alt = int(input("digite a altura: "))

for i in range(0,alt):
    for j in range(0,larg):
        if(i != 0 and (i!=alt-1) and j != 0 and (j!=larg-1)):
            print(" ",end="")
        else:
            print("#",end="")
    print()
