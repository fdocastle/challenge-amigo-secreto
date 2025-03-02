// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];

// Implementa una función para agregar amigos
function agregarAmigo() { 
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value;

    if (nombreAmigo === "") {                                   
        alert("Debes ingresar un nombre de amigo");
        return;
    }

    amigos.push(nombreAmigo);                                    
    inputAmigo.value = "";                                      
    inputAmigo.focus();                                          
    visualizarAmigos();                                          
}

// Implementa una función para mostrar amigos
function visualizarAmigos() {                                   
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";                                 

    amigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Implementa una función para sortear amigos 
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];    
    const resultado = document.getElementById("resultado");
    resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    
    const listaAmigos = document.getElementById("listaAmigos");           
    listaAmigos.innerHTML = "";                                         
}