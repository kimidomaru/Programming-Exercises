
public class AlunoAcademia {
	private float peso;
	private float altura;
	
	//CONSTRUTOR
	public AlunoAcademia(float peso, float altura) {
		this.peso = peso;
		this.altura = altura;
	}
	//GETTERS E SETTERS
	public float getPeso() {
		return peso;
	}
	public void setPeso(float peso) {
		this.peso = peso;
	}
	public float getAltura() {
		return altura;
	}
	public void setAltura(float altura) {
		this.altura = altura;
	}
	
	//METODOS
	public float imc() {
		return this.peso/(this.altura*this.altura);
	}
	
	public float pesoMinimo() {
		return (float) (18.5*(this.altura*this.altura));
	}
	
	public float pesoMaximo() {
		return (float) (24.9*(this.altura*this.altura));
	}
	
	public float pesoMedio() {
		return (pesoMinimo() + pesoMaximo())/2;
	}
}
