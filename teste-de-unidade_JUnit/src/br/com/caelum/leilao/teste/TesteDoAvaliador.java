package br.com.caelum.leilao.teste;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Before;
import org.junit.Test;

import br.com.caelum.leilao.dominio.Lance;
import br.com.caelum.leilao.dominio.Leilao;
import br.com.caelum.leilao.dominio.Usuario;
import br.com.caelum.leilao.servico.Avaliador;

public class TesteDoAvaliador {
	
	private Avaliador leiloeiro;
	private Usuario joao;
	private Usuario jose;
	private Usuario maria;
	
	@Before
	public void criaAvaliador() {
		this.leiloeiro = new Avaliador();
		this.joao = new Usuario("João");
		this.jose = new Usuario("José");
		this.maria = new Usuario("Maria");
		
	}
	
	@Test
	public void lerLancesCrescente() {
		//parte 1: cenario
		Leilao leilao = new Leilao("Playstation 4 novo");
		
		leilao.propoe(new Lance(joao, 250.0));
		leilao.propoe(new Lance(jose, 300.0));
		leilao.propoe(new Lance(maria, 400.0));
		
		//parte 2: acao
		leiloeiro.avalia(leilao);
		
		//parte 3: validacao
		double maiorEsperado = 400;
		double menorEsperado = 250;
		
		assertEquals(maiorEsperado, leiloeiro.getMaiorLance(), 0.00001);	
		assertEquals(menorEsperado, leiloeiro.getMenorLance(), 0.00001);
	}
	
	@Test
	public void lerLancesDecrescente() {
		//parte 1: cenario
		
		Leilao leilao = new Leilao("Playstation 4 novo");
		
		leilao.propoe(new Lance(joao, 400.0));
		leilao.propoe(new Lance(jose, 300.0));
		leilao.propoe(new Lance(maria, 200.0));
		leilao.propoe(new Lance(joao, 100.0));
		
		leiloeiro.avalia(leilao);
		
		double maiorEsperado = 400;
		double menorEsperado = 100;
		
		assertEquals(maiorEsperado, leiloeiro.getMaiorLance(), 0.00001);	
		assertEquals(menorEsperado, leiloeiro.getMenorLance(), 0.00001);
	}
	
	@Test
	public void lerApenasUmLance() {
		Leilao leilao = new Leilao("Playstation 4 novo");
		
		leilao.propoe(new Lance(joao, 1000.0));
		
		leiloeiro.avalia(leilao);
		
		assertEquals(1000, leiloeiro.getMaiorLance(), 0.0001);
		assertEquals(1000, leiloeiro.getMenorLance(), 0.0001);
	}
	
	@Test
	public void verificaTresMaiores() {
		
		Leilao leilao = new Leilao("Playstation 4 novo");
		
		leilao.propoe(new Lance(joao, 100.0));
		leilao.propoe(new Lance(maria, 200.0));
		leilao.propoe(new Lance(joao, 300.0));
		leilao.propoe(new Lance(maria, 400.0));
		
		leiloeiro.avalia(leilao);
		
		List<Lance> maiores = leiloeiro.getTresMaiores();
		assertEquals(3, maiores.size());
		assertEquals(400, maiores.get(0).getValor(), 0.00001);
		assertEquals(300, maiores.get(1).getValor(), 0.00001);
		assertEquals(200, maiores.get(2).getValor(), 0.00001);
	}
	
	@Test
	public void lerLancesRandomicos() {
		
		Leilao leilao = new Leilao("Playstation 4 novo");
		
		leilao.propoe(new Lance(joao, 100.0));
		leilao.propoe(new Lance(maria, 200.0));
		leilao.propoe(new Lance(joao, 300.0));
		leilao.propoe(new Lance(maria, 400.0));
		leilao.propoe(new Lance(joao, 520.0));
		leilao.propoe(new Lance(maria, 550.0));
		leilao.propoe(new Lance(joao, 130.0));
		leilao.propoe(new Lance(maria, 402.0));
		
		leiloeiro.avalia(leilao);
		
		assertEquals(550, leiloeiro.getMaiorLance(), 0.0001);
		assertEquals(100, leiloeiro.getMenorLance(), 0.0001);
	}
	
	@Test
	public void confereMedia() {
		
		Leilao leilao = new Leilao("Playstation 4 novo");
		
		leilao.propoe(new Lance(joao, 300.0));
		leilao.propoe(new Lance(jose, 400.0));
		leilao.propoe(new Lance(maria, 500.0));
		
		//parte 2: acao
		leiloeiro.avalia(leilao);
		
		//parte 3: validacao
		assertEquals(400, leiloeiro.getMedia(), 0.00001);
	}
	
	@Test
    public void testaMediaDeZeroLance(){

        // cenario
        Usuario ewertom = new Usuario("Ewertom");

        // acao
        Leilao leilao = new Leilao("Iphone 7");

        Avaliador avaliador = new Avaliador();
        avaliador.avalia(leilao);

        //validacao
        assertEquals(0, avaliador.getMedia(), 0.0001);

    }
}
