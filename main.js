var images=['img/img1.JPG','img/img2.JPG',"img/img3.JPG"];
var cont=0;
function slider( caja ){ 
    caja.addEventListener('click', e => {
        let atras = caja.querySelector('.back');
        let adelante= caja.querySelector('.foward');
        let img = caja.querySelector('.hero-img');
        let tgt=e.target;

        if(tgt==atras){
            if (cont >0){
                img.src=images[cont-1];
                cont--;
            }else{
                img.src=images[images.length-1];
                cont=images.length-1;
            }
        } else if (tgt==adelante) {
            if(cont < images.length-1){
                img.src=images[cont+1];
                cont++;
            }else{
                img.src=images[0];
                cont=0;
            }
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    let caja=document.querySelector('.hero');
    slider(caja);
} );