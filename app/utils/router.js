class router {
    kanban = "app/kanban/"
    home = "app/homepage/"
    login = "app/login/"

    constructor(){}

    getParams(){
        return window.location.search.replace("?", "")
    }

    goTo(path, param){
        var newUrl = window.location.origin + "/" + path + "?" + param
        window.location = newUrl 
    }

    goKanban(param){
        this.goTo(this.kanban, param)
    }

    goHome(param){
        this.goTo(this.home, param)
    }

    goLogin(param){
        this.goTo(this.login, param)
    }
}

window.router = new router()

