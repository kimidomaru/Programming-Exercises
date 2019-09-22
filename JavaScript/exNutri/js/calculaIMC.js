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

    let pesoValido = true;
    let alturaValida = true;

    if (peso <= 0 || peso >= 1000){
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0 || altura >= 3.0){
        console.log("Altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida){
        var imc = peso/(altura*altura);
        tdImc.textContent = imc.toFixed(2);
    } 

}

