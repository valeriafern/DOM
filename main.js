// Obtener el modal y los elementos del formulario de inicio de sesión
const loginModal = document.getElementById("staticBackdrop");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");

// Obtener el modal y el formulario de registro
const registerModal = document.getElementById("registerModal");
const registerForm = document.getElementById("register-form");
const registerButton = document.getElementById("register-button");

// Constantes de usuario y contraseña
const usuarioValido = 'adso2556678';
const contraseñaValida = 'adso2023';

// Función para abrir el modal de registro
function openRegisterModal() {
  const confirmRegister = confirm("¿Deseas registrarte?");
  if (confirmRegister) {
    const modalInstance = bootstrap.Modal.getInstance(loginModal);
    modalInstance.hide();
    const registerModalInstance = new bootstrap.Modal(registerModal);
    registerModalInstance.show();
  }
}

// Función para cerrar el modal de inicio de sesión
function closeLoginModal() {
  const modalInstance = bootstrap.Modal.getInstance(loginModal);
  modalInstance.hide();
}

// Función para cerrar el modal de registro
function closeRegisterModal() {
  const modalInstance = bootstrap.Modal.getInstance(registerModal);
  modalInstance.hide();
  const loginModalInstance = new bootstrap.Modal(loginModal);
  loginModalInstance.show();
}

// Validación al hacer clic en el botón "INGRESAR"
loginButton.addEventListener("click", function(event) {
  event.preventDefault(); // Evitar el envío del formulario
  
  // Obtener los valores del usuario y la contraseña ingresados
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Validar que los campos no estén vacíos
  if (username.trim() === '' || password.trim() === '') {
    alert("Por favor, complete todos los campos");
    return;
  }

  // Validar las credenciales
  if (username === usuarioValido && password === contraseñaValida) {
    const selectedRole = document.getElementById('role').value;
    closeLoginModal(); // Ocultar el modal después de un inicio de sesión exitoso
    // Redirigir a la página index.html después de un inicio de sesión exitoso
    window.location.href = "/BizPage/index.html?role=" + selectedRole;
  } else {
    if (username !== usuarioValido) {
      const confirmRegister = confirm("El usuario ingresado no existe");
      if (confirmRegister) {
        openRegisterModal();
      }
    } else if (password !== contraseñaValida) {
      alert("Contraseña incorrecta");
    }
  }
});

// Validación al hacer clic en el botón "Registrarse" en el modal de registro
registerForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario
  
  // Realizar acciones necesarias para el registro
  // ...

  // Cerrar el modal de registro
  closeRegisterModal();

  // Redirigir a la página index.html después de un registro exitoso
  window.location.href = "/BizPage/index.html";
});

//seleccion de rol 

window.addEventListener('load', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const storedRole = urlParams.get('role');

  if (storedRole) {
    const titulo = document.querySelector('.logo a');
    const menu = document.getElementById('navbar');
    const links = menu.getElementsByTagName('a');
    const boxes = document.querySelectorAll('.box');
    const skillsSection = document.getElementById('skills');
    const title1 = boxes[2].querySelector('.title');
    const description1 = boxes[2].querySelector('.description');
    const title2 = boxes[3].querySelector('.title');
    const description2 = boxes[3].querySelector('.description');
    const aboutSection = document.getElementById('about');
    const ulElement = aboutSection.querySelector('.content ul');
    const imgElement = aboutSection.querySelector('.col-lg-6 img');
    const featuredServicesSection = document.getElementById('featured-services');
    const factsSection = document.getElementById('facts');
    const contactSection = document.getElementById('contact');
    const ingresaAhoraBtn = document.querySelector('button[data-bs-target="#staticBackdrop"]');
    const cerrarSesionBtn = document.createElement('button');
    const letrae = document.querySelector('#letrad');
    const aboutSection2 = document.getElementById("ciudades");
    const tit = document.querySelector("#tit");
    const comunidad = document.querySelector("#comunidad");

    
    if (storedRole === '1') {
      titulo.textContent = 'Docente';
      links[0].innerHTML = 'Cursos';
      links[1].innerHTML = 'Mis Estudiantes';
      links[2].innerHTML = 'Tareas';
      boxes[1].parentNode.removeChild(boxes[1]);
      boxes[0].parentNode.removeChild(boxes[0]);
      boxes[2].style.display = 'block';
      boxes[2].style.margin = '0 auto';
      boxes[3].style.display = 'block';
      boxes[3].style.margin = '0 auto';
      skillsSection.remove();
      title1.textContent = 'Trabaja cuando quieras';
      description1.textContent = 'Ponte de acuerdo para escoger horario y fecha que se ajuste mejor a tu día a día'; 
      title2.textContent = 'Precios Negociables';
      description2.textContent = 'Oferta y contraoferta el valor de tu clase';
      ulElement.remove();
      aboutSection2.style.display = "none";
      tit.textContent = "¡Bienvenido a Educatio, estimado docente!";
      comunidad.textContent = "Nos complace contar con tu experiencia y dedicación para formar parte de nuestra plataforma educativa en línea. Sabemos que los tiempos han cambiado y que la educación virtual se ha vuelto fundamental en el aprendizaje de nuestros estudiantes.En Educatio, valoramos profundamente el papel del docente como guía y facilitador del conocimiento. Nuestro objetivo es proporcionarte una plataforma intuitiva y robusta que te permita ofrecer clases virtuales o presenciales de manera efectiva y enriquecedora.";
      comunidad.style.fontWeight = "bold" ;
      cerrarSesionBtn.setAttribute('type', 'button');
      cerrarSesionBtn.setAttribute('class', 'btn btn-primary');
      cerrarSesionBtn.textContent = 'Cerrar Sesión';
      ingresaAhoraBtn.parentNode.replaceChild(cerrarSesionBtn, ingresaAhoraBtn);
      cerrarSesionBtn.addEventListener('click', function() {
      window.location.href = '/BizPage/index.html';
      });

    } else if (storedRole === '2') {
      titulo.textContent = 'Estudiante';
      links[0].innerHTML = 'Materias';
      links[1].innerHTML = 'Mis Clases';
      links[2].innerHTML = 'Postulaciones';
      boxes[2].parentNode.removeChild(boxes[2]);
      boxes[3].parentNode.removeChild(boxes[3]);
      boxes[1].style.display = 'block';
      boxes[1].style.margin = '0 auto';
      boxes[0].style.display = 'block';
      boxes[0].style.margin = '0 auto';
      imgElement.src = '/BizPage/assets/img/Educación-virtual.png';
      letrae.style.fontFamily = "Times New Roman, serif";
      aboutSection2.style.display = "none";
      tit.textContent = "¡Hola, querido estudiante!";
      comunidad.textContent = "En Educatio, nuestro principal objetivo es apoyarte en tu camino de aprendizaje y ayudarte a alcanzar tus metas académicas. Nuestra plataforma te ofrece acceso a una amplia variedad de cursos y materiales educativos de alta calidad, impartidos por docentes expertos en sus campos.";
      comunidad.style.fontWeight = "bold";
      cerrarSesionBtn.setAttribute('type', 'button');
      cerrarSesionBtn.setAttribute('class', 'btn btn-primary');
      cerrarSesionBtn.textContent = 'Cerrar Sesión';
      ingresaAhoraBtn.parentNode.replaceChild(cerrarSesionBtn, ingresaAhoraBtn);
      cerrarSesionBtn.addEventListener('click', function() {
      window.location.href = '/BizPage/index.html'; 
      });

    } else if (storedRole === '3') {
      titulo.textContent = 'Administrador';
      links[0].innerHTML = 'Usuarios';
      links[1].innerHTML = 'Informes';
      links[2].innerHTML = 'Configuración';
      imgElement.src = "/BizPage/assets/img/administracion.jpg";
      featuredServicesSection.style.display = 'none';
      factsSection.style.display = 'none';
      contactSection.style.display = 'none';
      cerrarSesionBtn.setAttribute('type', 'button');
      cerrarSesionBtn.setAttribute('class', 'btn btn-primary');
      cerrarSesionBtn.textContent = 'Cerrar Sesión';
      ingresaAhoraBtn.parentNode.replaceChild(cerrarSesionBtn, ingresaAhoraBtn);
      cerrarSesionBtn.addEventListener('click', function() {
      window.location.href = '/BizPage/index.html'; 
      });
    }
  }
});


