    // Variables
    const marcas = document.querySelectorAll(".marca");
    const fondos = document.querySelectorAll(".fondoHidden");
    
    // Events listeners a marca
    marcas.forEach(marca => {
    marca.addEventListener("mouseenter", () => {
        // Agregamos el id del fondo a marca con getAttribute
        const fondoId = marca.getAttribute("data-bg");
        
        // Hidden el fondo
        fondos.forEach(fondo => {
        fondo.classList.remove("activeFondo");
        });
        // Agregamos el dim
        marcas.forEach(m => {
        m.classList.add("dimmed");
        });
        
        // Cuando pasa el mouse muestra la imagen de la palabra y quita el dim solo de esa palabra
        document.getElementById(fondoId).classList.add("activeFondo");
        marca.classList.remove("dimmed");
    });
    });
    
    // Cuando se va el mouse
    document.querySelector(".marcaContainer").addEventListener("mouseleave", () => {
      // Hidden el fondo
    fondos.forEach(fondo => {
        fondo.classList.remove("activeFondo");
    });

      // Quitamos el dim
    marcas.forEach(marca => {
        marca.classList.remove("dimmed");
    });
    });