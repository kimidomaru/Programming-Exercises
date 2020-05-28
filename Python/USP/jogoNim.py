def computador_escolhe_jogada(nInicial, maximoPeca):
    m = maximoPeca + 1
    escolhaComp = 0
    if(nInicial == maximoPeca):
        escolhaComp = maximoPeca
    else:
        resto = nInicial - maximoPeca
        for i in range(1, m):
            resto = nInicial - i
            if(resto % m == 0):
                escolhaComp = i
                break
        else:
            escolhaComp = maximoPeca

    return escolhaComp


def usuario_escolhe_jogada(nInicial, maximoPeca):
    escolha = int(input("Quantas peças você vai tirar?"))
    if(escolha <= maximoPeca and escolha <= nInicial and escolha > 0):
        return escolha
    else:
        while(escolha > maximoPeca or escolha <= 0 or escolha > nInicial):
            print("Oops! Jogada inválida! Tente de novo.")
            escolha = int(input("Quantas peças você vai tirar?"))
        return escolha


def partida():
    nInicial = int(input("Quantas peças?"))
    maximoPeca = int(input("Limite de peças por jogada?"))
    m = maximoPeca + 1
    
    if(nInicial % m == 0):
        print("Você começa!")
        while(nInicial != 0):
            escolhaUsu = usuario_escolhe_jogada(nInicial, maximoPeca)
            nInicial = nInicial - escolhaUsu
            printEscolhaUsu(escolhaUsu)
            if(nInicial == 0):
                print("Fim do jogo! Voce venceu!")
                return 0
            else:
                if(nInicial == 1):
                    print("Agora resta apenas uma peca.")
                else:
                    print("Agora resta apenas",nInicial,"pecas")
                escolhaComp = computador_escolhe_jogada(nInicial, maximoPeca)
                printEscolhaComp(escolhaComp)
                
                nInicial = nInicial - escolhaComp
                if(nInicial == 0):
                    print("Fim do jogo! O computador venceu!")
                    return 1
                else:
                    if(nInicial == 1):
                        print("Agora resta apenas uma peca.")
                    else:
                        print("Agora restam",nInicial,"pecas")
    else:
        print("Computador começa!")
        while(nInicial != 0):
            escolhaComp = computador_escolhe_jogada(nInicial, maximoPeca)
            printEscolhaComp(escolhaComp)
            nInicial = nInicial - escolhaComp
            if(nInicial == 0):
                print("Fim do jogo! O computador venceu!")
                return 1
            else:
                escolhaUsu = usuario_escolhe_jogada(nInicial, maximoPeca)
                nInicial = nInicial - escolhaUsu
                printEscolhaUsu(escolhaUsu)
                if(nInicial == 0):
                    print("Fim do jogo! Voce venceu!")
                    return 0
    
def printEscolhaUsu(escolhaUsu):
    if(escolhaUsu == 1):
        print("Voce tirou uma peca.")
    else:
        print("Voce tirou", escolhaUsu, "pecas.")

def printEscolhaComp(escolhaComp):
     if(escolhaComp == 1):
        print("O computador tirou uma peca no tabuleiro.")
     else:
        print("O computador tirou", escolhaComp, "pecas no tabuleiro!")
    
def campeonato():
    pontosUsu = 0
    pontosComp = 0
    print("**** Rodada 1 ****") 
    vencedor = partida()
    if(vencedor == 0):
        pontosUsu = pontosUsu + 1
    else:
        pontosComp = pontosComp + 1
    print("**** Rodada 2 ****")
    vencedor = partida()
    if(vencedor == 0):
        pontosUsu = pontosUsu + 1
    else:
        pontosComp = pontosComp + 1
    print("**** Rodada 3 ****")
    vencedor = partida()
    if(vencedor == 0):
        pontosUsu = pontosUsu + 1
    else:
        pontosComp = pontosComp + 1

    print()
    print("**** Final do campeonato! ****")
    print()
    print("Placar: Você",pontosUsu,"X",pontosComp,"Computador")

def main():
    print("Bem-vindo ao jogo do NIM! Escolha:")
    print()
    print("1 - para jogar uma partida isolada")
    print("2 - para jogar um campeonato")
    escolha = int(input())
    
    if(escolha == 1):
        print("Voce escolheu uma partida!")
        partida()
    elif(escolha == 2):
        print("Voce escolheu um campeonato!")
        campeonato()
    else:
        while(escolha != 1 and escolha !=2):
            print("1 - para jogar uma partida isolada")
            print("2 - para jogar um campeonato")
            escolha = int(input())
            if(escolha == 1):
                print("Voce escolheu uma partida!")
                partida()
            elif(escolha == 2):
                print("Voce escolheu um campeonato!")
                campeonato()

main()
