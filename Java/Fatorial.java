import java.util.Scanner;

public class Fatorial {
	static int fat(int n) {
		if(n<=1)
			return 1;
		else {
			return n*fat(n-1);
		}
	}
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.println("Digite o nº a ser calculado");
		int n = input.nextInt();
		System.out.println(fat(n));
		input.close();
	}
}
