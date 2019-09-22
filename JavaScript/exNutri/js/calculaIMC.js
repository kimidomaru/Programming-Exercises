var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

for(let i=0; i<pacientes.length;i++){
    let paciente = pacientes[i]

    var tdPeso = paciente.querySelector('.info-peso');
    var tdAltura = paciente.querySelector('.info-altura');

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    if (!pesoValido){
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if (!alturaValida){
        console.log("Altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida){
        var imc = calcularImc(peso,altura);
        tdImc.textContent = imc;
    } 

}

function calcularImc(peso, altura){
    let imc = 0; 
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    let valida = (peso >=0 && peso<1000) ? true : false;
    return valida;
}

function validaAltura(altura){
    let valida = (altura<3.00 && altura>=0) ? true : false;
    return valida;
}