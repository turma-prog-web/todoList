async function getTodos(){
    await testGet()
}

async function mockQuadroList(){
    var getApiQuadroh = getApiQuadro()
    console.log(getApiQuadroh)
    return await getApiQuadroh
}

async function getApiQuadro(){
    var id = window.router.getParams()
    var  apiQuadros = await getTasks(id)
    console.log(apiQuadros)
    return apiQuadros.map(quadro => 
        Quadro(quadro._id, quadro.title, quadro.tasks.map(t => 
            Tarefa(t.title, t._id, t.labels, t.users)
        ))
    );
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
