¡Claro! Aquí tienes un ejemplo de un archivo README para tu proyecto. Este archivo README proporciona una descripción general del proyecto, instrucciones sobre cómo usarlo y cualquier otra información relevante.

```markdown
# Proyecto de Gestión de Amigos

Este proyecto es una aplicación simple en JavaScript para gestionar una lista de amigos. Permite agregar amigos, visualizar la lista de amigos y sortear un amigo al azar.

## Funcionalidades

- **Agregar Amigo**: Permite agregar un nuevo amigo a la lista.
- **Visualizar Amigos**: Muestra la lista de amigos agregados.
- **Sortear Amigo**: Selecciona un amigo al azar de la lista.

## Cómo Usar

1. **Agregar Amigo**:
   - Ingresa el nombre de un amigo en el campo de texto.
   - Haz clic en el botón "Agregar Amigo".
   - Si el campo de texto está vacío, se mostrará una alerta indicando que debes ingresar un nombre.

2. **Visualizar Amigos**:
   - La lista de amigos se actualizará automáticamente cada vez que agregues un nuevo amigo.

3. **Sortear Amigo**:
   - Haz clic en el botón "Sortear Amigo" para seleccionar un amigo al azar de la lista.
   - Si la lista está vacía, se mostrará una alerta indicando que no hay amigos para sortear.

## Estructura del Código

- `agregarAmigo()`: Función para agregar un amigo a la lista.
- `visualizarAmigos()`: Función para mostrar la lista de amigos.
- `sortearAmigo()`: Función para sortear un amigo al azar.

## Requisitos

- Un navegador web moderno que soporte JavaScript.

## Ejemplo de Uso

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestión de Amigos</title>
</head>
<body>
    <h1>Gestión de Amigos</h1>
    <input type="text" id="amigo" placeholder="Ingresa el nombre de un amigo">
    <button onclick="agregarAmigo()">Agregar Amigo</button>
    <ul id="listaAmigos"></ul>
    <button onclick="sortearAmigo()">Sortear Amigo</button>
    <p id="resultado"></p>

    <script src="script.js"></script>
</body>
</html>
```

## Autor

- [Tu Nombre]

```

Puedes copiar este contenido y guardarlo en un archivo llamado `README.md` en tu proyecto. Si necesitas más ayuda o tienes alguna otra pregunta, ¡házmelo saber! 😊