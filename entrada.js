function mostrarAba(aba, event){

    // esconder os dois conteúdos
    document.getElementById("Entrada").style.display = "none";
    document.getElementById("Saida").style.display = "none";

    // mostrar o selecionado
    document.getElementById(aba).style.display = "block";

    // remover classe ativa
    let Abas = document.querySelectorAll(".Abas li");
    Abas.forEach(a => a.classList.remove("Ativa"));

    // adicionar na clicada
    event.target.classList.add("Ativa");
}