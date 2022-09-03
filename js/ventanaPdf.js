let ventanaPdf = `
    <div class="d-flex text-light">
        <div class="text-light my-auto" id="barra_top_puerta">
            <i class="bi bi-file-earmark-pdf fs_6_5 text-light m-2"></i>
            <small class="mx-2">Gabriel's resume</small>
        </div>
        <!------------------- Cerrar y maximixar puerta ------------------->
        <div class="p-2 hover_grey ">-</div>
        <div class="p-2 hover_grey " id="ampliar_puerta">❒</div>
        <div class="p-2 btn_cerrar " id="cerrar_puerta">X</div>
    </div>
    <iframe src="documents/Gabriel's Resume.pdf" style="width:100%; height:88%;" frameborder="0" ></iframe>
`;

export default ventanaPdf;