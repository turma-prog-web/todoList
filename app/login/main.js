function validar(){
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    //TODO autenticar usuário
    return true;
}

function login(){
    if (validar()){
        window.router.goHome();
    }
    else{
        window.alert("Usuário ou senha incorretos!")
    }
    

}
async function criaConta(){
    console.log("Cria conta clicked")
}

async function esqueciSenha(){
    console.log("Esqueci Senha clicked")
}

async function googleLogin(){
    var url = "https://todo-list-prog-web.herokuapp.com/auth/google"
    window.location = url

}

async function gitHubLogin(){
    var url = "https://todo-auth-api.herokuapp.com/auth/github/"
    window.location = url
}

function User({user }){
   return {
        user: {
            name: "etorres1974", 
            code: "49101112",
            email: "etf1974@hotmail.com",
            picture: "https://avatars.githubusercontent.com/u/49101112?v=4",
            active: true
        }
    }
}
