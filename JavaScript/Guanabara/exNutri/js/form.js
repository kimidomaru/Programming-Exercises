let botaoAdd = document.querySelector('#adicionar-paciente');
botaoAdd.addEventListener("click", function(){
    event.preventDefault(); 
    let form = document.querySelector("#form-adiciona");

    //pegando informações do formulario
    let paciente = obterPacienteForm(form);

    let erros = validaPaciente(paciente);

    if(erros.length > 0){
        exigeMensagensDeErro(erros);
        return;
    }
    
    adicionarPacienteNaTabela(paciente);
    
    form.reset();  
    let mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML = ""; 
});

function adicionarPacienteNaTabela(paciente){
    //criando tr e td do paciente
    let pacienteTr = montaTr(paciente);
    //adicionando paciente à tabela
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exigeMensagensDeErro(erros){
    let ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = "";

    erros.forEach(function(erro){
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obterPacienteForm(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    let erros = [];
    if(paciente.nome.length === 0)
        erros.push("Nome vazio!")
    if(!validaPeso(paciente.peso))
        erros.push("Peso Inválido!");
    if(!validaAltura(paciente.altura))
        erros.push("Altura Inválida!");
    if(paciente.gordura.length === 0)
        erros.push("Gordura em branco!");
    if(paciente.peso.length === 0)
        erros.push("Peso em branco!");
    if(paciente.altura.length === 0)
        erros.push("Altura em branco!");
    return erros;
}
