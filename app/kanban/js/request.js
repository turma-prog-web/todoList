async function getTodos(){
    await testGet()
}

async function mockQuadroList(){
    return [ await mockQuadro("TODO")]
}

async function mockQuadro(titulo){
    var  apiTarefas = await getTasks()
    var tarefas = apiTarefas.map(tarefa => Tarefa(tarefa.title, tarefa._id))
    console.log(apiTarefas)
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

function Tarefa(nome, id){
    return {
        titulo : nome, 
        id: id
    }
}