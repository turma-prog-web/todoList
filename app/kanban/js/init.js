

/* Método chamado após carregamento do body para inicializar os dados em tela */
var quadros = []
var board = null

function init(){
    keyListener()
    quadros = mockQuadroList()
    console.log("Updated quadros : " + quadros)
    board = document.getElementById("board-columns");
    loadQuadros()
}


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

