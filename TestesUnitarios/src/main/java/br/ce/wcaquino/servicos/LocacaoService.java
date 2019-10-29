package br.ce.wcaquino.servicos;

import static br.ce.wcaquino.utils.DataUtils.adicionarDias;

import java.util.Date;

import br.ce.wcaquino.entidades.Filme;
import br.ce.wcaquino.entidades.Locacao;
import br.ce.wcaquino.entidades.Usuario;
import br.ce.wcaquino.utils.DataUtils;

public class LocacaoService {
	
	public Locacao alugarFilme(Usuario usuario, Filme filme) {
		Locacao locacao = new Locacao();
		locacao.setFilme(filme);
		locacao.setUsuario(usuario);
		locacao.setDataLocacao(new Date());
		locacao.setValor(filme.getPrecoLocacao());

		//Entrega no dia seguinte
		Date dataEntrega = new Date();
		dataEntrega = adicionarDias(dataEntrega, 1);
		locacao.setDataRetorno(dataEntrega);
		
		//Salvando a locacao...	
		//TODO adicionar método para salvar
		
		return locacao;
	}

	public static void main(String[] args) {
		//cenario
		Filme joker = new Filme("Joker", 10, 25.50);
		Usuario user = new Usuario("Joao");
		LocacaoService teste = new LocacaoService();
		
		//ação
		Locacao loc = teste.alugarFilme(user, joker);
		
		//verificação
		System.out.println("Usuário: "+ loc.getUsuario().getNome() +
				"\nFilme: "+ loc.getFilme().getNome() + 
				"\nValor: " + loc.getValor() +
				"\nData de locação: " + loc.getDataLocacao() + 
				"\nData de devolução: " + loc.getDataRetorno() );
		
		System.out.println();
		System.out.println(loc.getValor() == 25.50f);
		System.out.println(DataUtils.isMesmaData(loc.getDataLocacao(), new Date()));
		System.out.println(DataUtils.isMesmaData(loc.getDataRetorno(), DataUtils.obterDataComDiferencaDias(1)));
	}
}