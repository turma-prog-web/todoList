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

  async function getTasks() {
      var url = "https://todo-list-prog-web.herokuapp.com/task"
      const response = await get(url, null)
      console.log(response.data.results)
      return response.data.results
  }

  async function testPost(){
      var url = 'https://jsonplaceholder.typicode.com/posts'
      var params = { title :'foo', body:'bar', userId: 1 }
      const response = await post(url,params)
      console.log(response)
  }