async function getTodos(){
    await testGet()
}

function mockQuadroList(){
    return [ mockQuadro("TODO"), mockQuadro2("Doing")]
}

function mockQuadro(titulo){
    var  tarefas = [Tarefa("Modelar Banco"), Tarefa("Integração com AWS"), Tarefa("Matar o php") ]
    return Quadro(titulo, tarefas)
}

function mockQuadro2(titulo){
    var  tarefas = [ Tarefa("Dar comida pro gato") , Tarefa("Lavar louça") ]
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