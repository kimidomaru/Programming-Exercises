n = int(input("Digite um número inteiro: "))

primo = True
i = 2

while primo and i < n:
    if(n % i == 0):
        primo = False
    i = i+1

if primo:
    print("primo")
else:
    print("não primo")
