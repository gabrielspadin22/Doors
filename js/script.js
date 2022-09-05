// fecha y hora -------------------------------------------------------

let date = new Date();
let d  = date.getDate();
let day = (d < 10) ? '0' + d : d;
let m = date.getMonth() + 1;
let month = (m < 10) ? '0' + m : m;
let yy = date.getYear();
let year = (yy < 1000) ? yy + 1900 : yy;
document.getElementById('fecha').innerHTML = day + "-" + month + "-" + year;

function startTime(){
    var today=new Date();
    var h=today.getHours();
    m=today.getMinutes();
    var s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('reloj').innerHTML=h+":"+m+":"+s;
    setTimeout(() => {
        startTime();
    }, 500);}
    function checkTime(i)
    {if (i<10) {i="0" + i;}return i;}
    window.onload=function(){startTime();
}

// Control del boton de inicio de Doors ------------------------------
document.getElementById('bnt-inicio').addEventListener('click', ()=>{
    document.getElementById('menu-inicio').classList.toggle('d-flex');
});

// Control del boton de red ------------------------------
document.getElementById('wifi').addEventListener('click', ()=>{
    document.getElementById('red').classList.toggle('d-none');
    });

function CloseMenu() {
    document.getElementById('menu-inicio').classList.remove('d-flex');
    document.getElementById('red').classList.add('d-none');
}
document.getElementById('desk3').addEventListener('click', ()=>{
    CloseMenu()
});


// Creacion de puerta segun el icono presionado ------------------------
let mousePosition;
let offset = [0,0];
let div;
let pdf;
let Chrome;
let isDown = false;
let icon_open = document.getElementById('open_door');


// --------------------- Iconos ------------------------------
document.getElementById('este_equipo').addEventListener('dblclick', ()=>{crearPuerta("PuertaEsteEquipo", PuertaEsteEquipo, iconoPuertaEsteEquipo, maximixarPuertaEsteEquipo, "cerrar_puerta_EsteEquipo", "ampliar_puerta_EsteEquipo", "minimizar_puerta_EsteEquipo", "puerta_principal", puerta_este_equipo, "Este equipo", "bi-pc-display")});
document.getElementById('este_equipo_barra').addEventListener('click', ()=>{crearPuerta("PuertaEsteEquipo", PuertaEsteEquipo, iconoPuertaEsteEquipo, maximixarPuertaEsteEquipo, "cerrar_puerta_EsteEquipo", "ampliar_puerta_EsteEquipo", "minimizar_puerta_EsteEquipo", "puerta_principal", puerta_este_equipo, "Este equipo", "bi-pc-display")});
document.getElementById('gabriel_resume').addEventListener('dblclick', ()=>{crearPuerta("PuertaPdf", PuertaPdf, iconoPuertaPdf, maximixarPuertaPdf, "cerrar_puerta_pdf", "ampliar_puerta_pdf", "minimizar_puerta_pdf")});
document.getElementById('chrome').addEventListener('dblclick', ()=>{crearPuerta("PuertaChrome", PuertaChrome, iconoPuertaChrome, maximixarPuertaPdf, "cerrar_puerta_chrome", "ampliar_puerta_chrome", "minimizar_puerta_chrome")});
document.getElementById('chrome_barra').addEventListener('click', ()=>{crearPuerta("PuertaChrome", PuertaChrome, iconoPuertaChrome, maximixarPuertaPdf, "cerrar_puerta_chrome", "ampliar_puerta_chrome", "minimizar_puerta_chrome")});
document.getElementById('memes').addEventListener('dblclick', ()=>{crearPuerta("PuertaEsteEquipo", PuertaEsteEquipo, iconoPuertaCarpeta, maximixarPuertaEsteEquipo, "cerrar_puerta_EsteEquipo", "ampliar_puerta_EsteEquipo", "minimizar_puerta_EsteEquipo", "puerta_principal", puerta_memes, "Memes", "bi-folder-fill")});
document.getElementById('borradoores').addEventListener('dblclick', ()=>{crearPuerta("PuertaEsteEquipo", PuertaEsteEquipo, iconoPuertaCarpeta, maximixarPuertaEsteEquipo, "cerrar_puerta_EsteEquipo", "ampliar_puerta_EsteEquipo", "minimizar_puerta_EsteEquipo", "puerta_principal", "Esta carpeta esta vacia", "BorraDOORes", "bi-folder-fill")});
document.getElementById('papelera').addEventListener('dblclick', ()=>{crearPuerta("PuertaEsteEquipo", PuertaEsteEquipo, iconoPuertaPapelera, maximixarPuertaEsteEquipo, "cerrar_puerta_EsteEquipo", "ampliar_puerta_EsteEquipo", "minimizar_puerta_EsteEquipo", "puerta_principal", "Esta carpeta esta vacia", "Papelera de reciclaje", "bi-trash3")});


// --------------------- Epica funcion para crear cada puerta ------------------------------
function crearPuerta(idElemento, elemento, icono, maximixar, btnCerrarPuerta, btnAmpliarPuerta, btnMinimizarPuerta, contenidoPrincipal, contenidoAMostrar, Ncarpeta, ICarpeta) {
    
    
    idElemento = document.createElement(idElemento);
    idElemento.innerHTML = elemento;
    idElemento.className = 'door';
    
    
    

    let iconoAInsertar = document.createElement('div');

    iconoAInsertar.classList.add("d-flex", "border-bottom", "hover_grey");
    iconoAInsertar.innerHTML = icono;
    icon_open.appendChild(iconoAInsertar);

    iconoAInsertar.addEventListener('click', ()=>{
        idElemento.classList.toggle("d-none");
    })

    document.body.appendChild(idElemento);

    if (Ncarpeta) {
        document.getElementById('nombre_carpeta').innerHTML = Ncarpeta;
        document.getElementById('icono_carpeta').classList.add(ICarpeta);
    }
    
    
    if (contenidoPrincipal) {
        document.getElementById(contenidoPrincipal).innerHTML = contenidoAMostrar;
    };
    

    document.getElementById(btnAmpliarPuerta).addEventListener('click', ()=>{
        idElemento.classList.toggle(maximixar);
    });
    document.getElementById(btnMinimizarPuerta).addEventListener('click', ()=>{
        idElemento.classList.toggle("d-none");
    });
    document.getElementById('barra_top_puerta').addEventListener('dblclick', ()=>{
        idElemento.classList.toggle(maximixar);
    });
    idElemento.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            idElemento.offsetLeft - e.clientX,
            idElemento.offsetTop - e.clientY
        ];
    }, true);

    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);

    document.getElementById(btnCerrarPuerta).addEventListener('click', ()=>{
        idElemento.parentNode.removeChild(idElemento);
        icon_open.removeChild(iconoAInsertar);
        });

    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {

                x : event.clientX,
                y : event.clientY

            };
            idElemento.style.left = (mousePosition.x + offset[0]) + 'px';
            idElemento.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
};


// --------------------- PUERTAS -------------------------------------

// --------------------- Este equipo ------------------------------
let maximixarPuertaEsteEquipo = "maximizar_puerta";
let iconoPuertaEsteEquipo = `<i class="my-auto hover_grey pt-2 bi bi-pc-display fs-5 px-3 text-ligth"></i>`;
let PuertaEsteEquipo = `
<!------------------- Nombre de la carpeta e icono ------------------->
<div class="d-flex text-light">
    <div class="text-light" id="barra_top_puerta">
        <i id="icono_carpeta" class="bi fs-5 text-light m-2"></i>
        <small class="mx-2" id="nombre_carpeta"></small>
    </div>
    <!------------------- Cerrar y maximixar puerta ------------------->
    <div class="p-2 hover_grey " id="minimizar_puerta_EsteEquipo">-</div>
    <div class="p-2 hover_grey " id="ampliar_puerta_EsteEquipo">❒</div>
    <div class="p-2 btn_cerrar " id="cerrar_puerta_EsteEquipo">X</div>
</div>
<!------------------- Barra superior ------------------->
<div class="bg-dark text-light">
    <div class="d-flex">
        <div class="px-2 p-1 hover_grey">Archivo</div>
        <div class="px-2 p-1 hover_grey">Equipo</div>
        <div class="px-2 p-1 hover_grey"><small>Vista</small></div>
        <div class="ms-auto p-1 px-2 hover_grey">v</div>
        <div class="px-2 p-1 hover_grey">?</div>
    </div>
</div>
<!------------------- Barra de navegacion y busqueda ------------------->
<div class="bg-dark text-light py-1">
    <div class="d-flex">
        <div class="px-2 p-1 hover_grey"><i class="bi bi-arrow-left-circle"></i></div>
        <div class="px-2 p-1 hover_grey"><i class="bi bi-arrow-right-circle"></i></div>
        <div class="px-2 p-1 hover_grey"><small>v</small></div>
        <div class="px-2 p-1 hover_grey"><i class="bi bi-arrow-up""></i></div>
        <div class="d-flex border w-100">
            <i class="bi bi-pc-display text-light mx-1 my-auto"></i>
            <div class="my-auto hover_grey mx-1"><small>></small></div>
            <input class="buscadorEquipo pe-5 mx-2 my-0 bg-dark " type="text" name="" id="" placeholder="Este equipo">
        </div>
        <div class="d-flex border mx-3 w-100">
            <small class="my-auto"><i class="bi bi-search my-auto mx-1 p-0"></i></small>
            <input class="me-3 buscadorEquipo pe-5 my-auto bg-dark" type="text" name="" id="" placeholder="Buscar en este equipo">
        </div>
    </div>
</div>
<!------------------- Contenido ------------------->
<div class="d-flex bg-dark contenido text-secondary ">
    <!------------------- Menu lateral ------------------->
    <div class="ubicaciones overflowY fs_7 ">
        <div class="hover_grey px-2 mt-3">Acceso rapido</div>
        <div class="hover_grey px-3">Escritorio</div>
        <div class="hover_grey px-3">Descargas</div>
        <div class="hover_grey px-3">Documentos</div>
        <div class="hover_grey px-3">Imagenes</div>
        <div class="hover_grey px-3">Videos</div>
        <div class="hover_grey px-2 my-3">OneDrive - Personal</div>
        <div class="hover_grey px-2">Este equipo</div>
        <div class="hover_grey px-3">Descargas</div>
        <div class="hover_grey px-3">Documentos</div>
        <div class="hover_grey px-3">Escritorio</div>
        <div class="hover_grey px-3">Imagenes</div>
        <div class="hover_grey px-3">Musica</div>
        <div class="hover_grey px-3">Obejetos 3D</div>
        <div class="hover_grey px-3">Disco local (C:)</div>
        <div class="hover_grey px-3">Nuevo vol (D:)</div>
        <div class="hover_grey px-2">Red</div>
    </div>
    <!------------------- Puerta de contenido principal -------------------> 
    <div id="puerta_principal"></div>
</div>
<div class="bg-secondary ">
    <div class="">.</div>
</div>`;
// --------------------- Gabriel's resume ------------------------------
let maximixarPuertaPdf = "maximizar_pdf";
let iconoPuertaPdf = `<i class="my-auto pt-2 bi bi-file-earmark-pdf fs-5 px-3 text-danger"></i>`;
let PuertaPdf = `
    <div class="d-flex text-light">
        <div class="text-light my-auto" id="barra_top_puerta">
            <i class="bi bi-file-earmark-pdf fs_6_5 text-light m-2"></i>
            <small class="mx-2">Gabriel's resume</small>
        </div>
        <!------------------- Cerrar y maximixar puerta ------------------->
        <div class="p-2 hover_grey " id="minimizar_puerta_pdf">-</div>
        <div class="p-2 hover_grey " id="ampliar_puerta_pdf">❒</div>
        <div class="p-2 btn_cerrar " id="cerrar_puerta_pdf">X</div>
    </div>
    <iframe src="documents/Gabriel's Resume.pdf" style="width:100%; height:88%;" frameborder="0" ></iframe>
`;
// --------------------- NavegaDoor Chrome ------------------------------
let iconoPuertaChrome = `<i class="my-auto pt-2 bi bi-browser-chrome fs-5 px-3"></i>`;
let PuertaChrome = `<div class="d-flex text-light ">
<div class="text-light mt-auto " id="barra_top_puerta">
    <div class="bg-secondary pt-1  me-auto pestaña">
        <i class="bi bi-browser-chrome fs_6_5 text-light m-2"></i>
        <small class="me-5 pe-4">Chrome</small>
    </div>
</div>
<!------------------- Cerrar y maximixar puerta ------------------->
<div class="p-2 hover_grey " id="minimizar_puerta_chrome">-</div>
<div class="p-2 hover_grey " id="ampliar_puerta_chrome">❒</div>
<div class="p-2 btn_cerrar " id="cerrar_puerta_chrome">X</div>
</div>
<div class="d-flex py-1 bg-secondary text-light ">
    <div class="px-2 p-1 "><i class="rounded-circle hover_white_shadow bi bi-arrow-left-circle"></i></div>
    <div class="px-2 p-1 "><i class="rounded-circle hover_white_shadow bi bi-arrow-right-circle"></i></div>
    <div class="px-2 p-1 "><i class="rounded-circle hover_white_shadow bi bi-arrow-clockwise"></i></div>
    
    <div class="d-flex border w-100 rounded-pill text-light bg-dark">
        <i class="rounded-circle hover_white_shadow bi bi-info-circle ms-2 my-auto"></i>
        <input class="buscadorEquipo pe-5 mx-2 my-0 bg-transparent " type="text" name="" id="" placeholder="Doors">
    </div>
    <div class="px-2 p-1 "><i class="rounded-circle hover_white_shadow bi bi-puzzle-fill""></i></div>
    <div class="px-2 p-1 "><i class="rounded-circle hover_white_shadow bi bi-music-note-list""></i></div>
    <div class="px-2 p-1 "><i class="rounded-circle hover_white_shadow bi bi-layout-sidebar-inset""></i></div>
    <div class="px-2 p-1 "><img class="foto rounded-circle hover_white_shadow" src="images/yo.jpg" alt="" srcset=""></div>
    <div class="px-2 p-1 "><i class="rounded-circle hover_white_shadow bi bi-three-dots-vertical""></i></div>
</div>

<div class="bg-dark h-100 text-light text-center overflowY">
    <h1 class="py-5 font_title text-center">Google</h1>
    <div class="d-flex">
        <div class="me-2 ms-auto">
            <a class="text-light" href="https://www.linkedin.com/in/gabriel-sebasti%C3%A1n-padin-86859b221/">
                <div class="hover_white_shadow bg-light rounded-circle px-4 py-3 "><i class="fs-5 bi bi-linkedin text-primary"></i></div>
                <small>LinkedIn</small>
            </a>
        </div>
        <div class="mx-4 ">
            <a class="text-light" href="https://github.com/gabrielspadin22">
                <div class="hover_white_shadow bg-light rounded-circle px-4 py-3 "><i class="fs-5 bi bi-github text-secondary"></i></div>
                <small >Github</small>
            </a>
        </div>
        <div class="ms-2 me-auto ">
            <a class="text-light" href="https://www.instagram.com/g.s.p.webdev/">
                <div class="hover_white_shadow bg-light rounded-circle px-3 py-3 "><i class="fs-5 bi bi-instagram text-purple"></i></div>
                <small>Instagram</small>
            </a>
        </div> 
    </div>
    <!------------------- Proyectos ------------------->
        <div class="d-flex my-5">
            <div class="w-100 my-auto">
                <div class="border-bottom"></div>
                <div class=""></div>
            </div>
            <div class="fs_6_5 w-25 ms-2">Proyectos</div>
            <div class="w-100 my-auto">
                <div class="border-bottom"></div>
                <div class=""></div>
            </div>
        </div>
    <div class="d-flex my-5">

        <div class="ms-auto ">
            <div>
                <a class="ms-auto" href="https://saphiraproducciones.000webhostapp.com/"><img src="images/logo.jpg" class="imgs mb-1 hover_white_shadow" alt="..."></a>
            </div>
            <small>Saphira producciones</small>
        </div>
        
        <div>
            <div>
            <a href="https://gabrielspadin22.github.io/MemeAlmohadonas/"><img src="images/memealmoha.jpg" class="imgs mb-1 hover_white_shadow" alt="..."></a>
            </div>
            <small>MemeAlmohadonas?</small>
        </div>
        <div>
            <div>
            <a href="http://www.gabrielspadindev.com.ar/Tecnicoto/index.html"><img src="images/tecnicoto.png" class="imgs mb-1 hover_white_shadow" alt="..."></a>
            </div>
            <small>Tecni-COTO</small>
        </div>
        <div>
            <div>
            <a href="https://i-commerce-bc241.web.app/"><img src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1" class="imgs mb-1 hover_white_shadow" alt="..."></a>
            </div>
            <small>I-Commerce</small>
        </div>
        <div class="me-auto">
            <div>
                <a class="me-auto" href="https://kratiavote.com/"><img src="https://kratiavote.com/images/kratia.png" class="imgs mb-1 hover_white_shadow" alt="..."></a>
            </div>
            <small>Kratia vote</small>
        </div>
    </div>
</div>`;

let puerta_este_equipo = 
`<!------------------- Separador carpetas ------------------->    
<div class="w-100">
    <div class="d-flex">
        <div class="fs_6_5 w-25 ms-2">Carpetas (5)</div>
        <div class="w-100 my-auto">
            <div class="border-bottom"></div>
            <div class=""></div>
        </div>
    </div>
    <!------------------- Carpetas ------------------->
    <div class="card-group " id="click_desktop2">        
        <div class="card bg-transparent border-0 mx-0" >
            <div class="card-body icono my-3 mx-0">
                <i class="bi bi-folder-fill fs-2 text-warning"></i>
                <p class="card-text nombre_icono"><small class="text-light">Memes</small></p>
            </div>
        </div>
        <div class="card bg-transparent border-0 mx-0">
            <div class="card-body icono my-3 mx-0">
                <i class="bi bi-folder-fill fs-2 text-warning"></i>
                <p class="card-text nombre_icono"><small class="text-light">Music</small></p>
            </div>
        </div>
        <div class="card bg-transparent border-0 mx-0">
            <div class="card-body icono my-3 mx-0">
                <i class="bi bi-folder-fill fs-2 text-warning"></i>
                <p class="card-text nombre_icono"><small class="text-light">Fotos</small></p>
            </div>
        </div>
        <div class="card bg-transparent border-0 mx-0">
            <div class="card-body icono my-3 mx-0">
                <i class="bi bi-folder-fill fs-2 text-warning"></i>
                <p class="card-text nombre_icono"><small class="text-light">asdasd</small></p>
            </div>
        </div>
        <div class="card bg-transparent border-0 mx-0">
            <div class="card-body icono my-3 mx-0">
                <i class="bi bi-folder-fill fs-2 text-warning"></i>
                <p class="card-text nombre_icono"><small class="text-light">Repos</small></p>
            </div>
        </div>
        <div class="card bg-transparent border-0 mx-0">
            <div class="card-body icono my-3 mx-0">
                <i class="bi bi-folder-fill fs-2 text-warning"></i>
                <p class="card-text nombre_icono"><small class="text-light">Secretos de estado</small></p>
            </div>
        </div>
    </div>
    <!------------------- Separador discos ------------------->
    <div class="d-flex">
        <div class="fs_6_5 w-50 ms-2">Dispositivos y unidades (2)</div>
        <div class="w-100 my-auto">
            <div class="border-bottom"></div>
            <div class=""></div>
        </div>
    </div>
    <!------------------- Discos ------------------->
    <div class="d-flex ">
        <div class="d-flex hover_grey m-2 p-2">
            <i class="bi bi-hdd-fill fs-1 "><i class="bi bi-door-closed fs_6_5"></i></i>
            <div class="mx-2">
                <div>Disco local (C:)</div>
                <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: 85%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <small>25 GB disponibles de 110 GB</small>
            </div>
        </div>
        <div class="d-flex hover_grey m-2 p-2">
            <i class="bi bi-hdd-fill fs-1"></i>
            <div class="mx-2">
                <div>Nuevo vol (D:)</div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <small>101 GB disponibles de 222 GB</small>
            </div>
        </div>
    </div>
</div>`;
let iconoPuertaPapelera = `<i class="my-auto pt-2 bi bi-trash3 fs-5 px-3 text-primary"></i>`;
let iconoPuertaCarpeta = `<i class="my-auto pt-2 bi bi-folder-fill fs-5 px-3 text-warning"></i>`;
let puerta_memes = 
`<!------------------- Separador carpetas ------------------->    
<div class="w-100 px-3">
    
    <!------------------- Carpetas ------------------->
    <div class="card-group " id="click_desktop2">        
        <div class="card bg-transparent border-0 mx-0" >
            <div class="card-body icono my-3 mx-0">
                <img class="imgs_vista_previa" src="https://external-preview.redd.it/7EiixaknemBY-Y6wz302ui3xfdx56etjTOIXQDurlQA.jpg?auto=webp&s=2c3290ef72898ff62bc0fc3f05dbcf5966b71585" alt="" srcset="">
                <p class="card-text nombre_icono text-center"><small class="text-light">asdds.jpg</small></p>
            </div>
        </div>
        <div class="card bg-transparent border-0 mx-0">
            <div class="card-body icono my-3 mx-0">
            <img class="imgs_vista_previa" src="https://memezila.com/saveimage/If-2020-was-a-door-meme-5783" alt="" srcset="">
            <p class="card-text nombre_icono text-center"><small class="text-light">asdds.jpg</small></p>
            </div>
        </div>
        <div class="card bg-transparent border-0 mx-0">
            <div class="card-body icono my-3 mx-0">
            <img class="imgs_vista_previa" src="https://i.imgflip.com/3lod7b.jpg" alt="" srcset="">
            <p class="card-text nombre_icono text-center"><small class="text-light">asdds.jpg</small></p>
            </div>
        </div>
        <div class="card bg-transparent border-0 mx-0">
            <div class="card-body icono my-3 mx-0">
            <img class="imgs_vista_previa" src="https://i.kym-cdn.com/photos/images/original/001/985/092/3b2.jpg" alt="" srcset="">
            <p class="card-text nombre_icono text-center"><small class="text-light">asdds.jpg</small></p>
            </div>
        </div>
        <div class="card bg-transparent border-0 mx-0">
            <div class="card-body icono my-3 mx-0">
            <img class="imgs_vista_previa" src="https://i.imgflip.com/375uc3.jpg" alt="" srcset="">
            <p class="card-text nombre_icono text-center"><small class="text-light">asdds.jpg</small></p>
            </div>
        </div>
        <div class="card bg-transparent border-0 mx-0">
            <div class="card-body icono my-3 mx-0">
            <img class="imgs_vista_previa" src="images/mem1.png" alt="" srcset="">
            <p class="card-text nombre_icono text-center"><small class="text-light">asdds.jpg</small></p>
            </div>
        </div>
    </div>
</div>`;