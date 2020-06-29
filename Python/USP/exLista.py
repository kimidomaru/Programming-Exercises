num = []
op = -1

while(op != 0):
    op = int(input("Digite um numero, 0 para sair: "))
    num.append(op)
    
for i in range((len(num) -2), -1, -1):
    print(num[i])
