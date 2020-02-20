import { NegociacoesView } from '../views/NegociacoesView';
import { MensagemView } from '../views/MensagemView';
import { Negociacoes } from '../models/Negociacoes';
import { Negociacao } from '../models/Negociacao';
import { NegociacaoParcial } from '../models/NegociacaoParcial';
import { domInject } from '../helpers/decorators/index';
import { throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';

let timer = 0;

export class NegociacaoController{

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
    
    @domInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    
    private _service = new NegociacaoService(); 

    constructor() {
        
        this._negociacoesView.update(this._negociacoes);

    }

    adiciona(event: Event){

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if(data.getDay() == DiaDaSemana.Domingo || data.getDay() == DiaDaSemana.Sabado){
            this._mensagemView.update('Só há negóciações em dias úteis.');
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        
        this._negociacoes.adiciona(negociacao);
        
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociacao adicionada!');
    }

    @throttle()
    importaDados(){

        function isOk(res: Response){

            if(res.ok){
                return res;
            }else{
                throw new Error(res.statusText);
            }

        }

        clearTimeout(timer);
        timer = setTimeout( ()=> {
            this._service
                .obterNegociacoes(isOk)
                .then(negociacoes => {
                    negociacoes.forEach(negociacao => 
                        this._negociacoes.adiciona(negociacao))
                    
                    this._negociacoesView.update(this._negociacoes);
                });
                

        }, 500);

    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}