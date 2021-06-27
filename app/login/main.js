async function googleLogin(){
    var url = "https://todo-auth-api.herokuapp.com/auth/google/"
    window.location = url

}

async function gitHubLogin(){
    var url = "https://todo-auth-api.herokuapp.com/auth/github/"
    window.location = url
}

//TODO--------------------------------------------

function validar(){
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    //TODO autenticar usuário
    return false;
}

function login(){
    if (validar()){
        window.router.goHome();
    }
    else{
        window.alert("Login ainda não implementado, por favor logue usando redes sociais")
    }
}

async function criaConta(){
    console.log("Cria conta clicked")
}

async function esqueciSenha(){
    console.log("Esqueci Senha clicked")
}
