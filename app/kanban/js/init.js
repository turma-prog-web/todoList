

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
    console.log("testando", quadros)
    quadros.forEach((q, index) => {
        var quadro = getQuadro(index, q.titulo)
        board.appendChild(quadro);
        q.tarefas.forEach(t => {
            
            adicionarCard(t.id, t.titulo, t.labels, q.id)
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
function adicionarQuadro(quadroId, titulo, status, color){
    var element = document.getElementById("board-columns");
    var quadro = getQuadro(quadroId,  titulo, status, color)
    
    element.appendChild(quadro);
}

/* Cria um novo card na tela, caso tiulo seja null usa nome default*/
function adicionarCard(id, titulo, labels, quadroId){
    var quadro = document.getElementById(`quadro-${quadroId}`)
    quadro.name = quadro.id
    var card = getCard(titulo, id, labels)
    quadro.append(card)
    fecharModal()
}

async function deletaCard(id){
    await deleteTasksById(id)
    init()
}

async function adicionarCardForm(){
    var titulo = document.getElementById("inputText-titulo").value
    var status = document.getElementById("inputText-label").value
    var color = document.getElementById("colorPicker").value
    var taskData = await postTask(titulo, status, color)
    var columnId = window.router.getParams()
    await addTaskToColumn(columnId, taskData._id)
    console.log("Alguma coisa antes!!!!!", taskData)
    init()

}

function adicionarQuadroForm(){
    var titulo = document.getElementById("inputText-titulo").value
    var status = document.getElementById("inputText-label").value
    var color = document.getElementById("colorPicker").value
    adicionarQuadro(titulo, status, color)
}

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


