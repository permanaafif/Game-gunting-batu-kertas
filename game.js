const gunting = document.getElementsByClassName('gunting')[0];
const batu = document.getElementsByClassName('batu')[0];
const kertas = document.getElementsByClassName('kertas')[0];
const pilComp = document.getElementsByClassName('comp')[0];
const hasil = document.getElementsByClassName('hasil')[0];

function tanding(n){
    let comp =parseInt(Math.random()*3);
    let hasilComp;

    if (comp==2){
        hasilComp='Gunting';
        a = '&#9996';
    } else if(comp==1){
        hasilComp='Batu';
        a = '&#9994';
    }else{
        hasilComp='Kertas';
        a = '&#9995';
    }

    pilComp.innerHTML=a;
    let pemenang;
    if(hasilComp==n){
        pemenang='Seri &#128518';
    }else if(hasilComp=='Gunting'){
        if(n=='Kertas'){
            pemenang='Kamu Kalah &#128541';
        }else{
            pemenang='Kamu Menang &#128548';
        }
    }else if(hasilComp=='Batu'){
        if(n=='Kertas'){
            pemenang='Kamu Menang &#128548';
        }else{
            pemenang='Kamu Kalah &#128541';
        }
    }else if(hasilComp=='Kertas'){
        if(n=='Gunting'){
            pemenang='Kamu Menang &#128548';
        }else{
            pemenang='Kamu Kalah &#128541';
        }
    }
    hasil.innerHTML=pemenang;
}

gunting.addEventListener('click',function(){
    let n = 'Gunting';
    tanding(n);
});

batu.addEventListener('click',function(){
    let n = 'Batu';
    tanding(n);
});

kertas.addEventListener('click',function(){
    let n = 'Kertas';
    tanding(n);
});
