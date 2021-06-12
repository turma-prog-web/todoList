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