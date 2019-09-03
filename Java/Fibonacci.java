import java.util.Scanner;

public class Fibonacci {
	static int fibo(int n) {
		if(n<2)
			return n;
		else {
			return fibo(n-1) + fibo(n-2);
		}
	}
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.println("Digite o nº de elementos da sequência");
		int n = input.nextInt();
		for(int i=0;i<n;i++) {
			System.out.println((i+1)+"º elemento: "+fibo(i));
		}
		input.close();
	}
}
