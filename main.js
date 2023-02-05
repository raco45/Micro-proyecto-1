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


function clean(){
    document.getElementById("nombre").value="";
    document.getElementById("mail").value="";
    document.getElementById("mensaje").value="";
};
function formulario (){
    var name = document.getElementById("nombre").value;
    var correo = document.getElementById("mail").value;
    var mensaje= document.getElementById("mensaje").value;
    let aux= false;
    if(name=="" || correo==""||mensaje==""){
        alert("Elemento vacio");
        clean();
    }else{

        if(notText(name.replace(" ","").toLowerCase())==false){
            alert("Nombre invalido");
            aux=false;
        
        }else{
            aux=true;
        }
    }
    if(aux==true){
        alert("Nombre: "+ name+ "\nCorreo: "+correo+ "\n Mensaje: "+mensaje );
        clean();
    }else{

    }
};

function notText(string){
    var valoresAceptados = /^[a-z]+$/;
       if (string.match(valoresAceptados)){
            return true;
       } else {
             return false;
      }
};
