fun operacao(a: Int, b: Int, c: String) : Int{
    when(c){
        "Soma" -> {
            return a+b;
        }
        "Subtracao" -> {
            return a-b;
        }
        "Multiplicacao" -> {
            return a*b;
        }
        "Divisao" -> {
            if(b == 0)
                return 0
            return a/b;
        }
        else -> {
            return 0
        }
    }
}

fun verificaMaior(a: Int, b:Int){
    if(a == b){
        println("Valores Iguais")
    }
    else if(a > b)
        println("$a é maior")
    else
        println("$b é maior")
}

fun calculaValorAbacaxi(qtd: Int) : Int{
    //qtd < 10, cada abacaxi custa 3
    //qtd > 10, cada abacaxi custa 2
    when{
        qtd in 0..9 -> return qtd*3

        qtd >= 10 -> return qtd*2

        else -> return 0
    }
}

fun verificaCategoria(peso: Float){
    when{
        peso < 57.00 -> println("Pena")
        peso in 57.00..60.99 -> println("Leve")
        peso in 61.00..72.99 -> println("Médio")
        else -> println("Pesado")
    }
}

fun main(){
    val op1 = operacao(10,10,"Soma")
    val op2 = operacao(10,10,"Subtracao")
    val op3 = operacao(10,10,"Multiplicacao")
    val op4 = operacao(10,10,"Divisao")
    println(op1)
    println(op2)
    println(op3)
    println(op4)
    verificaMaior(5,3)
    verificaMaior(5,5)
    verificaMaior(3,5)
    println(calculaValorAbacaxi(9))
    println(calculaValorAbacaxi(10))
    println(calculaValorAbacaxi(15))
    verificaCategoria(50.0f)
    verificaCategoria(60.0f)
    verificaCategoria(70.0f)
    verificaCategoria(80.0f)
}
