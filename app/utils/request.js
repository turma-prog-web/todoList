  async function get(url, params) {
      try {
          return await axios.get(url, params)
      } catch (error) {
          console.log("Request error : " + error)
      }
  }

  async function post(url, params) {
    try {
        return await axios.post(url, params)
    } catch (error) {
        console.log("Request error : " + error)
    }
  }

  async function remove(url, params) {
    try {
        return await axios.delete(url, params)
    } catch (error) {
        console.log("Request error : " + error)
    }
  }

  async function put(url, params) {
    try {
        return await axios.put(url, params)
    } catch (error) {
        console.log("Request error : " + error)
    }
}

  async function getTasks(id) {
      var url = `https://todo-list-prog-web.herokuapp.com/task-column/${id}`
      const response = await get(url, null)
      console.log("GET task-column/:id", response.data.results)
      return response.data.results
  }

  async function getTaskById(id){
      var url = `https://todo-list-prog-web.herokuapp.com/task/${id}`
      const response = await get(url, null)
      console.log("GET /task/:id", response.data.results)
      return response.data.results
  }

  async function postTask(titulo,status, color){
    var url = "https://todo-list-prog-web.herokuapp.com/task"
    const response = await post(url, {title : titulo , labels:[ {title: status, color : color}] })
    console.log("POST /task", response)
    return response.data.result
  }

  async function addTaskToColumn(columnId, taskId){
    var url = `https://todo-list-prog-web.herokuapp.com/task-column/${columnId}/add/${taskId}`
    const response = await put(url, null)
    console.log("PUT task-colun/id/add/id",response)
    return response.data
  }

  async function postTaskColumn(titulo, id){
    var url = "https://todo-list-prog-web.herokuapp.com/task-column"
    const response = await post(url, {title : titulo, taskboard: id })
    console.log("POST /task", response)
    return response.data.result
  }

  async function deleteTasksById(id) {
    var url = `https://todo-list-prog-web.herokuapp.com/task/${id}`
    const response = await remove(url, null)
    console.log("Delete Task By id : ", response)
    return response
}

  async function deleteTasksColumnById(id) {
    var url = `https://todo-list-prog-web.herokuapp.com/task-column/${id}`
    const response = await remove(url, null)
    console.log("Delete Column By id : ", response)
    return response
  }

  async function getTaskBoard(userId) {
    var url = `https://todo-list-prog-web.herokuapp.com/task-board/${userId}/get-all`
    const response = await get(url, null)
    console.log(response.data.results)
    return response.data.results
  }

  async function postLista(titulo, id ){
    var url = "https://todo-list-prog-web.herokuapp.com/task-board"
    const response = await post(url, {title: titulo, users:[id] } )
    console.log(response)
  }

  async function deleteTaskBoard(id) {
    var url = `https://todo-list-prog-web.herokuapp.com/task-board/${id}`
    const response = await remove(url, null)
    console.log("Delete Board By id : ", response)
    return response
  }