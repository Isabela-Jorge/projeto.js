const form = document.getElementById("LoginForm"); // Busca o elemento pelo id

form.addEventListener("submit", function (event) { //quando o formulario for enviado, execute uma função
    event.preventDefault(); //impede a pagina de recarregar

    const Login = document.getElementById("Login").value; // pega os dados digitados
    const Senha = document.getElementById("Senha").value;

    console.log("Login:", Login);
    console.log("Senha:", Senha);

    if (Login === "Admin" && Senha == "123Adm") {  //SE login e senha corretos OK
        window.location.href = "dashboard.html"; //redireciona
    }
    else {  // SE NÃO 
        alert("Login ou senha incorretos");
    }
});













