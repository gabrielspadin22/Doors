function reloj() {
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
}

export default reloj();

