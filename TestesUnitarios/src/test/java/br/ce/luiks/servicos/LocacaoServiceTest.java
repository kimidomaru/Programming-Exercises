package br.ce.luiks.servicos;

import java.util.Date;

import org.junit.Assert;
import org.junit.Test;

import br.ce.luiks.entidades.Filme;
import br.ce.luiks.entidades.Locacao;
import br.ce.luiks.entidades.Usuario;
import br.ce.luiks.servicos.LocacaoService;
import br.ce.luiks.utils.DataUtils;

public class LocacaoServiceTest {
	@Test
	public void teste() {
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
		
		//TESTES
		Assert.assertTrue(loc.getValor() == 25.50f);
		Assert.assertTrue(DataUtils.isMesmaData(loc.getDataLocacao(), new Date()));
		Assert.assertTrue(DataUtils.isMesmaData(loc.getDataRetorno(), DataUtils.obterDataComDiferencaDias(1)));
		
		/*System.out.println(loc.getValor() == 25.50f);
		System.out.println(DataUtils.isMesmaData(loc.getDataLocacao(), new Date()));
		System.out.println(DataUtils.isMesmaData(loc.getDataRetorno(), DataUtils.obterDataComDiferencaDias(1)));
		*/
	}
}
