#include <iostream>

using namespace std;

struct no {
    int info;
    struct no * esq, * dir;
 };

typedef struct no * noPtr;
int menu();
int menu2();
void inserir(noPtr *, int);
void remover(noPtr *, int);
bool buscar(noPtr, int);
noPtr maior(noPtr *);
void listarEmOrdem(noPtr);
void listarPreOrdem(noPtr);
void listarPosOrdem(noPtr);
bool arvoreVazia(noPtr);

int main(){
    int op1, op2, x; bool achei; noPtr raiz = NULL;
    do {
        op1 = menu();
        switch(op1) {
            case 1: cout << "\nDigite o elemento que voce deseja inserir: ";
                cin >> x;
                inserir(&raiz, x); break;
            case 2: cout << "\nDigite o elemento que voce deseja remover: ";
                cin >> x;
                remover (&raiz, x); break;
            case 3: op2 = menu2();
                if (op2 == 1) listarEmOrdem(raiz);
                if (op2 == 2) listarPreOrdem(raiz);
                if (op2 == 3) listarPosOrdem(raiz); break;
            case 4: cout << "\nDigite o elemento que voce deseja consultar: ";
                cin >> x;
                achei = buscar(raiz, x);
                if (!achei)
                    cout << "Elemento nao encontrado" << endl; break;
        }
    } while(op1 != 5);

    return 0;
}

int menu(){
    int opcao;
    cout << "\n\n\n---- Menu Principal ----\n\n"
        << "\n1.Inserir no na arvore"
        << "\n2.Remover no na arvore"
        << "\n3.Listar todos os nos da arvore"
        << "\n4.Buscar no"
        << "\n5.Sair"
        << "\nDigite uma opcao: ";
    cin >> opcao;
    return opcao;
}

int menu2(){
    int opcao;
    cout << "\n\nTipos de listagem:"
        << "\n\t1.Em Ordem"
        << "\n\t2.Pre Ordem"
        << "\n\t3.Pos Ordem"
        << "\n\nEscolha o tipo de listagem: ";
    cin >> opcao;
return opcao;
}

void inserir(noPtr * p, int x){
    if (arvoreVazia(*p)){
        *p = new no;
        (*p)->info = x;
        (*p)->esq = NULL;
        (*p)->dir = NULL;
    }
    else{
        if (x<((*p)->info))
            inserir(&((*p)->esq), x);
        else
            inserir(&((*p)->dir), x);
    }
}

bool arvoreVazia(noPtr p){
    if (p)
        return false;
    else
        return true;
}

bool buscar(noPtr p, int x){
    bool achei = false;
    if(arvoreVazia(p))
        cout << "\nArvore vazia " << endl;
    else{
        if (x == (p-> info)){
            cout << "\nO elemento: " << p->info << " foi encontrado na arvore: \n";
            achei = true;
        }
        else if (x < (p->info))
            achei=buscar((p->esq), x);
        else
            achei=buscar((p->dir), x);
    }
    return achei;
}
void remover(noPtr *p, int x){
    noPtr aux;
    if (arvoreVazia(*p))
        cout << "\nArvore vazia" << endl;
    else {
        if (x == ((*p)->info)) {
            aux = *p;
            if (((*p)->esq) == NULL)
                *p = (*p)->dir;
            else if (((*p)->dir) == NULL)
                *p = (*p)->esq;
            else {
                aux = maior(&((*p)->esq));
                (*p)->info = aux->info;
            }
            delete(aux);
            cout << "\nO elemento foi removido\n";
        }
        else if ((x < ((*p)->info)))
            remover(&((*p)->esq), x);
        else
            remover(&((*p)->dir), x);
    }
}
noPtr maior(noPtr *p) {
    noPtr t;
    t = *p;
    if ((t->dir) == NULL){
        *p = (*p)->esq;
        return(t);
    }
    else
        return (maior(&((*p)->dir)));
}

void listarEmOrdem(noPtr p) {
    if (!arvoreVazia(p)) {
        listarEmOrdem(p->esq);
        cout << "\t" << p->info;
        listarEmOrdem(p->dir);
    }
}
void listarPosOrdem(noPtr p) {
    if (!arvoreVazia(p)) {
        listarPosOrdem(p->esq);
        listarPosOrdem(p->dir);
        cout << "\t" << p->info;
    }
}
void listarPreOrdem(noPtr p) {
    if (!arvoreVazia(p)) {
        cout << "\t" << p->info;
        listarPreOrdem(p->esq);
        listarPreOrdem(p->dir);
    }
}


