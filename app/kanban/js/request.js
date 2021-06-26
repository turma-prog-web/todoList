async function mockQuadroList(){
    return await getApiQuadro()
}

async function getApiQuadro(){
    var id = window.router.getParams()
    var  apiQuadros = await getTasks(id)
    window.aq = apiQuadros
    return apiQuadros.map( apiQuadro => QuadroFromApi(apiQuadro) )
}

function QuadroFromApi(q){
    return Quadro(
        q._id,
        q.title,
        TarefasFromApi(q.tasks) 
    )
}

function TarefasFromApi(tasks){
    return tasks.map(t => 
        Tarefa(
            t.title, 
            t._id, 
            t.labels, 
            t.users))
}

function Quadro(id, titulo, tarefas){
    return  {
        titulo : titulo,
        tarefas : tarefas,
        id: id
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
