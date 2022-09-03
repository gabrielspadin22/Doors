import  PuertaEsteEquipo  from "./puertaEsteEscritorio.js";
import ventanaPdf from "./ventanaPdf.js";
import PuertaChrome from "./puertaChrome.js";
import  reloj  from "../js/reloj.js";


reloj;
// Control del boton de inicio de Doors ------------------------------
document.getElementById('bnt-inicio').addEventListener('click', ()=>{
document.getElementById('menu-inicio').classList.toggle('d-flex');
});
function CloseMenu() {
    document.getElementById('menu-inicio').classList.remove('d-flex');
}
document.getElementById('click_desktop').addEventListener('click', ()=>{
    CloseMenu()
});
document.getElementById('click_desktop2').addEventListener('click', ()=>{
    CloseMenu()
});


// Creacion de ventana al hacer click en Este equipo ------------------------
let mousePosition;
let offset = [0,0];
let div;
let pdf;
let Chrome;
let isDown = false;
let icon_open = document.getElementById('open_door');

document.getElementById('este_equipo').addEventListener('dblclick', ()=>{crearDiv()});
document.getElementById('gabriel_resume').addEventListener('dblclick', ()=>{crearPdf()});
document.getElementById('chrome').addEventListener('dblclick', ()=>{crearChrome()});

function crearDiv() {
    div = document.createElement("div");
    div.innerHTML = PuertaEsteEquipo;
    div.className = 'door';
    icon_open.innerHTML = `<i class="pt-2 border-bottom bi bi-pc-display fs-5 px-3 text-ligth"></i>`;
    document.body.appendChild(div);

    div.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            div.offsetLeft - e.clientX,
            div.offsetTop - e.clientY
        ];
    }, true);

    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);

    document.getElementById('cerrar_puerta').addEventListener('click', ()=>{
        div.parentNode.removeChild(div);
        icon_open.innerHTML = "";
        });

    document.getElementById('ampliar_puerta').addEventListener('click', ()=>{
        div.classList.toggle('maximizar_puerta');
    });
    document.getElementById('barra_top_puerta').addEventListener('dblclick', ()=>{
        div.classList.toggle('maximizar_puerta');
    })
    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {

                x : event.clientX,
                y : event.clientY

            };
            div.style.left = (mousePosition.x + offset[0]) + 'px';
            div.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
};
// Creacion de ventana al hacer click en Gabriel's resume ------------------------
function crearPdf() {
    pdf = document.createElement("pdf");
    pdf.innerHTML = ventanaPdf;
    pdf.className = 'door';
    icon_open.innerHTML = `<i class="pt-2 border-bottom bi bi-file-earmark-pdf fs-5 px-3 text-danger"></i>`;
    document.body.appendChild(pdf);

    pdf.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            pdf.offsetLeft - e.clientX,
            pdf.offsetTop - e.clientY
        ];
    }, true);

    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);

    document.getElementById('cerrar_puerta').addEventListener('click', ()=>{
        pdf.parentNode.removeChild(pdf);
        icon_open.innerHTML = "";
        });

    document.getElementById('ampliar_puerta').addEventListener('click', ()=>{
        pdf.classList.toggle('maximizar_pdf');
    });
    document.getElementById('barra_top_puerta').addEventListener('dblclick', ()=>{
        pdf.classList.toggle('maximizar_pdf');
    })
    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {

                x : event.clientX,
                y : event.clientY

            };
            pdf.style.left = (mousePosition.x + offset[0]) + 'px';
            pdf.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}

// Creacion de ventana al hacer click en Chrome ------------------------
function crearChrome() {
    Chrome = document.createElement("chrome");
    Chrome.innerHTML = PuertaChrome;
    Chrome.className = 'door';
    icon_open.innerHTML = `<i class="pt-2 border-bottom bi bi-browser-chrome fs-5 px-3"></i>`;
    document.body.appendChild(Chrome);

    Chrome.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            Chrome.offsetLeft - e.clientX,
            Chrome.offsetTop - e.clientY
        ];
    }, true);

    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);

    document.getElementById('cerrar_puerta').addEventListener('click', ()=>{
        Chrome.parentNode.removeChild(Chrome);
        icon_open.innerHTML = "";
        });

    document.getElementById('ampliar_puerta').addEventListener('click', ()=>{
        Chrome.classList.toggle('maximizar_pdf');
    });
    document.getElementById('barra_top_puerta').addEventListener('dblclick', ()=>{
        Chrome.classList.toggle('maximizar_pdf');
    })
    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {

                x : event.clientX,
                y : event.clientY

            };
            Chrome.style.left = (mousePosition.x + offset[0]) + 'px';
            Chrome.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
}
