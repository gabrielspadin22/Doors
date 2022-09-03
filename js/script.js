function startTime(){
    today=new Date();
    h=today.getHours();
    m=today.getMinutes();
    s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('reloj').innerHTML=h+":"+m+":"+s;
    t=setTimeout('startTime()',500);}
    function checkTime(i)
    {if (i<10) {i="0" + i;}return i;}
    window.onload=function(){startTime();
}
    let date = new Date();
    let d  = date.getDate();
    let day = (d < 10) ? '0' + d : d;
    let m = date.getMonth() + 1;
    let month = (m < 10) ? '0' + m : m;
    let yy = date.getYear();
    let year = (yy < 1000) ? yy + 1900 : yy;
    document.getElementById('fecha').innerHTML = day + "-" + month + "-" + year;

    let flag = 0;
    document.getElementById('bnt-inicio').addEventListener('click', ()=>{
    document.getElementById('menu-inicio').classList.toggle('d-flex');
    flag = 1;
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
    
    

class Door{
    constructor(style) {
        
        
    }
    
}





var mousePosition;
var offset = [0,0];
var div;
var isDown = false;

document.getElementById('este_equipo').addEventListener('dblclick', ()=>{crearDiv()});

function crearDiv() {
    div = document.createElement("div");
    div.innerHTML = `<div class="d-flex text-light">
                        <div class="bg-red" id="barra_top_puerta"><i class="bi bi-pc-display fs-5 text-light m-2"></i><small class="mx-2">Este equipo</small></div>
                        <div class="p-2 hover_grey ">-</div>
                        <div class="p-2 hover_grey " id="ampliar_puerta">❒</div>
                        <div class="p-2 btn_cerrar " id="cerrar_puerta">X</div>
                    </div>
                    <div class="d-flex bg-secondary">
                        <div>
                            <div>a</div>
                            <div>b</div>
                            <div>c</div>
                            <div>d</div>
                        </div>
                        <div>
                            <div>a</div>
                            <div>b</div>
                            <div>c</div>
                            <div>d</div>
                        </div>
                        <div class="d-flex">
                            <div>Datos C</div>
                            <div>Datos D</div>
                            <div></div>
                        </div>
                    </div>`;
    div.className = 'door';
    
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
}
