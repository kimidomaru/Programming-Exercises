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
}
