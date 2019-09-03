import java.util.ArrayList;

public class ReplaceTeste {
	public static void main(String[] args) {
		ArrayList lista = new ArrayList();
		lista.add("POHA");
		lista.add("caralho");
		lista.add("Toma no cu");
		
		String a = "Tamo aqui testando caralho, que droga de teste. Toma no cu POHA";
	
		for(int i=0;i<lista.size();i++) {
			if(a.contains((String)lista.get(i)))
				a = a.replace((String)lista.get(i), "######");
		}
		System.out.println(a);
	}
}
