nomeDoEstudanteArray = []
function submit ()
{
    var nome1 = document.getElementById("Nome-do-estudante1").value;
    
    nomeDoEstudanteArray.push(nome1)
    document.getElementById("Nome-do-estudante1").value=""
    document.getElementById("lista").innerHTML = nomeDoEstudanteArray
}
function sorting ()
{
    nomeDoEstudanteArray.sort()
    document.getElementById("mostrar").innerHTML= nomeDoEstudanteArray
    
}
var conta= 0;
function pesquisar () {
      conta= 0
    var caixa_pesquisa= document.getElementById("pesquisa").value; 
    for(var i = 0; i<nomeDoEstudanteArray.length;i++) {
    if(nomeDoEstudanteArray[i]== document.getElementById("pesquisa").value) {
        conta = conta+1
    }
    }
    document.getElementById("resultado").innerHTML = caixa_pesquisa+" "+conta+"  nome(s) escontrado(s)"
}