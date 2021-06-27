var LISTAS = [];

//Função de inicialização
async function init() {
    LISTAS = await fetchListas();
    getListas(LISTAS);
    keyListener();
}

//Limpa o html e popula o html das listas com base no parametro
function getListas(lista){ 
    clearListas()
    var container = document.getElementById("container-lista");
    lista.forEach( l => {
        container.append(getListaElement(l._id, l.title, l.users));
        window.l = l
    });
}

//Filtra a lista sendo mostrada com base no campo de texto
async function buscarListas(){
    var busca = document.getElementById("inputText").value
    var filtrado =  []
    LISTAS.forEach( l => {
        if(l.title.toUpperCase().includes(busca.toUpperCase()))
            filtrado.push(l)
    })
    getListas(filtrado)
}


//Limpa o html que contem as listas
function clearListas(){
    var element = document.getElementById("container-lista");
    element.innerHTML = null
}

//Permite pressionar enter para realizar a busca quando o foco esta
//no campo de texto ou do botão
function keyListener(){
    var enterKey = '13' //Enter
    $("#inputText").keypress(function(event) {
        if (event.keyCode == enterKey) {
            $("#filtrarBTN").click();
        }
    })

    $("#filtrarBTN").keypress(function(event) {
        if (event.keyCode == enterKey) {
            $("#filtrarBTN").click();
        }
    })
}

//Posta a nova lista que estiver preenchida no modal e recarrega as listas da api
async function adicionarLista(){
    var titulo = document.getElementById("inputText-titulo").value
    var id = window.router.getParams()
    LISTAS = await postaLista(titulo, id)
    getListas(LISTAS)
    document.getElementById("inputText-titulo").value = ""
    fecharModal()
}

function abrirModal(){
    var modal = document.getElementById("modalNovaLista")
    modal.style.display = "block"
}

function fecharModal(){
    var modal = document.getElementById("modalNovaLista")
    modal.style.display = "none"
}
