/* Método chamado após carregamento do body para inicializar os dados em tela */
var QUADROS = []
var board = null
//Usado para controlar a qual quadro a task esta relacionada
var idQuadroAtual = 0

async function init(){
    keyListener()
    QUADROS = await getApiQuadro()
    board = document.getElementById("board-columns");
    colorIndex = 0
    loadQuadros(QUADROS)
}

/* Limpa a div que contem as colunas dos quadros*/
function clearBoard(){
    var element = document.getElementById("board-columns");
    element.innerHTML = null
}

/* Com base no array quadros carrega em tela o kanban*/
function loadQuadros(quadros){
    clearBoard()
    quadros.forEach( q  => {
        var quadro = getQuadro(q.id, q.titulo)
        board.appendChild(quadro);
        q.tarefas.forEach(t => {
            adicionarCard(t.id, t.titulo, t.labels, q.id)
        })
        
    })
}

/* Altera o array quadros para a filtragem e chama loadQuadros()*/
async function filtrarTarefas(){
    var busca = document.getElementById("inputText").value
    var filtrado =  []
    QUADROS.forEach( q => {
        var contem = false
        q.tarefas.forEach(t =>{
            if(t.titulo.toUpperCase().includes(busca.toUpperCase()))
                contem = true
        })
        if(contem)
            filtrado.push(q)
    })
    loadQuadros(filtrado)
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

/* Cria um novo card na tela, caso tiulo seja null usa nome default*/
function adicionarCard(id, titulo, labels, quadroId){
    var quadro = document.getElementById(`cards-${quadroId}`)

    var card = getCard(titulo, id, labels)
    quadro.append(card)
    fecharModal()
}

async function deletaCard(id){
    await deleteTasksById(id)
    init()
}

async function deletaQuadro(id){
    await deleteTasksColumnById(id)
    init()
}

async function adicionarCardForm(){
    var titulo = document.getElementById("inputText-titulo").value
    var status = document.getElementById("inputText-label").value
    var color = document.getElementById("colorPicker").value
    var taskData = await postTask(titulo, status, color)
    var columnId = idQuadroAtual
    await addTaskToColumn(columnId, taskData._id)
    init()

}

async function adicionarQuadroForm(){
    var titulo = document.getElementById("inputText-titulo").value
    var id = window.router.getParams()
    await postTaskColumn(titulo, id)
    init()
}

//MODAL --------
function abrirModal(id){
    document.getElementById("tituloModal").innerText = "Nova tarefa"
    document.getElementById("labelDiv").style.display = "contents"
    idQuadroAtual = id
    var modal = document.getElementById("modalNovo")
    modal.style.display = "block"
}

function abrirModalQuadro(){
    document.getElementById("tituloModal").innerText = "Novo quadro"
    document.getElementById("labelDiv").style.display = "none"
    
    idQuadroAtual = -1
    var modal = document.getElementById("modalNovo")
    modal.style.display = "block"
}

async function salvarModal(){
    var isNovoQuadro = idQuadroAtual < 0
    if(isNovoQuadro){
        adicionarQuadroForm()
    }
    else{
        await adicionarCardForm()
    }
    limparCampos()
    fecharModal()
}

function limparCampos(){
    document.getElementById("inputText-titulo").value = ""
    document.getElementById("inputText-label").value = ""
    document.getElementById("colorPicker").value = "#ff0000"
}

function fecharModal(){
    var modal = document.getElementById("modalNovo")
    modal.style.display = "none"
}


