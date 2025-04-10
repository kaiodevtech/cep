function ColetarCep() {
    let cep = document.getElementById("cep").value;
    console.log(cep)
    Dados(cep)
}

//

async function Dados(cep) {
    let Dados= await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json())
 console.log(Dados)
 dadosTela(Dados)

}

///Permuta dos dados na tela

function dadosTela(Dados){
    
    document.querySelector("#end").value = Dados.logradouro
    document.querySelector("#bai").value = Dados.bairro
    document.querySelector("#cid").value = Dados.localidade
    document.querySelector("#est").value = Dados.estado
    document.querySelector("#reg").value = Dados.regiao
}

function apagar(){
    document.querySelector("#cep").value = ""
    document.querySelector("#end").value = ""
    document.querySelector("#bai").value = ""
    document.querySelector("#cid").value = ""
    document.querySelector("#est").value = ""
    document.querySelector("#reg").value = ""
}

