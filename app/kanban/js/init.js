

/* Método chamado após carregamento do body para inicializar os dados em tela */
var quadros = []
var board = null
var lastCardId = 0
var lastQuadroId = 0
var idQuadroAtual = 0

async function init(){
    keyListener()
    quadros = await mockQuadroList()
    console.log("Updated quadros : " + quadros)
    board = document.getElementById("board-columns");
    loadQuadros()
}

/* Limpa a div que contem as colunas dos quadros*/
function clearBoard(){
    var element = document.getElementById("board-columns");
    element.innerHTML = null
}

/* Com base no array quadros carrega em tela o kanban*/
function loadQuadros(){
    clearBoard()
    quadros.forEach((q, index) => {
        var quadro = getQuadro(index, q.titulo)
        board.appendChild(quadro);
        q.tarefas.forEach(t => {
            adicionarCard(index, t.titulo)
        })
        
    })
}

/* Altera o array quadros para a filtragem e chama loadQuadros()*/
function filtrarTarefas(){
    quadros = mockQuadroList()
    var busca = document.getElementById("inputText").value
    var filtrado =  []
    quadros.forEach( q => {
        var contem = false
        q.tarefas.forEach(t =>{
            if(t.titulo.toUpperCase().includes(busca.toUpperCase()))
                contem = true
        })
        if(contem)
            filtrado.push(q)
    })
    quadros = filtrado
    loadQuadros()
}

/* Configura para enter pressionar botão de pesquisa */
function keyListener(){
    var enterKey = '13'
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




/* Cria um novo quadro usando a barra de pesquisa como título*/
function adicionarQuadro(titulo){
    var element = document.getElementById("board-columns");
    var quadro = getQuadro(++lastQuadroId,  titulo)
    element.appendChild(quadro);
}

/* Cria um novo card na tela, caso tiulo seja null usa nome default*/
function adicionarCard(id, titulo){
    var quadro = document.getElementById(`quadro-${id}`)
    var card = getCard(titulo, ++lastCardId)
    quadro.append(card)
    fecharModal()
}

function deletaCard(id){
    //TODO
    //MANDAR API DELETAR E PEDE PARA ATUALIZAR

}

function adicionarCardForm(){
    var titulo = document.getElementById("inputText-titulo").value
    var id = idQuadroAtual
    adicionarCard(id, titulo)
}

function adicionarQuadroForm(){
    var titulo = document.getElementById("inputText-titulo").value
    adicionarQuadro(titulo)
}

function abrirModal(id){
    document.getElementById("tituloModal").innerText = "Nova tarefa"
    idQuadroAtual = id
    var modal = document.getElementById("modalNovo")
    modal.style.display = "block"
}

function abrirModalQuadro(){
    document.getElementById("tituloModal").innerText = "Novo quadro"
    idQuadroAtual = -1
    var modal = document.getElementById("modalNovo")
    modal.style.display = "block"
}

function salvarModal(){
    var isNovoQuadro = idQuadroAtual < 0
    if(isNovoQuadro){
        adicionarQuadroForm()
    }
    else{
        adicionarCardForm()
    }
    document.getElementById("inputText-titulo").value = ""
    fecharModal()
}

function fecharModal(){
    var modal = document.getElementById("modalNovo")
    modal.style.display = "none"
}


