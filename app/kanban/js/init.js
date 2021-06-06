

/* Método chamado após carregamento do body para inicializar os dados em tela */
var quadros = []
var board = null
function init(){
    quadros = mockQuadroList()
    console.log("Updated quadros : " + quadros)
    board = document.getElementById("board-columns");
    loadQuadros()
}

function loadQuadros(){
    quadros.forEach((q, index) => {
        var quadro = getQuadro(q.titulo)
        board.appendChild(quadro);
        q.tarefas.forEach(t => {
            adicionarCard(index+1, t.titulo)
        })
        
    })
}