let fs = require('fs');
//funcion 1
function listarTareas(array){
    array.forEach(function(el,i){
         console.log(i+1+'. '+el.titulo);        
    }
    )
    return '';
 }
//funcion 2
function nuevaTarea(array,objeto){
    array.push(objeto);
    fs.writeFileSync('./servicios/tareas.json',(JSON.stringify(array,null,' ')));
    return;    
}
let elementoNuevo={"codigo":10,"titulo":'crear calculadora cientifica',"estado":'pendiente'}
//funcion 3
function borrarTarea(array,codigo){
    //forma 1: for & splice.
    let indice;
    for (let i=0;i<array.length;i++) {
        if (array[i].codigo==codigo){    
            indice=i;            
        }    
    }    
    array.splice (indice,1); 
    //forma 2: filter para generar nuevo arreglo.
    /*array= array.filter(function(elemento){
        return elemento.codigo!=codigo;
        })*/    
    fs.writeFileSync('./servicios/tareas.json',JSON.stringify(array,null,' '));
    return array;    
}
//funcion 4
function filtrarPorEstado(array,estado){
    return  array.filter(function(elemento){
                return elemento.estado==estado;
            })
    
}

module.exports={listarTareas,nuevaTarea,borrarTarea,filtrarPorEstado};

