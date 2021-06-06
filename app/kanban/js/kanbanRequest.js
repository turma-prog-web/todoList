async function getTodos(){
    await testGet()
}

function mockQuadroList(){
    return [ mockQuadro("TODO"), mockQuadro("Doing")]
}

function mockQuadro(titulo){
    var  tarefas = [Tarefa("Modelar Banco"), Tarefa("Integração com AWS"), Tarefa("Matar o php"), Tarefa("Dar comida pro gato") ]
    return Quadro(titulo, tarefas)
}

function Quadro( titulo, tarefas ){
    return  {
        titulo : titulo,
        tarefas : tarefas
    };

}

function Tarefa( nome ){
    return {
        titulo : nome 
    }
}