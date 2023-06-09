const botonAviso = document.getElementById("cerrar-aviso");
const ventanaModal = document.getElementById("ventana-modal");
const fondoModal = document.getElementById("fondo-modal");

if(!sessionStorage.getItem("ventana-modal-visto")){
    ventanaModal.classList.add("activo") 
    fondoModal.classList.add("activo") 
}

botonAviso.addEventListener("click", () =>{ 
    ventanaModal.classList.remove("activo");
    fondoModal.classList.remove("activo");
    sessionStorage.setItem("ventana-modal-visto", true)
})