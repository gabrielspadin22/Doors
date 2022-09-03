let PuertaEsteEquipo = `
<!------------------- Nombre de la carpeta e icono ------------------->
<div class="d-flex text-light">
    <div class="text-light" id="barra_top_puerta">
        <i class="bi bi-pc-display fs-5 text-light m-2"></i>
        <small class="mx-2">Este equipo</small>
    </div>
    <!------------------- Cerrar y maximixar puerta ------------------->
    <div class="p-2 hover_grey ">-</div>
    <div class="p-2 hover_grey " id="ampliar_puerta">❒</div>
    <div class="p-2 btn_cerrar " id="cerrar_puerta">X</div>
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
    <!------------------- Separador carpetas ------------------->    
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
    </div>
</div>
<div class="bg-secondary ">
    <div class="">.</div>
</div>`;

export default PuertaEsteEquipo;