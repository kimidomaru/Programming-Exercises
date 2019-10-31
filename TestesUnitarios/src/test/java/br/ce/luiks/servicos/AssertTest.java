package br.ce.luiks.servicos;

import org.junit.Assert;
import org.junit.Test;

import br.ce.luiks.entidades.Usuario;


public class AssertTest {
	
	@Test
	public void test() {
		
		//Expressoes booleanas
		Assert.assertTrue(true);
		Assert.assertFalse(false);
		
		//Double e casas decimais
		Assert.assertEquals("Erro de comparação: ", 1, 1);
		Assert.assertEquals(0.51234, 0.512, 0.001);
		Assert.assertEquals(Math.PI, 3.14, 0.01);
		
		//Tipos primitivos e Objetos (Wrappers)
		int i = 5;
		Integer i2 = 5;
		Assert.assertEquals(i, i2.intValue());
		
		//Strings
		Assert.assertEquals("bola", "bola");
		Assert.assertNotEquals("bola", "casa");
		Assert.assertTrue("bola".equalsIgnoreCase("Bola"));
		Assert.assertTrue("bola".startsWith("bo"));
		
		//Objetos
		Usuario u1 = new Usuario("Usuario 1");
		Usuario u2 = new Usuario("Usuario 1");
		Usuario u3 = null;
		
		Assert.assertEquals(u1, u2);
		
		Assert.assertSame(u2, u2);
		Assert.assertNotSame(u1, u2);
		
		Assert.assertNull(u3);
		Assert.assertNotNull(u2);
	}
}
