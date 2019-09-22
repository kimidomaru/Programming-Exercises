#include <iostream>

using namespace std;

struct no{
int info;
struct no *prox;
};
typedef struct no *noPtr;

void insere(noPtr *,int*);
void retira(noPtr *,int*);
void listar(noPtr,int);
bool listaVazia(noPtr);
int menu();


int main(){
    int op,qtde=0;
    noPtr inicio=NULL;
    do{
        op=menu();
        switch(op){
            case 1: insere(&inicio,&qtde);
            cout<<"\nA lista possui "<<qtde<<" no(s).\n\n";break;
            case 2: retira(&inicio,&qtde);break;
            case 3: listar(inicio,qtde);break;
        }
    } while(op!=0);
    return 0;
}

int menu(){
    int op;
    cout<<"\n1: Insere elemento na lista"
        <<"\n2: Retira elemento da lista"
        <<"\n3: Listar elementos"
        <<"\n0: Sair"
        <<"\n\n Digite a opcao(0-3): ";
    cin>>op;
    return op;
}

void insere(noPtr *i,int*q){
    noPtr p=new no;
    cout<<"\nDigite o valor do elemento:";
    cin>>p->info;
    if(listaVazia(*i)){
        *i=p;
        p->prox=*i;
    }
    else{
        p->prox=*i;
        *i=p;
    }
    *q=*q+1;

}

void retira(noPtr*i,int*q){
    noPtr p=*i;
    if(!listaVazia(*i)){
        if(*q==1){
            *i=NULL;
        }
        else
            *i=p->prox;//*i=(*i)->prox
        delete(p);
        cout<<"\nO elemento foi retirado da lista!\n";
        *q=*q-1;
    }
    else
        cout<<"\n\nLista Vazia!\n";
}

void listar(noPtr i,int q){
    if(!listaVazia(i)){
        for(int j=0;j<q;j++){
            cout<<i->info<<"\t";
            i=i->prox;
        }
    }
    else
        cout<<"\n\nListavazia!";
}

bool listaVazia(noPtr i){
    if(i)
        return false;
    else
        return true;
}
