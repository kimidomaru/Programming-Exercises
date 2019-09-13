fun main() {

    val str = "Luikson Silva"
    for(c in str){
        print("$c ")
    }
    println()
    for(i in 1..100){
        print("$i ")
    }
    println()
    for(i in 1..100 step 2){
        print("$i ")
    }
    println()
    for(j in 100 downTo 1){
        print("$j ")
    }
    println()

    mostraPares()
    println()

    inverteString("Vamo inverter")

    mostrarRange(10,15,"Crescente")
    println()
    mostrarRange(10,15,"Decrescente")
    println()

    escreverEscada(4)
}

fun mostraPares(){
    //pares de 100 a 200
    for(i in 100..200 step 2)
        print("$i ")
}

fun inverteString(str:String){
    var strTemp:String = ""
    var tamanho = str.length
    while(tamanho>0){
        strTemp += str[tamanho-1]
        tamanho--
    }
    println("A string e: $str")
    println("String invertida: $strTemp")
}

fun mostrarRange(a: Int, b: Int, ordem: String){
    if(ordem == "Crescente"){
        for(i in a..b)
            print("$i ")
    }
    else if (ordem == "Decrescente"){
        for(i in b downTo a)
            print("$i ")
    }
}

fun escreverEscada(n: Int){
    var count = 0
    while(count<n){
        for(i in 0..count){
            print("#")
        }
        println()
        count++
    }
}