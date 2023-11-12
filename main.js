function seleccionar(link) {
  var opciones = document.querySelectorAll('#links a');
  opciones.forEach(function (opcion) {
    opcion.classList.remove("seleccionado");
  });
  link.classList.add("seleccionado");

  var x = document.getElementById("nav");
  x.className = "";
}

function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const iconoNav = document.getElementById("icono-nav");
  const popup = document.getElementById("modal");
  const closePopup = document.getElementById("cerrarModal");

  closePopup.addEventListener("click", function () {
    popup.style.display = "none";
  });

  document.addEventListener("click", function (e) {
    if (e.target !== iconoNav && !iconoNav.contains(e.target)) {
      const nav = document.getElementById("nav");
      nav.classList.remove("responsive");
    }
  });

  const btnEnviar = document.querySelector('.btn-enviar');

  btnEnviar.addEventListener('click', function (e) {
    const nombre = document.getElementById("name").value;
    const mensajeModal = document.getElementById("mensajeModal");
    mensajeModal.textContent = `Su mensaje fue enviado con éxito. ${nombre}, Jehiel se comunicará contigo muy pronto.`;
    popup.style.display = 'block';
    setTimeout(function () {
      popup.style.display = 'none';
    }, 5000);
  });

  window.addEventListener("scroll", efectoHabilidades);
  efectoHabilidades();

  function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = skills.getBoundingClientRect().top;

    if (distancia_skills >= 0 && distancia_skills <= window.innerHeight) {
      document.getElementById("html").classList.add("barra-progreso1");
      document.getElementById("js").classList.add("barra-progreso2");
      document.getElementById("bd").classList.add("barra-progreso3");
      document.getElementById("ds").classList.add("barra-progreso4");
      document.getElementById("ba").classList.add("barra-progreso5");
    } else {
      document.getElementById("html").classList.remove("barra-progreso1");
      document.getElementById("js").classList.remove("barra-progreso2");
      document.getElementById("bd").classList.remove("barra-progreso3");
      document.getElementById("ds").classList.remove("barra-progreso4");
      document.getElementById("ba").classList.remove("barra-progreso5");
    }
  }
});
