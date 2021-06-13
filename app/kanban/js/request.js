async function getTodos(){
    await testGet()
}

async function mockQuadroList(){
    return [ await getApiQuadro("TODO")]
}

async function getApiQuadro(titulo){ //Todo pegar da api
    var  apiTarefas = await getTasks()
    var tarefas = apiTarefas.map(tarefa => Tarefa(tarefa.title, tarefa._id, tarefa.labels, tarefa.users))
    console.log("mapeado", tarefas)
    return Quadro(titulo, tarefas)
}


function Quadro( titulo, tarefas ){
    return  {
        titulo : titulo,
        tarefas : tarefas
    };

}

function Tarefa(nome, id, labels, users){
    return {
        titulo : nome, 
        id: id,
        labels: labels,
        users : users
    }
}
