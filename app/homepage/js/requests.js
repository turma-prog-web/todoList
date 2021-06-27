//Retorna as listas da API de acordo com o ID
async function fetchListas(){
    var id  = window.router.getParams()
    return await getTaskBoard(id)
}

//Posta uma nova lista e retorna a lista atualizada
async function postaLista(titulo, id){
    await postLista(titulo, id)
    return await fetchListas();
}