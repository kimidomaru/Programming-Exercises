fun main() {
    println("Hello!")
    println(returnCharsCount("Luikson"))
    showStringCount("Luikson")
    verificaMaiorIdade(15)
    verificaMaiorIdade(55)
    verificaMaiorIdade(18)
    println(calculaBonus("Coordenador",1000f))
    println(calculaBonus("Gerente Junior",1000f))
    println(calculaBonus("Gerente Senior",1000f))
}

fun returnCharsCount(nome: String): Int{
    return nome.length;
}

fun showStringCount(nome: String){
    val count = nome.length
    println("A String $nome possui $count caracteres")
}

fun verificaMaiorIdade(idade: Int){
    if(idade>=18)
        println("Maior de idade!")
    else
        println("Menor de idade!")
}

fun calculaBonus(cargo: String, salario: Float) : Float{
    var retorno = salario;
    //Gerente Junior, Gerente Senior e Coordenador
    if(cargo == "Coordenador"){
        retorno = salario*0.2f;
    }
    else if(cargo.contains("Gerente")){
        if(cargo == "Gerente Junior")
            retorno = salario*0.35f;
        else
            retorno = salario*2f;
    }
    return retorno
}
