// SELECTORES
const contenedorCursos = document.getElementById('contenedor-cursos');
const selectorCursos = document.getElementById('selector-cursos');
const filtroTodos = document.getElementById('todos');
const filtroTecnicas = document.getElementById('tecnicas');
const filtroSoftware = document.getElementById('software');
const filtroDiseño = document.getElementById('diseño');
let filtro = '';

// EVENT LISTENERS
window.onload = () => {
    obtenerCursos();
    selectorCursos.addEventListener('click', filtrarCursos);
    filtroTodos.addEventListener('click', pintarFiltro);
    filtroTecnicas.addEventListener('click', pintarFiltro);
    filtroSoftware.addEventListener('click', pintarFiltro);
    filtroDiseño.addEventListener('click', pintarFiltro);
};

// FUNCIONES
function filtrarCursos(e) {
    e.preventDefault();
    filtro = e.target.id;
    obtenerCursos(filtro);
}

function pintarFiltro(e) {
    e.preventDefault();
    const clase = document.querySelector('.cat-select');
    if(clase) {
        etiquetaFiltro.classList.remove('cat-select');
    }
    etiquetaFiltro = e.target;
    etiquetaFiltro.classList.add('cat-select');
}

function obtenerCursos(filtro) {
    try {
         fetch('js/cursos.json')
        .then(respuesta => respuesta.json())
        .then(resultado => {
           mostrarCursos(resultado.cursos, filtro);
        });
    } catch (error) {
        console.log(error);
    }
}

function mostrarCursos(listado, filtro) {
    limpiarHTML();
    if(filtro === undefined) {
        listado.map(curso => {
            const {id, acento, icono, titulo, descripcion, duracion, href, categoria} = curso;
            scripting(curso);
        });
    }
    listado.map(curso => {
        const {id, acento, icono, titulo, descripcion, duracion, href, categoria} = curso;
        if(filtro === curso.categoria) {
            scripting(curso);
        }
        if(filtro === 'todos') {
            scripting(curso);
        }
    });
    function scripting(curso) {
        contenedorCursos.innerHTML += `
            <div class="col-lg-3 col-xs-12 mb-3">
              <div class="card cursos-cards accent accent-${curso.acento}">
                <div class="card-body d-flex flex-column justify-content-center text-left m-2">
                  <i class="${curso.icono} mt-3 mb-3"></i>
                  <h5 class="card-title">${curso.titulo}</h5>
                  <p class="card-text">${curso.descripcion}</p>
                  <p><i class="far fa-clock mt-5 mb-1"></i> ${curso.duracion}</p>
                  <a href="${curso.href}" class="btn btn-outline-dark btn-${curso.acento}" id="${curso.id}">Ver más</a>
                </div>
              </div>
            </div>
            `;
    }
}

function limpiarHTML(){
    while(contenedorCursos.firstChild) {
        contenedorCursos.removeChild(contenedorCursos.firstChild);
    }
}
/*
// SELECTORES
const contenedorCursos = document.getElementById('contenedor-cursos');
const selectorCursos = document.getElementById('selector-cursos');
const filtroTodos = document.getElementById('todos');
const filtroTecnicas = document.getElementById('tecnicas');
const filtroSoftware = document.getElementById('software');
const filtroDiseño = document.getElementById('diseño');
let filtro = '';

// EVENT LISTENERS
window.onload = () => {
    selectorCursos.addEventListener('click', filtrarCursos);
    filtroTodos.addEventListener('click', pintarFiltro);
    filtroTecnicas.addEventListener('click', pintarFiltro);
    filtroSoftware.addEventListener('click', pintarFiltro);
    filtroDiseño.addEventListener('click', pintarFiltro);
};


// FUNCIONES
function filtrarCursos(e) {
    e.preventDefault();
    filtro = e.target.id;
    obtenerCursos(filtro);
}

function pintarFiltro(e) {
    e.preventDefault();
    const clase = document.querySelector('.cat-select');

    if(clase) {
        etiquetaFiltro.classList.remove('cat-select');
    }

    etiquetaFiltro = e.target;
    etiquetaFiltro.classList.add('cat-select');

}

function obtenerCursos(filtro) {
    try {
         fetch('js/cursos.json')
        .then(respuesta => respuesta.json())
        .then(resultado => {
           mostrarCursos(resultado.cursos, filtro);
        });
    } catch (error) {
        console.log(error);
    }
}

function mostrarCursos(listado, filtro) {
    limpiarHTML();

    listado.map(curso => {
        const {id, acento, icono, titulo, descripcion, duracion, href, categoria} = curso;

        if(curso.categoria === filtro) {
            scripting(curso);
        }

        if(filtro === 'todos') {
            scripting(curso);
        }

        function scripting(curso) {
            contenedorCursos.innerHTML += `
                <div class="col-lg-3 col-xs-12 mb-3">
                  <div class="card cursos-cards accent accent-${curso.acento}">
                    <div class="card-body d-flex flex-column justify-content-center text-left m-2">
                      <i class="${curso.icono} mt-3 mb-3"></i>
                      <h5 class="card-title">${curso.titulo}</h5>
                      <p class="card-text">${curso.descripcion}</p>
                      <p><i class="far fa-clock mt-5 mb-1"></i> ${curso.duracion}</p>
                      <a href="${curso.href}" class="btn btn-outline-dark btn-${curso.acento}" id="${curso.id}">Ver más</a>
                    </div>
                  </div>
                </div>
                `;
        }

    });

}

function limpiarHTML(){
    while(contenedorCursos.firstChild) {
        contenedorCursos.removeChild(contenedorCursos.firstChild);
    }
}
*/