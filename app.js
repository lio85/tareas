let fs = require('fs');
let arrayDeObjetos=require('./servicios/tareas.json'); //importo el JSON como objeto literal
let {listarTareas,nuevaTarea,borrarTarea,filtrarPorEstado}=require('./funciones/funcionesDeTareas');

 //console.log(listarTareas);
// console.log(nuevaTarea);
// console.log(borrarTarea);
// console.log(filtrarPorEstado);console.
//console.log(arrayDeObjetos);

//listarTareas(arrayDeObjetos);
//nuevaTarea(arrayDeObjetos,{codigo:20,titulo:'remover archivos',estado:'pendiente'});
borrarTarea(arrayDeObjetos,20); 
//console.log(filtrarPorEstado(arrayDeObjetos,'pendiente'));





 //console.log(arrayDeObjetos);
// let codigo=20;
// let indice=50;
// // console.log(arrayDeObjetos[5].codigo);
// // console.log(codigo);
// for (let i=0;i<arrayDeObjetos.length;i++) {

//     if (arrayDeObjetos[i].codigo==codigo){

//      indice=i;
        
//      }

// }

// arrayDeObjetos.splice (indice,1); 

// console.log(arrayDeObjetos);


